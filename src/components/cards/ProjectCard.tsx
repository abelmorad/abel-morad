import merdeka from "../../../public/merdeka.jpg";
import { RxExternalLink } from "react-icons/rx";

function ProjectCard() {
  return (
    <div className="flex flex-col rounded-lg h-96 w-60 justify-between card-shadow hover:scale-105">
      <img
        className="object-cover h-60 w-auto rounded-t-md"
        src={merdeka}
        alt="merdeka website"
      />
      <div className="flex flex-col px-2 pb-10">
      <a
        className="flex items-center gap-2 mb-2 hover:text-cyan-400"
          href="https://www.merdekainfotek.com/"
          target="_blank"
        >
        <span className="text-xl font-medium">MerdekaInfotek</span>
          <RxExternalLink />
        </a>
        <p className="text-xs mb-3">
          A landing page for Merderka InfoTek
        </p>
        
      </div>
    </div>
  );
}

export default ProjectCard;
