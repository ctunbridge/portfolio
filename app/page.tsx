/**
 * Home Page
 *
 * Landing page with intro animation and main content.
 */
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { useChatContext } from "@/lib/chat-context";
import { HomeIntro } from "@/components/home-intro/home-intro";
import { SideNav } from "@/components/ui/side-nav/side-nav";
import { CyclingText } from "@/components/ui/cycling-text/cycling-text";
import { CaseStudyCard } from "@/components/ui/case-study-card/case-study-card";
import { ExperienceCard } from "@/components/ui/experience-card/experience-card";
import { Footer } from "@/components/ui/footer/footer";
import { ChatInput } from "@/components/ui/chat-input/chat-input";
import { Button } from "@/components/ui/button/button";

const INTRO_SHOWN_KEY = "home-intro-shown";

export default function Home() {
  const { isOpen: isChatPanelOpen, setIsOpen: setIsChatPanelOpen } = useChatContext();
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

  const handleChatFocus = () => {
    setIsChatPanelOpen(true);
  };

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
          "min-h-screen transition-all duration-300",
          showContent ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="grid grid-cols-12 gap-4">
          <SideNav items={navItems} />

          <div className="col-span-12 space-y-8 pt-60 @5xl:col-span-9">
            {/* Welcome Section */}
            <section id="welcome" className="min-h-screen">
              <div className="grid grid-cols-9">
                <h1 className="typography-h1-demibold col-span-9 mb-10 h-75 @3xl:col-span-8">
                  I'm a product designer, founder and builder of things, like{" "}
                  <CyclingText
                    texts={[
                      "this portfolio.",
                      "design systems.",
                      "next.js and tailwind.css sites.",
                      "mobile native apps.",
                      "react apps.",
                    ]}
                  />
                </h1>
                {!isChatPanelOpen && (
                  <div ref={inlineInputRef} className="col-span-9 mb-50 w-80">
                    <ChatInput
                      placeholder="Ask something..."
                      onFocus={handleChatFocus}
                    />
                  </div>
                )}
              </div>

              {/* Work Section */}
              <div id="work" className="grid grid-cols-1 gap-x-10 gap-y-25 mb-80 @3xl:grid-cols-2">
                <CaseStudyCard
                  businessName="GetGround"
                  year="2025"
                  projectTitle="Bookkeeping & MTD"
                  imageSrc="/images/case-studies/GG Home - BK.jpg"
                  imageAlt="GetGround Bookkeeping & MTD"
                  href="/gg-bookkeeping"
                />
                <CaseStudyCard
                  businessName="GetGround"
                  year="2025"
                  projectTitle="Platform UI Refresh"
                  imageSrc="/images/case-studies/GG Home - UI.jpg"
                  imageAlt="GetGround Platform UI Refresh"
                  href="/gg-ui"
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
            <section id="experience">
              <div className="grid grid-cols-9 gap-y-20">
                <h5 className="typography-h5-normal col-span-7 col-start-3 text-right mb-20">
                  <span className="typography-h5-demibold">10 years product design</span>{" "}
                  experience doing this that and all the product things, I need to think of something to put in here that isn't stale and boring
                </h5>

                <div className="col-span-9 @3xl:col-span-7 flex flex-col gap-20">
                  <ExperienceCard
                    employer="GetGround"
                    dates="2024 to Present"
                    jobTitle="Lead Product Designer"
                    summary={[
                      "Responsible for multiple features across the GetGround customer platform, allowing 30,000 investors to manage their property from sourcing, to bookkeeping, to tax submissions and portfolio optimisation, and owner of our Capcom design system.",
                      "Most recently delivered the new Bookkeeping and tax submissions area from end to end, whilst pioneering new ways of working to embed ai into our workflow. This included: business impact modelling; ai enabled prototyping directly in our codebase; synthesising test results and research in notion to create a searchable resource database; creation of bespoke agents such as CopyKat, a copywriting agent with GetGround context and tone of voice baked in to a Slackbot."
                    ]}
                  />
                  <ExperienceCard
                    employer="Sage"
                    dates="2021 to 2023"
                    jobTitle="Senior Product Designer"
                    summary={[
                      "Took a lead role in the creation and delivery of the Sage Individual native app for Android and iOS. Targeted the UKs 4.5 million small business owners, Sage individual allowed users to tracking income and expenses, get paid faster using native tap to pay, send and receive invoices, and submit tax obligations.",
                      "Introduced a number of new ways of working to improve team efficiency, psychological safety, skills and quality of output. This included: team retrospectives; design feedback pathways; a number of workshop formats for wire framing, user journey mapping and prioritisation; training on how to frame problem statements within feature briefs; design delivery templates; processes to ensure consistency and pixel perfect design delivery to developers.",
                      "Accessibility Champion for native mobile, ensuring the Sage Individual product meets WCAG 2.1 standards.",
                      "Introduced and led the curation of the Native Mobile Design System. Built from the ground up to be robust and usable by all Sage's mobile products."
                    ]}
                  />
                  <ExperienceCard
                    employer="Football Survivor"
                    dates="2019 to 2021"
                    jobTitle="Founding Product Designer"
                    summary={[
                      "Football Survivor was a peer to peer iOS and Android app based on the popular game betting game 'Last Man Standing'. As the founding Lead Product Designer responsibilities included: reimagining user needs and requirements for the game to be viable on a mobile platform; creating the UX and UI; curating the design system; content design; creating app store assets and marketing materials; supporting the development team; continual improvements, fixes and the design delivery of new features.",
                      "Football Survivor grew to 15,000+ sign ups and 8,000+ active users within 18 months of launching."
                    ]}
                  />
                  {showMoreExperience && (
                    <>
                      <ExperienceCard
                        employer="Hogarth WPP"
                        dates="2019 to 2020"
                        jobTitle="Product Designer"
                        summary="Worked on a range of projects, from client facing landing pages and micro-sites to internal web applications. This included the creation of robust design systems for ZONZA, a Digital Asset Management platform, and Hoxton, a marketing tool for generating variations of full HTML banner ads."
                      />
                      <ExperienceCard
                        employer="Maverick"
                        dates="2018 to 2019"
                        jobTitle="Product Designer"
                        summary="Part of the digital transformation team increasing employee engagement at DHL. We built a react native mobile app from the ground up, enabling DHL employees to discover worldwide community events and updates, perform various admin tasks and updating employee details."
                      />
                      <ExperienceCard
                        employer="Ayima"
                        dates="2017 to 2019"
                        jobTitle="Junior UX Designer"
                        summary="Involved in the full design process for Ayima's SEO tools and web products, including: the creation and implementation of design systems; prototyping; communicating designs to in house developers."
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
              <Footer />
            </section>
          </div>
        </div>
      </div>

      {/* Floating Chat Input */}
      {showFloatingInput && !isChatPanelOpen && (
        <div className="fixed bottom-4 left-0 right-0 z-50 px-4 animate-fade-in">
          <div className="w-80 mx-auto">
            <ChatInput
              placeholder="Ask something..."
              onFocus={handleChatFocus}
              className="shadow-[0_4px_12px_rgba(0,0,0,0.25)]"
            />
          </div>
        </div>
      )}
    </>
  );
}
