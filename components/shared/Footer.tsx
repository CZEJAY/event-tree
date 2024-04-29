import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t w-full max-h-20 flex items-center justify-center pt-14">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-1 text-center sm:flex-row">
        <Link href='/'>
          <Image 
            src="/assets/images/logo1.svg"
            alt="logo"
            width={128}
            height={38}
          />
        </Link>

        <p>2023 Event Tree. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer