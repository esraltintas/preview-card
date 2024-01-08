"use client";

import React, { useState, useMemo } from "react";
import { data } from "./utils/data";
import Card from "./component/Card/card";

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
      <div className="border-b border-solid border-black w-full pb-15 mb-10 max-w-64">
        <input
          className="w-64"
          type="number"
          value={filterVolume || ""}
          placeholder="Filter volume..."
          onChange={(e) => setFilterVolume(parseInt(e.target.value, 10))}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-10">
        {filteredProjects.map((project) => (
          <Card key={project.id} project={project} />
        ))}
      </div>
    </main>
  );
}
