import Aside from "../components/Aside";
import {SiAxios, SiCss3, SiExpress, SiFirebase, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb, SiMui, SiNodedotjs, SiPostman, SiReact, SiReactrouter, SiRedux, SiSass, SiStrapi, SiSwiper, SiTailwindcss, SiTypescript, SiVite} from "react-icons/si"
import Experience from "./Experience";

function About() {
  return (
    <section className="flex flex-col gap-10 px-6 tablet:px-20 laptop:px-40 desktop:px-96 ">
      <article className="flex flex-col pt-20 tablet:pt-0 tablet:h-screen items-start tablet:place-content-center">
        <h1 className="text-3xl font-semibold mb-5">About Me</h1>
        <p className="mb-3">
          Hi, I am Sharhabeel Morad, a front-end developer focusing on building
          React web applications and currently learning back-end technologies to
          help me understand how each end interacts accordingly.
        </p>
        <p className="mb-3">
          I acquired most of my knowledge through online courses like The Odin
          Project, freeCodeCamp, and YouTube tutorials for my endeavor as a
          front-end developer. I earned my software engineering diploma at
          Aptech Qatar Computer Education Centre in 2017.
        </p>
        <p>
          What excites me about web development is the vast amount of
          information and logic to be acquired and applied in real life. It is
          euphoric whenever you are making a new feature for your web
          application and, after hours of doing trial and error, reading
          documentation, and tons of Google searches, then finally a working
          feature.
        </p>
      </article>
      <Experience />
      <section className="flex flex-col">
        <h1 className="text-3xl font-semibold mb-5">Tech Skills</h1>
        <div className="grid mobile:grid-cols-3 tablet:grid-cols-7 text-6xl gap-6 place-items-center mb-40">
          <SiReact />
          <SiReactrouter />
          <SiRedux />
          <SiVite />
          <SiTailwindcss />
          <SiSass />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiTypescript />
          <SiFirebase />
          <SiMongodb />
          <SiNodedotjs />
          <SiExpress />
          <SiSwiper />
          <SiGit />
          <SiGithub />
          <SiMui />
          <SiStrapi />
          <SiPostman />
          <SiAxios />
        </div>
      </section>
      <div className="mobile:hidden tablet:block">
        <Aside />
      </div>
    </section>
  );
}

export default About;
