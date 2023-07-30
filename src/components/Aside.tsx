import { Link } from "react-router-dom"
import {BsFacebook, BsGithub, BsLinkedin} from "react-icons/bs"

function Aside() {
  return (
    <aside className="flex flex-col items-start gap-5 aside">
      <Link to="/" className="text-2xl"><BsGithub /></Link>
      <Link to="/" className="text-2xl"><BsLinkedin /></Link>
      <Link to="/" className="text-2xl"><BsFacebook /></Link>
    </aside>
  )
}

export default Aside