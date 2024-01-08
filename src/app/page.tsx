"use client";

import React, { useState, useMemo } from "react";
import { data } from "./utils/data";
import Card from "./component/Card/card";
import Toast from "./toast";

export default function Home() {
  const { projects } = data;
  const [filterVolume, setFilterVolume] = useState(0);

  const filteredProjects = useMemo(() => {
    if (filterVolume) {
      return projects.filter(
        (project) =>
          project?.offered_volume_in_tons >= filterVolume ||
          filterVolume === null
      );
    }
    return projects;
  }, [projects, filterVolume]);

  return (
    <main className="flex flex-col p-10">
      <label>
        Filter by Volume
        <input
          type="number"
          value={filterVolume || ""}
          onChange={(e) => setFilterVolume(parseInt(e.target.value, 10))}
        />
      </label>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-10">
        {filteredProjects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
      <Toast />
    </main>
  );
}
