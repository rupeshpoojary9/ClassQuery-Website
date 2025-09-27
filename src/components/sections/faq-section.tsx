import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { AnimatedWrapper } from '@/components/animated-wrapper';

const FaqSection = () => {
  const faqs = [
    {
      question: 'How does ClassQuery integrate with our existing systems?',
      answer:
        "ClassQuery is designed for seamless integration. We offer native integrations with popular Learning Management Systems (LMS) like Canvas, Blackboard, and Moodle. Our AI assistant, Quinn, can join Google Meet, Zoom, and Microsoft Teams calls with a simple invitation, requiring no complex setup. We also provide a robust API for custom integrations.",
    },
    {
      question: 'Is student data secure?',
      answer:
        'Absolutely. Data security and privacy are our top priorities. We are fully compliant with FERPA, GDPR, and other major data protection regulations. All data is encrypted in transit and at rest, and we employ state-of-the-art security measures to protect student information. We never sell or share data with third parties.',
    },
    {
      question: 'What kind of support is included?',
      answer:
        'We offer comprehensive support for all our plans. This includes 24/7 technical support, a dedicated account manager for our "Quinn" tier clients, and extensive onboarding and training materials for teachers and administrators. Our goal is to ensure you get the most out of ClassQuery from day one.',
    },
    {
      question: 'Can we customize the platform to match our brand?',
      answer:
        'Yes, customization is available for our "Robin" and "Quinn" tier clients. You can customize the platform with your institution\'s logo, colors, and branding to provide a consistent and familiar experience for your students and staff. Further customization options are available for enterprise clients.',
    },
  ];

  return (
    <section id="faq" className="bg-background/80 py-20 sm:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedWrapper>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-headline text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
            </p>
          </div>
        </AnimatedWrapper>
        <AnimatedWrapper delay={200}>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.question} value={faq.question}>
                <AccordionTrigger className="text-left text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        </AnimatedWrapper>
      </div>
    </section>
  );
};

export default FaqSection;
