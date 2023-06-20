import "./side-menu.scss"
import Image from "next/image"
import Link from "next/link"

export default function SideMenu() {
    return (
        <div className="side-menu">
            {/* GitHub */}
            <div className="social">
                <Link href={'https://github.com/mathiaslost'}>
                    <Image
                        src="/github.svg"
                        alt="Github"
                        width={40}
                        height={40}
                        priority
                    />
                </Link>
            </div>
            {/* LinkedIn */}
            <div className="social">
                <Link href={'https://www.linkedin.com/in/gabriel-mathias/'}>
                    <Image
                        src="/linkedin.svg"
                        alt="Linked-in"
                        width={40}
                        height={40}
                        priority
                    />
                </Link>
            </div>
        </div>
    )
}