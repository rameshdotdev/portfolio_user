"use client";

import { memo, Suspense } from "react";
import dynamic from "next/dynamic";

import HorizontalDashedBorder from "@/components/horizontal-dashed-border";
import VerticalDashedBorderLayout from "@/components/vertical-dashed-border-layout";
import BlurFade from "@/components/magicui/blur-fade";

import Title from "./components/title";
import ViewAllButton from "./components/view-all";
import SkillsChips from "./components/skills-chips";
import QuoteCard from "./components/quote-card";
import SubscribeBox from "./components/subscribe-box";
import WorksSection from "./components/works-at";
import EducationList from "./components/education-list";

import {
  GithubContributions,
} from "@/components/github-contribution";

import { BLUR_FADE_DELAY } from "@/lib/utils";
import { ProfileSkeleton, ProjectsGridListSkeleton } from "./skeleton";
import AboutSocials from "./components/section/about-socials";

/* -------------------------------------------------------------------------- */
/*                              Dynamic Imports                               */
/* -------------------------------------------------------------------------- */

const Profile = dynamic(() => import("./components/profile"), {
  loading: () => <ProfileSkeleton />,
  ssr: false,
});

const ProjectsGridList = dynamic(() => import("./components/project-list"), {
  loading: () => <ProjectsGridListSkeleton />,
  ssr: false,
});

/* -------------------------------------------------------------------------- */
/*                           Below Fold Lazy Section                          */
/* -------------------------------------------------------------------------- */

const BelowFoldContent = memo(function BelowFoldContent() {
  return (
    <>
      {" "}
      <Title title="Experiences" />
      <VerticalDashedBorderLayout className="p-0">
        <WorksSection />
      </VerticalDashedBorderLayout>
      <HorizontalDashedBorder />
      <VerticalDashedBorderLayout>
        <ViewAllButton href="/experiences" />
      </VerticalDashedBorderLayout>
      <Title title="Education" />
      <VerticalDashedBorderLayout className="p-0">
        <EducationList />
      </VerticalDashedBorderLayout>
      <Title title="Projects" />
      <VerticalDashedBorderLayout className="p-0">
        <ProjectsGridList />
      </VerticalDashedBorderLayout>
      <HorizontalDashedBorder />
      <VerticalDashedBorderLayout>
        <ViewAllButton href="/projects" />
      </VerticalDashedBorderLayout>
    </>
  );
});

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function Page() {
  return (
    <>
      <section id="hero" className="flow-root">
        <VerticalDashedBorderLayout>
          <Profile />
        </VerticalDashedBorderLayout>
      </section>
      <HorizontalDashedBorder />

      <section id="about" className="flow-root">
        <VerticalDashedBorderLayout>
          <AboutSocials />
          <section id="contributions">
            <BlurFade delay={BLUR_FADE_DELAY * 10}>
              <GithubContributions />
            </BlurFade>
          </section>
        </VerticalDashedBorderLayout>
      </section>

      <section id="career" className="flow-root">
        <Suspense fallback={null}>
          <BelowFoldContent />
        </Suspense>
      </section>

      <section id="skills" className="flow-root">
        <Title title="Skills & Technologies" />
        <VerticalDashedBorderLayout>
          <SkillsChips />
        </VerticalDashedBorderLayout>
      </section>

      <section id="newsletter" className="flow-root">
        <Title title="Newsletter" />
        <VerticalDashedBorderLayout className="p-0">
          <SubscribeBox />
        </VerticalDashedBorderLayout>
      </section>

      <HorizontalDashedBorder />

      <section id="quote" className="flow-root">
        <VerticalDashedBorderLayout>
          <QuoteCard />
        </VerticalDashedBorderLayout>
      </section>
    </>
  );
}
