'use server';
/**
 * @fileOverview An AI agent that summarizes a class session.
 *
 * - summarizeClassSession - A function that handles the class session summarization process.
 * - SummarizeClassSessionInput - The input type for the summarizeClassSession function.
 * - SummarizeClassSessionOutput - The return type for the summarizeClassSession function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeClassSessionInputSchema = z.object({
  sessionTranscript: z
    .string()
    .describe(
      'The transcript of the class session from Google Meet, Zoom, or Teams.'
    ),
});
export type SummarizeClassSessionInput = z.infer<
  typeof SummarizeClassSessionInputSchema
>;

const SummarizeClassSessionOutputSchema = z.object({
  summary: z.string().describe('The summary of the class session.'),
});
export type SummarizeClassSessionOutput = z.infer<
  typeof SummarizeClassSessionOutputSchema
>;

export async function summarizeClassSession(
  input: SummarizeClassSessionInput
): Promise<SummarizeClassSessionOutput> {
  return summarizeClassSessionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeClassSessionPrompt',
  input: {schema: SummarizeClassSessionInputSchema},
  output: {schema: SummarizeClassSessionOutputSchema},
  prompt: `You are an AI assistant that summarizes class sessions. Given the transcript of a class session, provide a concise and informative summary of the key concepts discussed.

Session Transcript: {{{sessionTranscript}}}`,
});

const summarizeClassSessionFlow = ai.defineFlow(
  {
    name: 'summarizeClassSessionFlow',
    inputSchema: SummarizeClassSessionInputSchema,
    outputSchema: SummarizeClassSessionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
