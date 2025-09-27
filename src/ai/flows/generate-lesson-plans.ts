'use server';

/**
 * @fileOverview Generates lesson plans for teachers using AI.
 *
 * - generateLessonPlans - A function that generates a lesson plan based on the provided topic and grade level.
 * - GenerateLessonPlansInput - The input type for the generateLessonPlans function.
 * - GenerateLessonPlansOutput - The return type for the generateLessonPlans function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateLessonPlansInputSchema = z.object({
  topic: z.string().describe('The topic of the lesson plan.'),
  gradeLevel: z.string().describe('The grade level for which the lesson plan is intended.'),
});
export type GenerateLessonPlansInput = z.infer<typeof GenerateLessonPlansInputSchema>;

const GenerateLessonPlansOutputSchema = z.object({
  lessonPlan: z.string().describe('The generated lesson plan.'),
});
export type GenerateLessonPlansOutput = z.infer<typeof GenerateLessonPlansOutputSchema>;

export async function generateLessonPlans(input: GenerateLessonPlansInput): Promise<GenerateLessonPlansOutput> {
  return generateLessonPlansFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLessonPlansPrompt',
  input: {schema: GenerateLessonPlansInputSchema},
  output: {schema: GenerateLessonPlansOutputSchema},
  prompt: `You are an experienced teacher. Please generate a detailed and engaging lesson plan for the following topic and grade level:

Topic: {{{topic}}}
Grade Level: {{{gradeLevel}}}

The lesson plan should include learning objectives, activities, materials needed, and assessment methods.`, 
});

const generateLessonPlansFlow = ai.defineFlow(
  {
    name: 'generateLessonPlansFlow',
    inputSchema: GenerateLessonPlansInputSchema,
    outputSchema: GenerateLessonPlansOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
