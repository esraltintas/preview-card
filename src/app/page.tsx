import { data } from "./utils/data";
import Card from "./component/Card/card";

export default function Home() {
  const { projects } = data;
  return (
    <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-10">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </main>
  );
}
