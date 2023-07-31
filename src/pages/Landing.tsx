import { Link } from "react-router-dom";
import Aside from "../components/Aside";

function Landing() {
  return (
    <section className="flex flex-col h-screen items-center place-content-center">
      <div className="grid grid-flow-col-dense gap-5 laptop:px-10 px-7">
        <section className="flex flex-col items-start place-content-center tablet:px-20 laptop:px-40 desktop:px-96">
          <p className="font-light">Hi, I am</p>
          <h1 className="text-4xl font-semibold">Sharhabeel Morad</h1>
          <p className="font-extralight">Front-end Developer | React </p>
          <p className="mt-3 font-light">
            I am a self-taught front-end developer learning various technologies
            to develop my skills and be a versatile web developer to build
            real-world projects that impact people.
          </p>
          <Link
            to="/"
            className="flex text-lg font-medium bg-transparent px-5 py-1 mt-4 place-content-center vaporwave-border hover:scale-105"
          >
            Contact Me
          </Link>
        </section>
        <div className="mobile:hidden tablet:block">
          <Aside />
        </div>
      </div>
    </section>
  );
}

export default Landing;
