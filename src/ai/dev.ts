import { config } from 'dotenv';
config();

import '@/ai/flows/auto-generate-assessments.ts';
import '@/ai/flows/generate-lesson-plans.ts';
import '@/ai/flows/provide-live-session-support.ts';
import '@/ai/flows/create-assessment.ts';
import '@/ai/flows/tutor-student.ts';
import '@/ai/flows/summarize-class-session.ts';