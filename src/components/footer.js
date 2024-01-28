import siteMetadata from "@/src/utils/siteMetaData";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";

const Footer = () => {
  return (
    <footer className="mt-14 bg-dark dark:bg-accentDark/90 flex flex-col text-light dark:text-dark px-8">

      <h3 className="mt-8 capitalize text-2xl sm:text-3xl font-bold">
        Tienes algo que quieras compartir?
      </h3>

      <div className="flex items-center mt-6 gap-4">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6"
          aria-label="Reach out to me via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 fill-light"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="fill-light dark:fill-dark  hover:scale-125 transition-all ease duration-200" />
        </a>
      </div>

      <div className="w-full mt-8 md:mt-12 relative font-medium border-t border-solid border-light py-5 flex flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy; Todos los derechos reservados.
        </span>
        <div className="text-center">
          Hecho con amor ❤️ por{" "}
          <a href="https://cristianfigueroa.dev" className="underline" target="_blank">
            Cristian Ruben Figueroa
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
