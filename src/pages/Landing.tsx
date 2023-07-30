import { Link } from "react-router-dom";
import Aside from "../components/Aside";

function Landing() {
  return (
    <section className="flex flex-col h-screen items-center place-content-center">
      <div className="grid grid-flow-col-dense gap-5 laptop:px-10 px-7">
        <section className="flex flex-col items-start place-content-center tablet:px-20 laptop:px-40 desktop:px-72">
          <p className="font-light">Hi, I am</p>
          <h1 className="text-4xl font-semibold">Sharhabeel Morad</h1>
          <p className="font-extralight">Front-end Developer | React </p>
          <p className="mt-3 font-light">
            A self-taught front-end developer continuously developing my skills
            and adapting to technologies to be able to build real-world projects
            that impacts people.
          </p>
          <Link
            to="/"
            className="flex text-lg font-medium bg-transparent px-5 py-1 mt-4 place-content-center vaporwave-border hover:scale-105"
          >
            Contact Me
          </Link>
        </section>
        <Aside />
      </div>
    </section>
  );
}

export default Landing;
