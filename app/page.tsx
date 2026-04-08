/**
 * Home Page
 *
 * Landing page with intro animation and main content.
 */
"use client";

import * as React from "react";

import { Button } from "@/components/ui/button/button";
import { CaseStudyCard } from "@/components/ui/case-study-card/case-study-card";
import { ChatInput } from "@/components/ui/chat-input/chat-input";
import { CyclingText } from "@/components/ui/cycling-text/cycling-text";
import { ExperienceCard } from "@/components/ui/experience-card/experience-card";
import { Footer } from "@/components/ui/footer/footer";
import { HomeIntro } from "@/components/home-intro/home-intro";
import { SideNav } from "@/components/ui/side-nav/side-nav";
import { cn } from "@/lib/utils";
import { useChatContext } from "@/lib/chat-context";

const INTRO_SHOWN_KEY = "home-intro-shown";

export default function Home() {
  const { isOpen: isChatPanelOpen, openWithMessage } = useChatContext();
  const [showContent, setShowContent] = React.useState(false);
  const [showFloatingInput, setShowFloatingInput] = React.useState(false);
  const [showMoreExperience, setShowMoreExperience] = React.useState(false);
  const inlineInputRef = React.useRef<HTMLDivElement>(null);

  // Check if intro was already shown to avoid content flash
  React.useEffect(() => {
    if (sessionStorage.getItem(INTRO_SHOWN_KEY) === "true") {
      setShowContent(true);
    }
  }, []);

  // Track when inline input goes out of view
  React.useEffect(() => {
    // Don't show floating input when chat panel is open
    if (isChatPanelOpen) {
      setShowFloatingInput(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setShowFloatingInput(!entry.isIntersecting);
        }
      },
      { threshold: 0 }
    );

    // Small delay to ensure the element is rendered after chat panel closes
    const timeoutId = setTimeout(() => {
      if (inlineInputRef.current) {
        observer.observe(inlineInputRef.current);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [isChatPanelOpen]);

  const handleIntroComplete = React.useCallback(() => {
    setShowContent(true);
  }, []);

  const handleSendEnquiry = () => {
    window.location.href = "mailto:hello@christunbridge.co.uk";
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv/Chris Tunbridge CV '25.pdf";
    link.download = "Chris Tunbridge CV '25.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
          "min-h-screen",
          !showContent && "hidden"
        )}
      >
        <div className="grid grid-cols-12 gap-4">
          <SideNav items={navItems} />

          <div className="col-span-12 space-y-8 pt-60 @5xl:col-span-9">
            {/* Welcome Section */}
            <section id="welcome" className="min-h-screen">
              <div className="grid grid-cols-9">
                <h1 className="typography-h1-demibold col-span-9 mb-10 h-75 @3xl:col-span-8 animate-stagger-1">
                  I’m a senior product designer and design engineer building{" "}
                  <CyclingText
                    key={showContent ? "visible" : "hidden"}
                    texts={[
                      "digital products with measurable impact.",
                      "AI-assisted product experiences.",
                      "design systems that scale across teams.",
                      "Next.js and Tailwind prototypes that ship faster.",
                      "mobile apps for real customer needs.",
                      "React products from concept to delivery.",
                    ]}
                  />
                </h1>
                {!isChatPanelOpen && (
                  <div ref={inlineInputRef} className="col-span-9 mb-50 w-80 animate-stagger-2">
                    <ChatInput
                      placeholder="Ask something..."
                      onSubmit={(value) => openWithMessage(value)}
                    />
                  </div>
                )}
              </div>

              {/* Work Section */}
              <div id="work" className="grid grid-cols-1 gap-x-10 gap-y-25 mb-80 @3xl:grid-cols-2">
                <CaseStudyCard
                  businessName="GetGround"
                  year="2025/26"
                  projectTitle="Bookkeeping & Tax"
                  impact="From code first prototypes to production in days, built from our foundational design system Capcom"
                  imageSrc="/images/case-studies/gg-home-bk.jpg"
                  imageAlt="GetGround Bookkeeping & MTD"
                  href="/gg-bookkeeping"
                  priority
                  staggerClass="animate-stagger-card-1"
                />
                <CaseStudyCard
                  businessName="GetGround"
                  year="2025/26"
                  projectTitle="Enabling Product Led Growth"
                  impact="22% funnel uplift, 38% more sign-ups, and 41% more completions through clearer journeys and a more consistent product experience."
                  imageSrc="/images/case-studies/gg-home-ui.jpg"
                  imageAlt="GetGround Platform UI Refresh"
                  href="/gg-plg"
                  priority
                  staggerClass="animate-stagger-card-2"
                />
                <CaseStudyCard
                  businessName="Sage"
                  year="2021-2024"
                  projectTitle="Sage Individual"
                  impact="Helping ~150,000 UK sole traders manage core business tasks with more confidence and less admin friction."
                  imageSrc="/images/case-studies/sage-home-individual.jpg"
                  imageAlt="Sage Individual mobile app"
                  href="/sage-individual"
                  staggerClass="animate-stagger-card-3"
                />
                <CaseStudyCard
                  businessName="Sage"
                  year="2021-2024"
                  projectTitle="Graphite Design System"
                  impact="Built a native iOS and Android design system from the ground up to improve consistency, accessibility, and delivery speed."
                  imageSrc="/images/case-studies/individual-ds-2.jpg"
                  imageAlt="Sage GraphiteDesign System"
                  href="/sage-ds"
                  staggerClass="animate-stagger-card-4"
                />
              </div>
            </section>

            {/* Experience Section */}
            <section id="experience">
              <div className="grid grid-cols-9 gap-y-20">
                <h5 className="typography-h5-normal col-span-7 col-start-3 text-right mb-20 animate-stagger-5">
                  <span className="typography-h5-demibold">10 years across product design, systems, and delivery</span>{" "}
                  in start-up, agency, and enterprise environments shipping responsive web products, native mobile apps, and scalable design systems.
                </h5>

                <div className="col-span-9 @3xl:col-span-7 flex flex-col gap-20">
                  <ExperienceCard
                    employer="GetGround"
                    dates="2024 to Present"
                    jobTitle="Lead Product Designer"
                    summary={[
                      "Lead Product Designer across core areas of the GetGround platform, serving 30,000+ property investors. Designed and delivered Code first prototyping to production in days not weeks.",
                      "Designed AI-assisted interaction models and dynamic experiences that generate actions and reports based on portfolio, market, and user context. Built business impact models to inform product decisions, used code-first prototyping in Next.js to speed up validation, and created tools like CopyKat, a context-aware copywriting agent."
                    ]}
                  />
                  <ExperienceCard
                    employer="Sage"
                    dates="2021 to 2023"
                    jobTitle="Senior Product Designer"
                    summary={[
                      "Created and delivered the Sage Individual native app for Android and iOS, designed for the UK’s 4.5 million small business owners with features for expense tracking, tap to pay, and tax submissions.",
                      "Established team practices including retrospectives and design feedback pathways, served as Accessibility Champion for native mobile (WCAG 2.1), and helped build the Native Mobile Design System from the ground up."
                    ]}
                  />
                  <ExperienceCard
                    employer="Football Survivor"
                    dates="2019 to 2021"
                    jobTitle="Founding Product Designer"
                    summary={[
                      "Founding Product Designer for a peer-to-peer iOS and Android betting app based on Last Man Standing. Designed the end-to-end experience across UX, UI, design systems, content, and marketing materials.",
                      "Grew to 15,000+ sign-ups and 8,000+ active users within 18 months of launch."
                    ]}
                  />
                  {showMoreExperience && (
                    <>
                      <ExperienceCard
                        employer="Hogarth WPP"
                        dates="2019 to 2020"
                        jobTitle="Product Designer"
                        summary="Designed client-facing landing pages, micro-sites, and internal web applications. Built robust design systems for ZONZA, a Digital Asset Management platform, and Hoxton, a marketing tool for generating variations of HTML banner ads."
                      />
                      <ExperienceCard
                        employer="Maverick"
                        dates="2018 to 2019"
                        jobTitle="Product Designer"
                        summary="Worked with the digital transformation team to increase employee engagement at DHL. Built a React Native mobile app from the ground up, enabling employees to discover community events, perform admin tasks, and update their details."
                      />
                      <ExperienceCard
                        employer="Ayima"
                        dates="2017 to 2019"
                        jobTitle="Junior UX Designer"
                        summary="Designed SEO tools and web products through the full design process, including creating and implementing design systems, prototyping, and working with in-house developers."
                      />
                      <ExperienceCard
                        employer="Boots"
                        dates="2014 to 2015"
                        jobTitle="UX Design Student"
                        summary=""
                        nonInteractive
                      />
                      <ExperienceCard
                        employer="Loughborough University"
                        dates="2012 to 2016"
                        jobTitle="BSc Product Design"
                        summary=""
                        nonInteractive
                      />
                    </>
                  )}
                  <Button
                    variant="outline"
                    onClick={() => setShowMoreExperience(!showMoreExperience)}
                    className="self-start"
                  >
                    {showMoreExperience ? "Hide experience" : "Show more experience"}
                  </Button>
                </div>
              </div>
            </section>

            {/* Footer Section */}
            <section className="mt-80 mb-40">
              <Footer staggerClass="animate-stagger-8" />
            </section>
          </div>
        </div>
      </div>

      {/* Floating Chat Input */}
      {showFloatingInput && showContent && !isChatPanelOpen && (
        <div className="fixed bottom-4 left-0 right-0 z-50 px-4 animate-fade-in">
          <div className="w-80 mx-auto">
            <ChatInput
              placeholder="Ask something..."
              onSubmit={(value) => openWithMessage(value)}
              className="shadow-elevated"
            />
          </div>
        </div>
      )}
    </>
  );
}
