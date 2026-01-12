'use server';

/**
 * @fileOverview Generates a UI style guide from an existing portfolio.
 *
 * - generateUIStyleGuide - A function that generates the UI style guide.
 * - GenerateUIStyleGuideInput - The input type for the generateUIStyleGuide function.
 * - GenerateUIStyleGuideOutput - The return type for the generateUIStyleGuide function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateUIStyleGuideInputSchema = z.object({
  portfolioUrl: z.string().describe('The URL of the existing portfolio.'),
  primaryColor: z.string().describe('The primary color of the portfolio.'),
  backgroundColor: z.string().describe('The background color of the portfolio.'),
  accentColor: z.string().describe('The accent color of the portfolio.'),
  headlineFont: z.string().describe('The headline font of the portfolio.'),
  bodyFont: z.string().describe('The body font of the portfolio.'),
  iconographyDescription: z.string().describe('Description of the portfolio iconography.'),
  layoutDescription: z.string().describe('Description of the portfolio layout.'),
  animationDescription: z.string().describe('Description of the portfolio animations.'),
});
export type GenerateUIStyleGuideInput = z.infer<typeof GenerateUIStyleGuideInputSchema>;

const GenerateUIStyleGuideOutputSchema = z.object({
  styleGuide: z.string().describe('The generated UI style guide.'),
});
export type GenerateUIStyleGuideOutput = z.infer<typeof GenerateUIStyleGuideOutputSchema>;

export async function generateUIStyleGuide(input: GenerateUIStyleGuideInput): Promise<GenerateUIStyleGuideOutput> {
  return generateUIStyleGuideFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateUIStyleGuidePrompt',
  input: {schema: GenerateUIStyleGuideInputSchema},
  output: {schema: GenerateUIStyleGuideOutputSchema},
  prompt: `You are a UI/UX design expert. Analyze the existing portfolio based on the provided information and generate a comprehensive UI style guide.

Portfolio URL: {{{portfolioUrl}}}

Colors:
- Primary color: {{{primaryColor}}}
- Background color: {{{backgroundColor}}}
- Accent color: {{{accentColor}}}

Typography:
- Headline font: {{{headlineFont}}}
- Body font: {{{bodyFont}}}

Iconography: {{{iconographyDescription}}}
Layout: {{{layoutDescription}}}
Animation: {{{animationDescription}}}

Generate a UI style guide that refines the existing styles and ensures a cohesive and polished presentation.  The style guide should include specific recommendations for fonts, colors, spacing, and visual elements, consider visual hierarchy, readability, and overall aesthetic appeal, and align to modern web design principles.
`,
});

const generateUIStyleGuideFlow = ai.defineFlow(
  {
    name: 'generateUIStyleGuideFlow',
    inputSchema: GenerateUIStyleGuideInputSchema,
    outputSchema: GenerateUIStyleGuideOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
