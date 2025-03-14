import heroImage from "@/public/images/illustration-intro.svg"
import Image from "next/image";

export default function Hero() {
    return (
        <section className="section-gap">
            <div className="wrapper flex items-center justify-between flex-wrap-reverse lg:flex-nowrap">
                <div className="text-center lg:text-left lg:w-[430px] mx-auto lg:mx-0">
                    <h1 className="text-dark-blue font-bold text-[2.5rem]">
                        Bring everyone
                        together to build
                        better products.
                    </h1>
                    <p className="my-4 text-different">
                        Manage makes it simple for software teams to plan
                        day-to-day tasks while keeping the larger team goals in view.
                    </p>
                    <button className="get-started mt-2 mx-auto">Get Started</button>
                </div>
                <Image className="mx-auto lg:mx-0 w-[30rem] z-0" src={heroImage} alt="hero image" />
            </div>
        </section>
    )
}

