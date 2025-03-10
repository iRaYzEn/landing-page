export default function About() {
    return (
        <section className="section-gap">
            <div className="wrapper flex items-start flex-wrap lg:flex-nowrap justify-between">
                <div className="text-center md:text-left sm:w-full lg:w-[30%]">
                    <h2 className="section-header text-[40px] pt-[40px]">What’s different about Manage?</h2>
                    <p className="text-different my-4">Manage provides all the functionality your team needs,
                        without the complexity. Our software is tailor-made
                        for modern digital product teams. </p>
                </div>
                <div className="lg:w-[50%]">
                    <ul className="mt-12">
                        <li className="list-item">
                            <span className="num">01</span>
                            <div>
                                <h4 className="list-header">  Track company-wide progress</h4>
                                <p className="text-different">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
                            </div>
                        </li>
                        <li className="list-item">
                            <span className="num">02</span>
                            <div>
                                <h4 className="list-header">  Advanced built-in reports</h4>
                                <p className="text-different">Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
                            </div>
                        </li>
                        <li className="list-item">
                            <span className="num">03</span>
                            <div>
                                <h4 className="list-header">  Everything you need in one place</h4>
                                <p className="text-different">Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

    )
}
