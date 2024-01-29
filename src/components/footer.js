import SocialIcons from "./social-icons";

const Footer = () => {
  return (
    <footer className="mt-14 bg-dark dark:bg-accentDark/90 flex flex-col text-light dark:text-dark px-8">

      <h3 className="mt-8 text-xl sm:text-3xl font-bold">
        ¿Tienes algo que quieras compartir?
      </h3>
      <h3 className="text-md sm:text-xl md:mt-2">
        Contáctame en mis redes sociales
      </h3>

      <div className="mt-6">
        <SocialIcons inFooter />
      </div>

      <div className="w-full mt-8 md:mt-12 relative font-medium border-t border-light dark:border-black py-5 flex flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy; Todos los derechos reservados.
        </span>
        <div className="text-center">
          Hecho con ❤️ por{" "}
          <a href="https://cristianfigueroa.dev" className="underline" target="_blank">
            Cristian Ruben
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
