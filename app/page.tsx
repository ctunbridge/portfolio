/**
 * Home Page
 *
 * Landing page with intro animation and main content.
 */
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { HomeIntro } from "@/components/home-intro/home-intro";
import { SideNav } from "@/components/ui/side-nav/side-nav";
import { CyclingText } from "@/components/ui/cycling-text";
import { CaseStudyCard } from "@/components/ui/case-study-card/case-study-card";

const INTRO_SHOWN_KEY = "home-intro-shown";

export default function Home() {
  const [showContent, setShowContent] = React.useState(false);

  // Check if intro was already shown to avoid content flash
  React.useEffect(() => {
    if (sessionStorage.getItem(INTRO_SHOWN_KEY) === "true") {
      setShowContent(true);
    }
  }, []);

  const handleIntroComplete = React.useCallback(() => {
    setShowContent(true);
  }, []);

  const handleSendEnquiry = () => {
    // TODO: Implement enquiry form/modal
    console.log("Send enquiry clicked");
  };

  const handleDownloadCV = () => {
    // TODO: Implement CV download
    console.log("Download CV clicked");
  };

  const navItems = [
    { label: "Welcome", id: "welcome" },
    { label: "Work", id: "work" },
    { label: "Experience", id: "experience" },
    { label: "Get in touch", action: handleSendEnquiry },
    { label: "Download CV", action: handleDownloadCV },
  ];

  return (
    <>
      <HomeIntro onComplete={handleIntroComplete} />

      <div
        className={cn(
          "min-h-screen transition-opacity duration-500",
          showContent ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="grid grid-cols-12 gap-4">
          <SideNav items={navItems} />

          <div className="col-span-12 space-y-8 pt-60 lg:col-span-9">
            {/* Welcome Section */}
            <section id="welcome" className="min-h-screen">
              <div className="grid grid-cols-9">
                <h1 className="typography-h1-demibold col-span-9 mb-50 h-75 md:col-span-8">
                  I'm a product designer, founder and builder of things, like{" "}
                  <CyclingText
                    texts={[
                      "this portfolio",
                      "design systems",
                      "next.js and tailwind.css sites",
                      "mobile native apps",
                      "react apps",
                    ]}
                  />
                  .
                </h1>
              </div>

              {/* Work Section */}
              <div id="work" className="grid grid-cols-1 gap-x-10 gap-y-20 mb-80 md:grid-cols-2">
                <CaseStudyCard
                  businessName="GetGround"
                  year="2025"
                  projectTitle="Platform UI Refresh"
                  imageSrc="/images/case-studies/GG Home - UI.jpg"
                  imageAlt="GetGround Platform UI Refresh"
                  href="/gg-ui"
                />
                <CaseStudyCard
                  businessName="GetGround"
                  year="2025"
                  projectTitle="Bookkeeping & MTD"
                  imageSrc="/images/case-studies/GG Home - BK.jpg"
                  imageAlt="GetGround Bookkeeping & MTD"
                  href="/gg-bookkeeping"
                />
                <CaseStudyCard
                  businessName="Sage"
                  year="2021-2024"
                  projectTitle="Sage Individual"
                  imageSrc="/images/case-studies/Sage-Home-Individual.jpg"
                  imageAlt="Sage Individual mobile app"
                  href="/sage-individual"
                />
                <CaseStudyCard
                  businessName="Sage"
                  year="2021-2024"
                  projectTitle="Graphite Design System"
                  imageSrc="/images/case-studies/Individual DS 2.jpg"
                  imageAlt="Sage GraphiteDesign System"
                  href="/sage-ds"
                />
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience" className="min-h-screen">
              <h2 className="typography-h2-demibold mb-6">Experience</h2>
              <p className="typography-body text-secondary">
                Experience section content goes here.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
