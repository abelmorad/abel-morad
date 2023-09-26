import {BsFacebook, BsGithub, BsLinkedin} from "react-icons/bs"

function Aside() {
  return (
    <aside className="flex flex-col items-center place-content-center gap-5 fixed right-2 bottom-36 top-36 aside">
      <a href="https://github.com/abelmorad" target="_blank" ><BsGithub size="1.5rem" /></a>
      <a href="https://www.linkedin.com/in/sharhabeel-morad/" target="_blank" ><BsLinkedin size="1.5rem" /></a>
      <a href="https://www.facebook.com/profile.php?id=100092525047168" target="_blank" ><BsFacebook size="1.5rem" /></a>
    </aside>
  )
}

export default Aside