import "./description.scss"
import Image from 'next/image'

export default function Description() {
    return (
        <div className="description">
            <Image
                src="/me.png"
                alt="Gabriel"
                width={253}
                height={253}
                priority
            />
            <div className="data">
                <h1>Gabriel Mathias</h1>
                <h2>Java Web Developer</h2>
            </div>
        </div>
    )
}