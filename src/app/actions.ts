
'use server';

import { generateUIStyleGuide } from '@/ai/flows/generate-ui-style-guide';
import { z } from 'zod';

const styleGuideSchema = z.object({
  portfolioUrl: z.string().url('Please enter a valid URL.'),
  primaryColor: z.string().min(1, 'Primary color is required.'),
  backgroundColor: z.string().min(1, 'Background color is required.'),
  accentColor: z.string().min(1, 'Accent color is required.'),
  headlineFont: z.string().min(1, 'Headline font is required.'),
  bodyFont: z.string().min(1, 'Body font is required.'),
  iconographyDescription: z.string().min(1, 'Iconography description is required.'),
  layoutDescription: z.string().min(1, 'Layout description is required.'),
  animationDescription: z.string().min(1, 'Animation description is required.'),
});

export async function generateStyleGuideAction(data: unknown) {
  const validation = styleGuideSchema.safeParse(data);
  if (!validation.success) {
    return { error: 'Invalid input.', details: validation.error.flatten() };
  }

  try {
    const result = await generateUIStyleGuide(validation.data);
    return { success: true, data: result.styleGuide };
  } catch (e) {
    console.error(e);
    return { error: 'Failed to generate style guide. Please try again.' };
  }
}
