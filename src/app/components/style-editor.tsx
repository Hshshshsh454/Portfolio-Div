
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  SidebarGroup,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { generateStyleGuideAction } from '@/app/actions';
import { useState } from 'react';
import { Loader2, Palette, Sparkles, Type, Layout, Wind } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

const styleGuideSchema = z.object({
  portfolioUrl: z.string().url(),
  primaryColor: z.string(),
  backgroundColor: z.string(),
  accentColor: z.string(),
  headlineFont: z.string(),
  bodyFont: z.string(),
  iconographyDescription: z.string(),
  layoutDescription: z.string(),
  animationDescription: z.string(),
});

type StyleGuideFormValues = z.infer<typeof styleGuideSchema>;

const defaultValues: Partial<StyleGuideFormValues> = {
  portfolioUrl: 'https://portfolio-delta-brown-29.vercel.app/',
  primaryColor: '#F08080 (Soft Coral)',
  backgroundColor: '#FAF0E6 (Pale Peach)',
  accentColor: '#BC8F8F (Muted Rose)',
  headlineFont: 'Playfair Display',
  bodyFont: 'PT Sans',
  iconographyDescription: 'Simple, elegant line icons to highlight portfolio sections and features.',
  layoutDescription: 'Clean and structured layout with clear visual hierarchy for easy navigation.',
  animationDescription: 'Subtle fade-in and transition effects to enhance user experience without being distracting.',
};

export function StyleEditor() {
  const [isLoading, setIsLoading] = useState(false);
  const [styleGuide, setStyleGuide] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<StyleGuideFormValues>({
    resolver: zodResolver(styleGuideSchema),
    defaultValues,
    mode: 'onChange',
  });

  async function onSubmit(data: StyleGuideFormValues) {
    setIsLoading(true);
    const result = await generateStyleGuideAction(data);
    setIsLoading(false);

    if (result.success && result.data) {
      setStyleGuide(result.data);
      setIsDialogOpen(true);
    } else {
      toast({
        variant: 'destructive',
        title: 'Error Generating Style Guide',
        description: result.error || 'An unknown error occurred.',
      });
    }
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2">
              <Sparkles />
              AI Generation
            </SidebarGroupLabel>
            <FormDescription className="px-2 pb-2">
              Use the details of your portfolio to generate a new AI-powered style guide.
            </FormDescription>
            <FormField
              control={form.control}
              name="portfolioUrl"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Portfolio URL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2">
              <Palette />
              Colors
            </SidebarGroupLabel>
            <div className="space-y-2">
              <FormField control={form.control} name="primaryColor" render={({ field }) => (
                <FormItem><FormControl><Input placeholder="Primary Color" {...field} /></FormControl></FormItem>
              )} />
              <FormField control={form.control} name="backgroundColor" render={({ field }) => (
                <FormItem><FormControl><Input placeholder="Background Color" {...field} /></FormControl></FormItem>
              )} />
              <FormField control={form.control} name="accentColor" render={({ field }) => (
                <FormItem><FormControl><Input placeholder="Accent Color" {...field} /></FormControl></FormItem>
              )} />
            </div>
          </SidebarGroup>

          <SidebarGroup>
            <SidebarGroupLabel className="flex items-center gap-2">
                <Type />
                Typography
            </SidebarGroupLabel>
            <div className="space-y-2">
              <FormField control={form.control} name="headlineFont" render={({ field }) => (
                  <FormItem><FormControl><Input placeholder="Headline Font" {...field} /></FormControl></FormItem>
              )} />
              <FormField control={form.control} name="bodyFont" render={({ field }) => (
                  <FormItem><FormControl><Input placeholder="Body Font" {...field} /></FormControl></FormItem>
              )} />
            </div>
          </SidebarGroup>
          
          <SidebarGroup>
             <SidebarGroupLabel className="flex items-center gap-2">
                <Layout />
                Layout & Style
            </SidebarGroupLabel>
            <div className="space-y-2">
              <FormField control={form.control} name="iconographyDescription" render={({ field }) => (
                  <FormItem><FormLabel className="sr-only">Iconography</FormLabel><FormControl><Textarea placeholder="Iconography..." {...field} /></FormControl></FormItem>
              )} />
              <FormField control={form.control} name="layoutDescription" render={({ field }) => (
                  <FormItem><FormLabel className="sr-only">Layout</FormLabel><FormControl><Textarea placeholder="Layout..." {...field} /></FormControl></FormItem>
              )} />
               <FormField control={form.control} name="animationDescription" render={({ field }) => (
                  <FormItem><FormLabel className="sr-only">Animation</FormLabel><FormControl><Textarea placeholder="Animation..." {...field} /></FormControl></FormItem>
              )} />
            </div>
          </SidebarGroup>

          <div className="p-2">
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <><Sparkles className="mr-2 h-4 w-4" /> Generate Style Guide</>
              )}
            </Button>
          </div>
        </form>
      </Form>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-headline text-2xl">Generated AI Style Guide</DialogTitle>
          </DialogHeader>
          <ScrollArea className="h-[70vh] rounded-md border p-4">
              <div className="prose prose-sm max-w-none whitespace-pre-wrap">{styleGuide}</div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </>
  );
}
