import { Link } from "react-router-dom"
import {BsFacebook, BsGithub, BsLinkedin} from "react-icons/bs"

function Aside() {
  return (
    <aside className="flex flex-col items-center place-content-center gap-5 absolute right-2 bottom-36 top-36 aside">
      <Link to="https://github.com/abelmorad" target="_blank" ><BsGithub size="1.5rem" /></Link>
      <Link to="https://www.linkedin.com/in/sharhabeel-morad/" target="_blank" ><BsLinkedin size="1.5rem" /></Link>
      <Link to="https://www.facebook.com/profile.php?id=100092525047168" target="_blank" ><BsFacebook size="1.5rem" /></Link>
    </aside>
  )
}

export default Aside