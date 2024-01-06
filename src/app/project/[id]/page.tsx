import { data } from "@/app/utils/data";
export default function ProjectDetail({
  params: { id },
}: {
  params: { id: number };
}) {
  console.log(data, id);
  const project = data.projects.find((i) => i.id === id);
  return (
    <div>
      {project?.name}
      {id}
    </div>
  );
}
