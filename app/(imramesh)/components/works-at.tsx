"use client";

import { useEffect, useMemo, useState } from "react";

import HorizontalDashedBorder from "@/components/horizontal-dashed-border";
import { Skeleton } from "@/components/ui/skeleton";
import ExperienceList from "./experience-list";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { getWorksData, setWorksData } from "@/store/features/workSlice";
import { useFetch } from "@/hooks/use-fetch";
import { Work } from "@/types/work";

export default function WorksSection() {
  const dispatch = useAppDispatch();
  const { data } = useFetch<Work[]>("/works-at", {
    revalidate: 120,
    tags: ["works-at"],
  });
  useEffect(() => {
    if (data) {
      dispatch(setWorksData(data));
    }
  }, [data, dispatch]);
  const works = useAppSelector(getWorksData);
  const sortedWorks = useMemo(() => {
    if (!works?.length) return [];

    return [...works].sort((a, b) => {
      const aPresent = String(a.end).toLowerCase() === "present";
      const bPresent = String(b.end).toLowerCase() === "present";

      // Present should come first
      if (aPresent && !bPresent) return -1;
      if (!aPresent && bPresent) return 1;

      return 0; // keep original order for others
    });
  }, [works]);

  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    if (!sortedWorks.length) return;
    setOpenId(sortedWorks[0]._id); // first card open
  }, [sortedWorks]);

  // Show a skeleton while data is loading and we have no stored works
  if (!data && (!works || works.length === 0)) {
    return <WorksSectionSkeleton />;
  }

  if (!sortedWorks.length) return null;

  return (
    <div>
      {sortedWorks.map((work, idx) => {
        const isOpen = openId === work._id;

        return (
          <div key={work._id}>
            <ExperienceList
              logo={work.logoUrl?.url || "/placeholder.webp"}
              alt={work.company}
              company={work.company}
              type={work.type}
              role={work.role}
              href={work?.href}
              duration={`${work.start} - ${work.end}`}
              location={`${work.location} - ${work.location_type}`}
              points={work.points}
              tags={work.tags}
              isOpen={isOpen}
              onToggle={() => setOpenId(isOpen ? null : work._id)}
            />

            {sortedWorks.length !== idx + 1 && (
              <HorizontalDashedBorder height={2} />
            )}
          </div>
        );
      })}
    </div>
  );
}

function ExperienceExpandedSkeleton() {
  return (
    <div className="p-4">
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="size-12 rounded-xl" />

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-36" />
              <Skeleton className="hidden h-5 w-16 rounded-md md:block" />
            </div>

            <Skeleton className="h-4 w-32" />
          </div>
        </div>

        <div className="space-y-2 text-right">
          <Skeleton className="ml-auto h-4 w-32" />
          <Skeleton className="ml-auto h-4 w-24" />
        </div>
      </div>

      <div className="mt-6 space-y-5 pl-1">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="size-2 rounded-full" />
            <Skeleton className="h-4 w-full max-w-[600px]" />
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} className="h-7 w-16 rounded-md" />
        ))}
      </div>
    </div>
  );
}

function ExperienceCollapsedSkeleton() {
  return (
    <div className="p-4">
      <div className="flex justify-between gap-4">
        <div className="flex items-center gap-3">
          <Skeleton className="size-12 rounded-xl" />

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="hidden h-5 w-16 rounded-md md:block" />
            </div>

            <Skeleton className="h-4 w-28" />
          </div>
        </div>

        <div className="space-y-2 text-right">
          <Skeleton className="ml-auto h-4 w-28" />
          <Skeleton className="ml-auto h-4 w-24" />
        </div>
      </div>
    </div>
  );
}

function WorksSectionSkeleton() {
  return (
    <section aria-labelledby="experience-heading" className="space-y-6">
      <h2 id="experience-heading" className="sr-only">
        Experience
      </h2>

      <div>
        <ExperienceExpandedSkeleton />

        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i}>
            <HorizontalDashedBorder height={2} />
            <ExperienceCollapsedSkeleton />
          </div>
        ))}
      </div>
    </section>
  );
}
