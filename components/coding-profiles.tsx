"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { codingProfilesData } from "@/lib/data";
import CodingProfile from "./coding-profile";
import { useSectionInView } from "@/lib/hooks";

export default function CodingProfiles() {
  const { ref } = useSectionInView("Profiles", 0.5);

  return (
    <section ref={ref} id="profiles" className="scroll-mt-28 mb-28">
      <SectionHeading>My Coding Profiles</SectionHeading>
      <div>
        {codingProfilesData.map((profile, index) => (
          <React.Fragment key={index}>
            <CodingProfile {...profile} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
