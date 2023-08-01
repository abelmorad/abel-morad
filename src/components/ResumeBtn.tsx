import { Link } from "react-router-dom"
import Resume from "../document/SharhabeelMoradResume.pdf"

function ResumeBtn() {
  return (
    <Link
        to={Resume}
        target="_blank"
        className="mobile:px-6 mobile:py-2 tablet:text-lg tablet:font-medium bg-transparent tablet:px-6 tablet:py-2 laptop:px-5 laptop:py-1 vaporwave-border hover:scale-105"
      >
        Resume
      </Link>
  )
}

export default ResumeBtn