import { Link } from "react-router-dom"
import Resume from "../document/SharhabeelMoradResume.pdf"

function ResumeBtn() {
  return (
    <Link
        to={Resume}
        target="_blank"
        className="mobile:px-7 mobile:py-3 tablet:text-lg tablet:font-medium bg-transparent tablet:px-5 tablet:py-1 vaporwave-border hover:scale-105"
      >
        Resume
      </Link>
  )
}

export default ResumeBtn