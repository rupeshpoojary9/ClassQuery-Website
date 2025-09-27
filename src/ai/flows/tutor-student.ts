'use server';

/**
 * @fileOverview An AI agent that tutors a student on a given topic.
 *
 * - tutorStudent - A function that handles the tutoring process.
 * - TutorStudentInput - The input type for the tutorStudent function.
 * - TutorStudentOutput - The return type for the tutorStudent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const TutorStudentInputSchema = z.object({
  topic: z.string().describe('The topic the student wants to learn about.'),
  question: z.string().describe('The student’s question about the topic.'),
});
export type TutorStudentInput = z.infer<typeof TutorStudentInputSchema>;

const TutorStudentOutputSchema = z.object({
  explanation: z.string().describe('The AI assistant’s explanation of the topic, answering the student’s question.'),
});
export type TutorStudentOutput = z.infer<typeof TutorStudentOutputSchema>;

export async function tutorStudent(input: TutorStudentInput): Promise<TutorStudentOutput> {
  return tutorStudentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'tutorStudentPrompt',
  input: {schema: TutorStudentInputSchema},
  output: {schema: TutorStudentOutputSchema},
  prompt: `You are an AI assistant tutoring a student on the following topic:
Topic: {{{topic}}}

The student has asked the following question:
Question: {{{question}}}

Provide a clear and concise explanation that answers the student’s question about the topic.
`,
});

const tutorStudentFlow = ai.defineFlow(
  {
    name: 'tutorStudentFlow',
    inputSchema: TutorStudentInputSchema,
    outputSchema: TutorStudentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
