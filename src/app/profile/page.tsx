
import Skills from "./03_skills"
import Qualification from "./02_qualification"
import Profile from "./01_profile"
import Site from "./04_site"

export default function Landing() {

  return (
    <>
      <Profile />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <Qualification />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <Skills />
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <Site />
    </>
  )
}