import Aside from "../components/Aside";

function Experience() {
  return (
    <section className="flex flex-col px-6 pt-20 laptop:pt-0 items-start laptop:h-screen laptop:place-content-center tablet:px-20 laptop:px-40 desktop:px-96 ">
      <h1 className="text-3xl font-semibold mb-4">Experience</h1>
      <div className="grid gap-7 tablet:grid-cols-2">
        <div className="mb-6 pl-4">
          <p className="font-medium mb-2">Front-end Developer | 2022-Present</p>
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
        </div>
        <div className="mb-6 pl-4">
          <p className="font-medium mb-2">Self-Employed | 2020-2022</p>
          <ul>
            <li className="font-light">Baked Neapolitan pizza</li>
            <li className="font-light">
              Managed purchasing, sales, marketing, and operations effeciently
            </li>
          </ul>
        </div>
        <div className="mb-6 pl-4">
          <p className="font-medium mb-2">Banana Farmer | 2019-2020</p>
          <ul>
            <li className="font-light">Applies fertilizers regularly</li>
            <li className="font-light">
              Inspects for banana diseases and rehabilitates sick bananas
            </li>
          </ul>
        </div>
        <div className="mb-6 pl-4">
          <p className="font-medium mb-2">IT-Technician | 2017-2018</p>
          <ul>
            <li className="font-light">
              Managed system-wide operating system and software deployments as
              well as related software upgrade problems
            </li>
            <li className="font-light">
              Patiently walked individuals through basic troubleshooting tasks
            </li>
          </ul>
        </div>
      </div>
      <div className="mobile:hidden tablet:block">
        <Aside />
      </div>
    </section>
  );
}

export default Experience;
