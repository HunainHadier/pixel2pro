import Layout from "@/components/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const sections = [
  {
    title: "Information We Collect",
    text: "We collect the details you submit during registration, enrollment, contact requests, and platform use, including your name, contact details, selected track, and learning preferences.",
  },
  {
    title: "How We Use Information",
    text: "We use information to manage admissions, provide course access, send support updates, improve learning experiences, and communicate important cohort details.",
  },
  {
    title: "Data Protection",
    text: "We use reasonable technical and organizational safeguards to protect learner information from unauthorized access, misuse, alteration, or loss.",
  },
  {
    title: "Communication",
    text: "Pixel2Pro may contact you through email, phone, or messaging channels about admissions, class schedules, support, or platform updates.",
  },
  {
    title: "Your Choices",
    text: "You may request corrections, updates, or deletion of personal information by contacting info@pixel2pro.com.",
  },
];

const Privacy = () => (
  <Layout>
    <section className="border-b border-slate-200 bg-slate-50 py-10 md:py-16">
      <div className="container max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Legal</p>
        <h1 className="mt-3 text-4xl font-bold md:text-6xl">Privacy Policy</h1>
        <p className="mt-4 text-slate-600">A clear summary of how Pixel2Pro handles learner and visitor information.</p>
      </div>
    </section>

    <section className="py-10 md:py-16">
      <div className="container max-w-4xl">
        <Accordion type="single" collapsible defaultValue="item-0" className="rounded-lg border border-slate-200 bg-white px-5">
          {sections.map((section, index) => (
            <AccordionItem key={section.title} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-bold hover:no-underline">
                {section.title}
              </AccordionTrigger>
              <AccordionContent className="leading-7 text-slate-600">
                {section.text}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  </Layout>
);

export default Privacy;
