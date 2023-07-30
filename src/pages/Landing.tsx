import { Link } from "react-router-dom";
import Aside from "../components/Aside";

function Landing() {
  return (
    <section className="flex flex-col h-screen items-center place-content-center px-3">
      <div className="grid grid-flow-col-dense gap-5 w-screen px-3 laptop:px-10">
        <Aside />
        <section className="flex flex-col items-start place-content-center tablet:px-20 laptop:px-40 desktop:px-72">
          <h1 className="text-2xl font-semibold">Sharhabeel Morad</h1>
          <p className="font-extralight">Front-end Developer | React </p>
          <p className="mt-3 font-light">
            A self-taught front-end developer. Inspired by the vast potential of
            front-end development to shape the way people interact with
            technology.
          </p>
          <Link
            to="/"
            className="flex text-lg font-medium bg-transparent px-5 py-1 mt-4 place-content-center vaporwave-border hover:scale-105"
          >
            Contact Me
          </Link>
        </section>
      </div>
    </section>
  );
}

export default Landing;
