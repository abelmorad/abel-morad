function About() {
  return (
    <section className="flex flex-col px-6 h-screen items-center place-content-center">
      <section className="flex flex-col laptop:px-40 desktop:px-96 gap-10">
        <article>
          <h1 className="text-3xl font-semibold mb-4">About Me</h1>
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
            documentation, and tons of Google searches, then finally building a
            new feature.
          </p>
        </article>
        <section>
        <h1 className="text-3xl font-semibold mb-4">Experience</h1>
          <p className="font-medium mb-2">Front-end Developer - Present</p>
          <ul>
            <li className="font-light">
              Built an e-commerce site using React, Typescript, TailwindCSS,
              Redux, React-Router,and Strapi
            </li>
            <li className="font-light">
              Built a static website for Merdeka Info Teknologi
            </li>
            <li className="font-light">
              Built my simple first full-stack project using MERN stack
            </li>
          </ul>
      </section>
      </section>
    </section>
  );
}

export default About;
