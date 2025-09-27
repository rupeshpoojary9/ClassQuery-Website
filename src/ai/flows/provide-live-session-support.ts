 'use server';
/**
 * @fileOverview An AI agent that provides real-time support during live sessions.
 *
 * - provideLiveSessionSupport - A function that handles the live session support process.
 * - ProvideLiveSessionSupportInput - The input type for the provideLiveSessionSupport function.
 * - ProvideLiveSessionSupportOutput - The return type for the provideLiveSessionSupport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProvideLiveSessionSupportInputSchema = z.object({
  sessionDetails: z.string().describe('Details about the live session, including topic, current discussion points, and student questions.'),
  studentQuestion: z.string().describe('The specific question from the student requiring support.'),
  relevantMaterial: z.string().optional().describe('Optional: Any relevant material or context related to the question.'),
});
export type ProvideLiveSessionSupportInput = z.infer<typeof ProvideLiveSessionSupportInputSchema>;

const ProvideLiveSessionSupportOutputSchema = z.object({
  response: z.string().describe('The AI assistant’s response to the student question, providing helpful and relevant information.'),
  suggestedActions: z.array(z.string()).describe('Suggested actions for the student, such as further reading or practice problems.'),
});
export type ProvideLiveSessionSupportOutput = z.infer<typeof ProvideLiveSessionSupportOutputSchema>;

export async function provideLiveSessionSupport(input: ProvideLiveSessionSupportInput): Promise<ProvideLiveSessionSupportOutput> {
  return provideLiveSessionSupportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'provideLiveSessionSupportPrompt',
  input: {schema: ProvideLiveSessionSupportInputSchema},
  output: {schema: ProvideLiveSessionSupportOutputSchema},
  prompt: `You are an AI assistant providing real-time support to students during live sessions.

You will receive the following information about the session:
Session Details: {{{sessionDetails}}}

A student has asked the following question:
Student Question: {{{studentQuestion}}}

{{#if relevantMaterial}}
Here is some relevant material that might help you answer the question:
Relevant Material: {{{relevantMaterial}}}
{{/if}}

Respond to the student’s question in a clear, concise, and helpful manner. Also, provide a list of suggested actions that the student can take to further their understanding of the topic.
`,
});

const provideLiveSessionSupportFlow = ai.defineFlow(
  {
    name: 'provideLiveSessionSupportFlow',
    inputSchema: ProvideLiveSessionSupportInputSchema,
    outputSchema: ProvideLiveSessionSupportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
