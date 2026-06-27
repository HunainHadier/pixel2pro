import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  BookOpen, 
  CreditCard, 
  Check, 
  ArrowLeft, 
  AlertCircle, 
  Loader2,
  Lock
} from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { courses, professionalProfiles } from "@/data/courses";
import { insertEnrollment, EnrollmentPayload } from "@/lib/enrollment";
import { toast } from "sonner";

const JoinNow = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  // States for form inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [cityCountry, setCityCountry] = useState("");
  const [professionalProfile, setProfessionalProfile] = useState("");
  const [selectedProgramTitle, setSelectedProgramTitle] = useState("");
  const [governmentId, setGovernmentId] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  // Validation and submit states
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Set initial program based on query parameter
  useEffect(() => {
    const programParam = searchParams.get("track") || searchParams.get("program") || "";
    if (programParam) {
      const matched = courses.find(
        (c) => 
          c.id.toLowerCase() === programParam.toLowerCase() || 
          c.title.toLowerCase() === programParam.toLowerCase()
      );
      if (matched) {
        setSelectedProgramTitle(matched.title);
      } else if (courses.length > 0) {
        setSelectedProgramTitle(courses[0].title);
      }
    } else if (courses.length > 0) {
      setSelectedProgramTitle(courses[0].title);
    }
  }, [searchParams]);

  // Derive source track ID from program title
  const getSelectedCourseId = () => {
    const matched = courses.find((c) => c.title === selectedProgramTitle);
    return matched ? matched.id : "";
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.full_name = "Full name is required";
    } else if (fullName.trim().length < 3) {
      newErrors.full_name = "Name must be at least 3 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!emailRegex.test(email.trim())) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!whatsappNumber.trim()) {
      newErrors.whatsapp_number = "WhatsApp number is required";
    } else if (whatsappNumber.trim().length < 7) {
      newErrors.whatsapp_number = "Please enter a valid WhatsApp number";
    }

    if (!cityCountry.trim()) {
      newErrors.city_country = "City & Country is required";
    }

    if (!professionalProfile) {
      newErrors.current_professional_profile = "Please select your professional profile";
    }

    if (!selectedProgramTitle) {
      newErrors.exact_program = "Please select a learning program";
    }

    if (!termsAccepted) {
      newErrors.terms_privacy_accepted = "You must accept the terms and privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly.");
      return;
    }

    setIsSubmitting(true);

    const payload: EnrollmentPayload = {
      full_name: fullName.trim(),
      whatsapp_number: whatsappNumber.trim(),
      city_country: cityCountry.trim(),
      current_professional_profile: professionalProfile,
      exact_program: selectedProgramTitle,
      email: email.trim().toLowerCase(),
      government_id: governmentId.trim() || "",
      terms_privacy_accepted: termsAccepted,
      source_track_id: getSelectedCourseId(),
    };

    try {
      await insertEnrollment(payload);
      setIsSubmitting(false);
      setShowSuccessModal(true);
      toast.success("Enrollment request submitted successfully!");
    } catch (error) {
      setIsSubmitting(false);
      console.error("Enrollment failed:", error);
      toast.error("Submission failed. Please check your internet connection and try again.");
    }
  };

  const handleCloseSuccess = () => {
    setShowSuccessModal(false);
    // Reset form
    setFullName("");
    setEmail("");
    setWhatsappNumber("");
    setCityCountry("");
    setProfessionalProfile(professionalProfiles[0] || "");
    setGovernmentId("");
    setTermsAccepted(false);
    // Navigate home
    navigate("/");
  };

  return (
    <Layout>
      <div className="min-h-screen py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden bg-slate-50">
        {/* Decorative background shapes */}
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-slow" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob-reverse" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back button */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-black mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Programs
          </Link>

          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Unlock Your Potential
            </h1>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Complete your registration to secure a seat in our upcoming cohort. Our admissions desk will review your profile and contact you on WhatsApp with access links.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enrollment Benefits Info */}
            <div className="space-y-6 lg:col-span-1">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4 text-lg">Your Enrollment Includes</h3>
                <ul className="space-y-4">
                  {[
                    "Cohort-based active learning environment",
                    "Direct access to industry mentors & office hours",
                    "Premium project feedback and review labs",
                    "Verification-ready credential on completion",
                    "Access to Pixel2Pro alumni channel & network"
                  ].map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                      <div className="h-5 w-5 rounded-full bg-slate-900 flex items-center justify-center shrink-0 text-white mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm space-y-4 relative overflow-hidden">
                <div className="absolute right-0 bottom-0 translate-x-1/4 translate-y-1/4 opacity-10">
                  <Lock size={120} />
                </div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                  <Lock size={12} /> Secure Registration
                </div>
                <h4 className="font-bold text-lg leading-snug">
                  Zero Upfront Charge to Register
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Your seat configuration and setup details will be provided at zero cost today. Paid credentials verification and cohort access fee will be verified during the WhatsApp onboarding call.
                </p>
              </div>
            </div>

            {/* Redesigned Registration Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-10 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Grid for two-column inputs on desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="space-y-2">
                      <label htmlFor="fullName" className="text-sm font-semibold text-slate-700 block">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          id="fullName"
                          type="text"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="e.g. Ali Ahmed"
                          className={`w-full h-12 pl-11 pr-4 rounded-xl border ${
                            errors.full_name ? "border-rose-500 bg-rose-50/20" : "border-slate-200 bg-slate-50 focus:bg-white"
                          } text-sm font-medium text-slate-900 outline-none transition focus:border-black placeholder:text-slate-400`}
                        />
                      </div>
                      {errors.full_name && (
                        <p className="text-xs font-medium text-rose-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.full_name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700 block">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. ali.ahmed@example.com"
                          className={`w-full h-12 pl-11 pr-4 rounded-xl border ${
                            errors.email ? "border-rose-500 bg-rose-50/20" : "border-slate-200 bg-slate-50 focus:bg-white"
                          } text-sm font-medium text-slate-900 outline-none transition focus:border-black placeholder:text-slate-400`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-xs font-medium text-rose-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-2">
                      <label htmlFor="whatsappNumber" className="text-sm font-semibold text-slate-700 block">
                        WhatsApp Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          id="whatsappNumber"
                          type="text"
                          value={whatsappNumber}
                          onChange={(e) => setWhatsappNumber(e.target.value)}
                          placeholder="e.g. +92 300 1234567"
                          className={`w-full h-12 pl-11 pr-4 rounded-xl border ${
                            errors.whatsapp_number ? "border-rose-500 bg-rose-50/20" : "border-slate-200 bg-slate-50 focus:bg-white"
                          } text-sm font-medium text-slate-900 outline-none transition focus:border-black placeholder:text-slate-400`}
                        />
                      </div>
                      <p className="text-[11px] text-slate-500">Include country code (e.g. +92)</p>
                      {errors.whatsapp_number && (
                        <p className="text-xs font-medium text-rose-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.whatsapp_number}
                        </p>
                      )}
                    </div>

                    {/* City & Country */}
                    <div className="space-y-2">
                      <label htmlFor="cityCountry" className="text-sm font-semibold text-slate-700 block">
                        City & Country <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input
                          id="cityCountry"
                          type="text"
                          value={cityCountry}
                          onChange={(e) => setCityCountry(e.target.value)}
                          placeholder="e.g. Lahore, Pakistan"
                          className={`w-full h-12 pl-11 pr-4 rounded-xl border ${
                            errors.city_country ? "border-rose-500 bg-rose-50/20" : "border-slate-200 bg-slate-50 focus:bg-white"
                          } text-sm font-medium text-slate-900 outline-none transition focus:border-black placeholder:text-slate-400`}
                        />
                      </div>
                      {errors.city_country && (
                        <p className="text-xs font-medium text-rose-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.city_country}
                        </p>
                      )}
                    </div>

                    {/* Professional Profile */}
                    <div className="space-y-2">
                      <label htmlFor="profile" className="text-sm font-semibold text-slate-700 block">
                        Professional Profile <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Briefcase className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select
                          id="profile"
                          value={professionalProfile}
                          onChange={(e) => setProfessionalProfile(e.target.value)}
                          className={`w-full h-12 pl-11 pr-4 rounded-xl border appearance-none ${
                            errors.current_professional_profile ? "border-rose-500 bg-rose-50/20" : "border-slate-200 bg-slate-50 focus:bg-white"
                          } text-sm font-medium text-slate-900 outline-none transition focus:border-black`}
                        >
                          <option value="">-- Select Profile --</option>
                          {professionalProfiles.map((p) => (
                            <option key={p} value={p}>
                              {p}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none border-l border-r border-b border-t-0 border-slate-500 h-1.5 w-1.5 rotate-45 transform -translate-x-1" />
                      </div>
                      {errors.current_professional_profile && (
                        <p className="text-xs font-medium text-rose-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.current_professional_profile}
                        </p>
                      )}
                    </div>

                    {/* Exact Program */}
                    <div className="space-y-2">
                      <label htmlFor="program" className="text-sm font-semibold text-slate-700 block">
                        Select Cohort Program <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <select
                          id="program"
                          value={selectedProgramTitle}
                          onChange={(e) => setSelectedProgramTitle(e.target.value)}
                          className={`w-full h-12 pl-11 pr-4 rounded-xl border appearance-none ${
                            errors.exact_program ? "border-rose-500 bg-rose-50/20" : "border-slate-200 bg-slate-50 focus:bg-white"
                          } text-sm font-medium text-slate-900 outline-none transition focus:border-black`}
                        >
                          <option value="">-- Select Program --</option>
                          {courses.map((c) => (
                            <option key={c.id} value={c.title}>
                              {c.title}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none border-l border-r border-b border-t-0 border-slate-500 h-1.5 w-1.5 rotate-45 transform -translate-x-1" />
                      </div>
                      {errors.exact_program && (
                        <p className="text-xs font-medium text-rose-500 flex items-center gap-1">
                          <AlertCircle size={12} /> {errors.exact_program}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Government ID (Optional) */}
                  <div className="space-y-2">
                    <label htmlFor="governmentId" className="text-sm font-semibold text-slate-700 block">
                      CNIC / Passport Number <span className="text-slate-400 font-normal">(Optional for profile validation)</span>
                    </label>
                    <div className="relative">
                      <CreditCard className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input
                        id="governmentId"
                        type="text"
                        value={governmentId}
                        onChange={(e) => setGovernmentId(e.target.value)}
                        placeholder="e.g. 35201-1234567-9"
                        className="w-full h-12 pl-11 pr-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white text-sm font-medium text-slate-900 outline-none transition focus:border-black placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Terms & Conditions Checkbox */}
                  <div className="space-y-2 pt-2">
                    <label className="flex items-start gap-3 select-none cursor-pointer">
                      <input
                        type="checkbox"
                        checked={termsAccepted}
                        onChange={(e) => setTermsAccepted(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-black focus:ring-black accent-black shrink-0"
                      />
                      <span className="text-xs text-slate-600 leading-normal">
                        I hereby agree to the{" "}
                        <Link to="/privacy" target="_blank" className="text-black font-semibold underline underline-offset-2">
                          Privacy Policy
                        </Link>{" "}
                        and authorize Pixel2Pro to evaluate my profile and communicate onboarding steps via email/WhatsApp.
                      </span>
                    </label>
                    {errors.terms_privacy_accepted && (
                      <p className="text-xs font-medium text-rose-500 flex items-center gap-1">
                        <AlertCircle size={12} /> {errors.terms_privacy_accepted}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-full text-base font-bold transition shadow-lg mt-4 bg-black hover:bg-slate-800 text-white flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Processing Enrollment...
                      </>
                    ) : (
                      "Complete Enrollment Registration"
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Premium Success Modal with Animated Checkmark */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-slate-100 animate-success-pop select-none">
            {/* Animated Checkmark Icon Wrapper */}
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100/50 text-emerald-600 relative">
              {/* Pulsing ring background */}
              <span className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping opacity-60" />
              
              {/* Scale in green circle */}
              <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 animate-scale-in">
                <svg className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path className="draw-check-path" strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Modal Heading */}
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Registration Successful!
            </h2>
            
            {/* Modal Content */}
            <div className="space-y-4 text-sm text-slate-600 leading-relaxed mb-8">
              <p>
                Thank you, <strong className="text-slate-900">{fullName}</strong>! Your registration request for the <strong className="text-slate-900">{selectedProgramTitle}</strong> has been received.
              </p>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 text-xs text-left text-slate-500 space-y-2">
                <p className="font-semibold text-slate-800">What happens next?</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>We've successfully logged your enrollment.</li>
                  <li>Our support team will verify your WhatsApp contact (<strong className="text-slate-800">{whatsappNumber}</strong>).</li>
                  <li>You will receive batch onboarding material, fee verification guides, and schedule updates via WhatsApp in 24 hours.</li>
                </ul>
              </div>
            </div>

            {/* Close / Action Button */}
            <Button
              onClick={handleCloseSuccess}
              className="w-full h-12 rounded-full font-bold bg-black text-white hover:bg-slate-800 transition"
            >
              Continue to Homepage
            </Button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default JoinNow;