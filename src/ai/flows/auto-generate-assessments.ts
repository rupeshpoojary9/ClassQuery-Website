'use server';
/**
 * @fileOverview An AI agent that automatically generates assessments.
 *
 * - autoGenerateAssessments - A function that handles the automatic generation of assessments.
 * - AutoGenerateAssessmentsInput - The input type for the autoGenerateAssessments function.
 * - AutoGenerateAssessmentsOutput - The return type for the autoGenerateAssessments function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutoGenerateAssessmentsInputSchema = z.object({
  topic: z.string().describe('The topic for which to generate assessments.'),
  numberOfQuestions: z.number().describe('The number of questions to generate.'),
  questionType: z
    .enum(['multiple choice', 'essay', 'true/false'])
    .describe('The type of questions to generate.'),
  difficulty: z
    .enum(['easy', 'medium', 'hard'])
    .describe('The difficulty level of the questions.'),
});
export type AutoGenerateAssessmentsInput = z.infer<
  typeof AutoGenerateAssessmentsInputSchema
>;

const AutoGenerateAssessmentsOutputSchema = z.object({
  assessment: z.string().describe('The generated assessment questions.'),
});
export type AutoGenerateAssessmentsOutput = z.infer<
  typeof AutoGenerateAssessmentsOutputSchema
>;

export async function autoGenerateAssessments(
  input: AutoGenerateAssessmentsInput
): Promise<AutoGenerateAssessmentsOutput> {
  return autoGenerateAssessmentsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'autoGenerateAssessmentsPrompt',
  input: {schema: AutoGenerateAssessmentsInputSchema},
  output: {schema: AutoGenerateAssessmentsOutputSchema},
  prompt: `You are an expert educator. Your task is to generate assessments (quizzes and tests) for the given topic, number of questions, question type, and difficulty level.

Topic: {{{topic}}}
Number of Questions: {{{numberOfQuestions}}}
Question Type: {{{questionType}}}
Difficulty: {{{difficulty}}}

Please generate the assessment questions in a format that is easy to read and use.
`,
});

const autoGenerateAssessmentsFlow = ai.defineFlow(
  {
    name: 'autoGenerateAssessmentsFlow',
    inputSchema: AutoGenerateAssessmentsInputSchema,
    outputSchema: AutoGenerateAssessmentsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
