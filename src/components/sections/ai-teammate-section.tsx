import { PanelTopOpen, MessageCircle, FileText } from 'lucide-react';
import { AnimatedWrapper } from '@/components/animated-wrapper';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const AiTeammateSection = () => {
  const steps = [
    {
      icon: <PanelTopOpen className="h-10 w-10 text-destructive" />,
      title: '1. Invite Your AI',
      description:
        'Simply invite "Quinn" to your scheduled Google Meet, Zoom, or Microsoft Teams class just like any other participant.',
    },
    {
      icon: <MessageCircle className="h-10 w-10 text-destructive" />,
      title: '2. Live Student Assist',
      description:
        'Quinn privately answers student questions in the chat, moderates discussion, and provides real-time support without interrupting the teacher.',
    },
    {
      icon: <FileText className="h-10 w-10 text-destructive" />,
      title: '3. Post-Class Report',
      description:
        'After the session, Quinn provides a detailed report on student engagement, common questions, and areas of confusion for the teacher.',
    },
  ];

  return (
    <section id="ai-teammate" className="py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Real-Time Support, Right When It's Needed.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              See how ClassQuery's AI teammate provides live support in three simple steps.
            </p>
          </div>
        </AnimatedWrapper>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <AnimatedWrapper key={step.title} delay={index * 200}>
               <Card className="h-full transform-gpu text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <CardHeader className="items-center">
                  <div className="rounded-xl bg-destructive/10 p-4">
                     {step.icon}
                  </div>
                  <CardTitle className="pt-4">{step.title}</CardTitle>
                  <CardDescription className="pt-2">{step.description}</CardDescription>
                </CardHeader>
              </Card>
            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiTeammateSection;
