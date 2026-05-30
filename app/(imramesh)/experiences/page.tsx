"use client";
import Title from "../components/title";
import ExperienceCard from "../components/experiences-card";
import VerticalDashedBorderLayout from "@/components/vertical-dashed-border-layout";
import HorizontalDashedBorder from "@/components/horizontal-dashed-border";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { getWorksData, setWorksData } from "@/store/features/workSlice";
import { useEffect } from "react";
import { api } from "@/lib/axios";

export default function Page() {
  const works = useAppSelector(getWorksData);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (works.length > 0) return;

    const fetchProjects = async () => {
      try {
        const res = await api.get("/works-at");
        dispatch(setWorksData(res.data));
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };

    fetchProjects();
  }, [works.length, dispatch]);

  if (!works?.length) return null;

  return (
    <>
      <Title title="Experiences" isSubPage />

      <VerticalDashedBorderLayout className="p-0">
        {works.map((work, idx) => (
          <div key={work._id}>
            <ExperienceCard
              logo={work.logoUrl?.url || "/placeholder.webp"}
              alt={work.company}
              company={work.company}
              type={work.type}
              href={work?.href}
              role={work.role}
              duration={`${work.start} - ${work.end}`}
              location={`${work.location} - ${work.location_type}`}
              points={work.points}
              tags={work.tags}
            />

            {works.length !== idx + 1 && <HorizontalDashedBorder height={2} />}
          </div>
        ))}
      </VerticalDashedBorderLayout>
    </>
  );
}
