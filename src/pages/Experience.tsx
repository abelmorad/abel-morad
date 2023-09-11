function Experience() {
  return (
    <section className="flex flex-col mb-40">
      <h1 className="text-3xl font-semibold mb-5">Experience</h1>
      <div className="grid gap-7 tablet:grid-cols-2">
        <div className="ml-4">
          <h2 className="font-semibold">Front-end Developer | 2023-Present</h2>
          <p className="font-light italic mb-2 text-sm">
            Merdeka Infotek - Startup Company
          </p>
          <ul>
            <li>
              Communicate with the development team and the client to discuss
              the client's requirements and analyze how to solve the problem.
            </li>
            <li>Managed the team's workflow using GitHub Project</li>
            <li>
              Built the company's website using NextJS, TailwindCSS, TypesScript
              & integrated the company's email service using EmailJS
            </li>
          </ul>
        </div>
        <div className="ml-4">
          <h2 className="font-semibold">Self-Employed | 2020-2022</h2>
          <p className="font-light italic mb-2 text-sm">Pizza Business</p>
          <ul>
            <li>Baked Neapolitan pizza</li>
            <li>
              Managed purchasing, sales, marketing, and operations effeciently
            </li>
          </ul>
        </div>
        <div className="ml-4">
          <h2 className="font-semibold">Banana Farmer | 2019-2020</h2>
          <p className="font-light italic mb-2 text-sm">
            Owned a Banana Farm for export
          </p>
          <ul>
            <li>Applies fertilizers regularly</li>
            <li>
              Inspects for banana diseases and rehabilitates sick bananas
            </li>
          </ul>
        </div>
        <div className="ml-4">
          <h2 className="font-semibold">IT Technician | 2017-2018</h2>
          <p className="font-light italic mb-2 text-sm">
            Al-Bayan for Electronics and LED Technologies
          </p>
          <ul>
            <li>
              Managed system-wide operating system and software deployments as
              well as related software upgrade problems
            </li>
            <li>
              Patiently walked individuals through basic troubleshooting tasks
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience;
