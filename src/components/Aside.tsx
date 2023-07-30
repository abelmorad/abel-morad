import { Link } from "react-router-dom"
import {BsFacebook, BsGithub, BsLinkedin} from "react-icons/bs"

function Aside() {
  return (
    <aside className="flex flex-col items-center place-content-center gap-5 absolute right-2 bottom-36 top-36 aside">
      <Link to="/" ><BsGithub size="1.5rem" /></Link>
      <Link to="/" ><BsLinkedin size="1.5rem" /></Link>
      <Link to="/" ><BsFacebook size="1.5rem" /></Link>
    </aside>
  )
}

export default Aside