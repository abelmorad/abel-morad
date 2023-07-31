import { Link } from "react-router-dom"
import Resume from "../document/SharhabeelMoradResume.pdf"

function ResumeBtn() {
  return (
    <Link
        to={Resume}
        target="_blank"
        className="text-lg font-medium bg-transparent px-5 py-1 mobile:px-7 mobile:py-3 vaporwave-border hover:scale-105"
      >
        Resume
      </Link>
  )
}

export default ResumeBtn