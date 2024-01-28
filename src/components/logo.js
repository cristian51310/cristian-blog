import profileImg from "@/public/favicon.jpg"
import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">

      <div className="w-12 rounded-full overflow-hidden mr-2 md:mr-4">
        <Image
          src={profileImg}
          alt="Cristian Blog Logo"
          className="w-full h-auto rounded-full"
        />
      </div>

      <span className="font-bold dark:font-semibold text-lg md:text-xl">
        Cristian Blog
      </span>
    </Link>
  )
}

export default Logo