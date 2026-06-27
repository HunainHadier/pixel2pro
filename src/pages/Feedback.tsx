import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { courses } from "@/data/courses";
import { insertRecord } from "@/lib/supabaseClient";
import { toast } from "sonner";

const Feedback = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [track, setTrack] = useState(courses[0].title);
  const [story, setStory] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !story.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      await insertRecord("feedbacks", {
        name: name.trim(),
        track: track,
        story: story.trim(),
        approved: true, // Auto-approve for instant visibility as requested
      });
      toast.success("Thank you! Your feedback has been submitted successfully.");
      setName("");
      setStory("");
    } catch (error) {
      console.error(error);
      toast.error(error instanceof Error ? error.message : "Failed to submit feedback.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="border-b border-slate-200 bg-slate-50 py-10 md:py-16">
        <div className="container max-w-xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Student Reviews</p>
          <h1 className="mt-3 text-3xl font-bold md:text-5xl">Share Your Experience</h1>
          <p className="mt-4 text-slate-600">
            Tell us about your learning journey at Pixel2Pro. Your review will be featured on our home page!
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container max-w-xl">
          <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl md:p-8">
            <h2 className="text-xl font-bold text-slate-900">Write a Testimonial</h2>
            <p className="text-xs text-slate-400 mt-1">Fields marked with * are required.</p>
            
            <div className="mt-6 space-y-5">
              <label className="floating-field">
                <Input
                  required
                  placeholder=" "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span>Your Name *</span>
              </label>

              <div>
                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Select Program Track *
                </label>
                <select
                  required
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                  className="h-12 w-full rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium outline-none focus:border-black"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title} ({c.track})
                    </option>
                  ))}
                </select>
              </div>

              <label className="floating-field">
                <Textarea
                  required
                  placeholder=" "
                  rows={5}
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                />
                <span>Your Feedback / Story *</span>
              </label>

              <Button type="submit" disabled={loading} className="h-12 w-full rounded-full">
                {loading ? "Submitting..." : "Submit Review"}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Feedback;
