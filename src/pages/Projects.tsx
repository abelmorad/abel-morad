import Aside from "../components/Aside";
import ProjectCard from "../components/cards/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="flex flex-col px-6 h-screen place-content-center tablet:px-20 laptop:px-40 desktop:px-96 ">
      <section className="flex flex-col">
        <h1 className="text-3xl font-semibold mb-5">Projects</h1>
        <p>Here is some of the projects that I have worked on</p>
      </section>
      <section className="flex flex-wrap pt-10 place-content-center tablet:place-content-start">
        <ProjectCard />
      </section>
      <div className="mobile:hidden tablet:block">
        <Aside />
      </div>
    </section>
  );
}

export default Projects;
