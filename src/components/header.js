import siteMetadata from "@/src/utils/siteMetaData";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import Logo from "./logo";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  return (
    <header className="w-full p-6 px-5 sm:px-10 md:px-24 sxl:px-32 flex items-center justify-between">
      <Logo />

      <ThemeSwitch />

      <div className="hidden sm:flex items-center">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank">
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via Twitter"
          target="_blank">
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Github"
          target="_blank">
          <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
      </div>
    </header>
  )
}
