import Logo from "./logo";
import SocialIcons from "./social-icons";
import ThemeSwitch from "./theme-switch";

export default function Header() {
  return (
    <header className="w-full p-6 px-5 sm:px-10 md:px-24 sxl:px-32 flex items-center justify-between">
      <Logo />

      <div className="flex items-center gap-4">
        <ThemeSwitch />
        <div className="hidden sm:flex">
          <SocialIcons />
        </div>
      </div>

    </header>
  )
}
