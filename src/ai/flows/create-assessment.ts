'use server';
/**
 * @fileOverview An AI agent that generates an assessment for a specific lesson.
 *
 * - createAssessment - A function that handles the generation of the assessment.
 * - CreateAssessmentInput - The input type for the createAssessment function.
 * - CreateAssessmentOutput - The return type for the createAssessment function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CreateAssessmentInputSchema = z.object({
  lessonTopic: z.string().describe('The topic of the lesson for which to create the assessment.'),
  gradeLevel: z.string().describe('The grade level of the students taking the assessment.'),
  numberOfQuestions: z.number().describe('The number of questions to include in the assessment.'),
  questionType: z
    .enum(['multiple choice', 'essay', 'true/false'])
    .describe('The type of questions to generate.'),
  difficulty: z
    .enum(['easy', 'medium', 'hard'])
    .describe('The difficulty level of the assessment questions.'),
});
export type CreateAssessmentInput = z.infer<typeof CreateAssessmentInputSchema>;

const CreateAssessmentOutputSchema = z.object({
  assessment: z.string().describe('The generated assessment questions.'),
});
export type CreateAssessmentOutput = z.infer<typeof CreateAssessmentOutputSchema>;

export async function createAssessment(
  input: CreateAssessmentInput
): Promise<CreateAssessmentOutput> {
  return createAssessmentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'createAssessmentPrompt',
  input: {schema: CreateAssessmentInputSchema},
  output: {schema: CreateAssessmentOutputSchema},
  prompt: `You are an expert educator. Your task is to generate an assessment for a specific lesson. The assessment should be appropriate for the given grade level and cover the main topics of the lesson.

Lesson Topic: {{{lessonTopic}}}
Grade Level: {{{gradeLevel}}}
Number of Questions: {{{numberOfQuestions}}}
Question Type: {{{questionType}}}
Difficulty: {{{difficulty}}}

Please generate the assessment questions in a format that is easy to read and use. Include an answer key.
`,
});

const createAssessmentFlow = ai.defineFlow(
  {
    name: 'createAssessmentFlow',
    inputSchema: CreateAssessmentInputSchema,
    outputSchema: CreateAssessmentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
