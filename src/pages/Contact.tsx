import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { insertRecord } from "@/lib/supabaseClient";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    setLoading(true);
    try {
      await insertRecord("contacts", {
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        message: message.trim(),
      });
      toast.success("Message sent. Our support team will reply soon.");
      formEl.reset();
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "Unable to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="border-b border-slate-200 bg-slate-50 py-10 md:py-16">
        <div className="container max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Support</p>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Contact Pixel2Pro.</h1>
          <p className="mt-4 max-w-2xl text-slate-600">Questions about tracks, cohorts, fees, or admissions? Send a note and we will help.</p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl md:p-8">
            <h2 className="text-2xl font-bold">Send a message</h2>
            <div className="mt-6 grid gap-5">
              <label className="floating-field">
                <Input required name="name" placeholder=" " />
                <span>Name</span>
              </label>
              <label className="floating-field">
                <Input required name="email" type="email" placeholder=" " />
                <span>Email</span>
              </label>
              <label className="floating-field">
                <Input required name="phone" type="tel" placeholder=" " />
                <span>Phone</span>
              </label>
              <label className="floating-field">
                <Textarea required name="message" placeholder=" " rows={6} />
                <span>Message</span>
              </label>
              <Button type="submit" disabled={loading} className="h-12 rounded-full">
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </div>
          </form>

          <div className="space-y-4">
            {[
              { icon: Mail, title: "Email", text: "info@pixel2pro.com", href: "mailto:info@pixel2pro.com" },
              { icon: Phone, title: "Admissions", text: "+92 309 227 1214", href: "tel:+923092271214" },
              { icon: MapPin, title: "Location", text: "UF-114, Kolachi IT Park, Gulshan E Jamal, Rashid Minhas Road, Karachi, Sindh, Pakistan" },
              { icon: MessageCircle, title: "Response Time", text: "Usually within one business day" },
            ].map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-5">
                <item.icon size={22} />
                <h3 className="mt-4 font-bold">{item.title}</h3>
                {item.href ? (
                  <a href={item.href} className="mt-1 block text-sm text-slate-600 underline underline-offset-4">
                    {item.text}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-slate-600">{item.text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
