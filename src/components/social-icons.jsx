import { cx } from "../utils";
import siteMetadata from "../utils/siteMetaData";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";
import { MdEmail } from "react-icons/md";

function SocialIcon({ href, children, inFooter, ...props }) {
  return (
    <a
      href={href}
      className={cx(
        "w-10 h-10 flex items-center justify-center rounded-md p-2.5",
        !inFooter && "bg-dark/30 dark:bg-light/30 ",
        inFooter && "bg-light/30 dark:bg-dark/30 ",
      )}
      target="_blank"
      {...props}
    >
      {children}
    </a>
  )
}

export default function SocialIcons({ inFooter = false }) {
  return (
    <div className="flex items-center gap-4">
      <SocialIcon
        href={siteMetadata.linkedin}
        aria-label="Reach out to me via LinkedIn"
        inFooter={inFooter}
      >
        <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
      </SocialIcon>

      <SocialIcon
        href={siteMetadata.twitter}
        aria-label="Reach out to me via Twitter"
        inFooter={inFooter}
      >
        <TwitterIcon className="hover:scale-125 transition-all ease duration-200 fill-blue-300" />
      </SocialIcon>

      <SocialIcon
        href={siteMetadata.github}
        aria-label="Check my profile on Github"
        inFooter={inFooter}
      >
        <GithubIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
      </SocialIcon>

      <SocialIcon
        href={siteMetadata.email}
        aria-label="Contact me via email"
        inFooter={inFooter}
      >
        <MdEmail className="hover:scale-125 transition-all ease duration-200 dark:fill-light h-5 w-5" />
      </SocialIcon>
    </div>
  )
}