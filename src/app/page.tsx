import { data } from "./utils/data";
import Card from "./component/Card/card";

export default function Home() {
  const { projects } = data;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {projects.map((project) => (
        <Card key={project.id} project={project} />
      ))}
    </main>
  );
}
