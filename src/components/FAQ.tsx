import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Will testing new pricing models affect my current customers?",
      answer: "No, your existing customers will not be affected by any pricing experiments unless you explicitly choose to include them."
    },
    {
      question: "What happens to my data after the trial ends?",
      answer: "Your data remains secure and private. You can export it anytime, and it's automatically deleted if you choose not to continue."
    },
    {
      question: "How long does it take to set up and run tests?",
      answer: "Setup typically takes less than 30 minutes. Tests can start running immediately after integration is complete."
    },
    {
      question: "What if I find my ideal pricing strategy? Can I implement it easily?",
      answer: "Yes! Once you find your optimal pricing strategy, you can implement it with one click through our platform."
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};