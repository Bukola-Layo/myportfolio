import type { Metadata } from "next";
import Link from "next/link";
import { SectionContainer } from "@/components/layout/section-container";
import { Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Bukola Akintomide — Product Designer.",
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-32">
        <SectionContainer>
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <span className="mb-4 block text-sm font-medium uppercase tracking-widest text-[#4F46E5]">
                Contact
              </span>
              <h1 className="text-5xl font-medium leading-tight tracking-tight text-[#101010] md:text-7xl">
                Let&apos;s work together
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#5E5E5E]">
                Have a project in mind or just want to say hello? Fill out the
                form and I&apos;ll get back to you within 48 hours.
              </p>

              <div className="mt-12 space-y-4">
                <Link
                  href="mailto:layodesign001@gmail.com"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#101010] px-8 text-sm font-medium text-[#FAFAFA] transition-colors hover:bg-[#101010]/90 mt-6"
                >
                  <Mail className="h-4 w-4" />
                  Email me
                </Link>

                <div className="tooltip-container mt-6">
                  <button className="tooltip-button" style={{ background: "linear-gradient(135deg, #6e8efb, #a777e3)" }}>
                    <span>Connect with me</span>
                    <svg className="share-icon" width="16" height="16" viewBox="0 0 24 24" fill="white">
                      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
                    </svg>
                  </button>
                  <div className="tooltip-dropdown">
                    <div className="social-icons">
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
                        <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                      </a>
                      <a href="https://www.linkedin.com/in/bukola-akintomide-329a4b20b" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                        <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                        <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      </a>
                      <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="social-icon dribbble">
                        <svg viewBox="0 0 24 24"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.81zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.91 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#101010]">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-lg border border-[#101010]/10 bg-transparent px-4 py-3 text-sm text-[#101010] placeholder-[#5E5E5E] outline-none transition-colors focus:border-[#4F46E5]"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#101010]">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-[#101010]/10 bg-transparent px-4 py-3 text-sm text-[#101010] placeholder-[#5E5E5E] outline-none transition-colors focus:border-[#4F46E5]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[#101010]">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full rounded-lg border border-[#101010]/10 bg-transparent px-4 py-3 text-sm text-[#101010] placeholder-[#5E5E5E] outline-none transition-colors focus:border-[#4F46E5]"
                    placeholder="What is this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#101010]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full resize-none rounded-lg border border-[#101010]/10 bg-transparent px-4 py-3 text-sm text-[#101010] placeholder-[#5E5E5E] outline-none transition-colors focus:border-[#4F46E5]"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#101010] px-8 py-3 text-sm font-medium text-[#FAFAFA] transition-colors hover:bg-[#101010]/90"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </SectionContainer>
      </div>
    </>
  );
}
