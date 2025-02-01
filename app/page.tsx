import Image from "next/image";
import heroImage from "@/public/images/illustration-intro.svg"
export default function Home() {
    return (
        <>
            <section className="section-gap">
                <div className="wrapper flex items-center flex-wrap-reverse lg:flex-nowrap">
                    <div className="text-center md:text-left">
                        <h1 className="text-dark-blue text-[2.5rem]">
                            Bring everyone
                            together to build
                            better products.
                        </h1>
                        <p className="text-dark-blue opacity-50 my-4">
                            Manage makes it simple for software teams to plan
                            day-to-day tasks while keeping the larger team goals in view.
                        </p>
                        <button className="get-started mt-2">Get Started</button>
                    </div>
                    <Image className="md:mx-auto" src={heroImage} alt="hero image" />
                </div>
            </section>
            <section className="section-gap">
                <div className="wrapper flex ">
                    <div className="text-center md:text-left">
                        <h2 className="section-header">What’s different about Manage?</h2>
                        <p className="text-different my-4">Manage provides all the functionality your team needs,
                            without the complexity. Our software is tailor-made
                            for modern digital product teams. </p>
                    </div>
                    <div>
                        <ul className="mt-12">
                            <li>
                                <h4 className="list-header"><span className="num">01</span> Track company-wide progress</h4>
                                <p className="text-different">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                            </li>
                            <li>
                                <h4 className="list-header"><span className="num">02</span> Advanced built-in reports</h4>
                                <p className="text-different">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                            </li>
                            <li>
                                <h4 className="list-header"><span className="num">03</span> Everything you need in one place</h4>
                                <p className="text-different">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="section-gap">
                <h2>What they’ve said</h2>
                <h1>cursel</h1>
                <button className="get-started">Get Started</button>
            </section>
            <section className="section-gap">
                <div className="wrapper">
                    <h2>Simplify how your team works today.</h2>
                    <button className="bg-white get-started ">Get Started</button>
                </div>
            </section>
            <footer>
                <div className="wrapper">
                    another time
                </div>
            </footer>
        </>
    );
}
