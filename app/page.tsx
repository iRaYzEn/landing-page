import Image from "next/image";
import logo from "@/public/images/logo.svg"
import facebook from "@/public/images/icon-facebook.svg"
import instagram from "@/public/images/icon-instagram.svg"
import twitter from "@/public/images/icon-twitter.svg"
import pinterest from "@/public/images/icon-pinterest.svg"
import youtube from "@/public/images/icon-youtube.svg"
import heroImage from "@/public/images/illustration-intro.svg"

import Link from "next/link";

export default function Home() {
    return (
        <>
            <section className="section-gap">
                <div className="wrapper flex items-center justify-between flex-wrap-reverse lg:flex-nowrap">
                    <div className="text-center lg:text-left lg:w-[430px] mx-auto lg:mx-0">
                        <h1 className="text-dark-blue text-[2.5rem]  font-bold ">
                            Bring everyone
                            together to build
                            better products.
                        </h1>
                        <p className="my-4 text-different ">
                            Manage makes it simple for software teams to plan
                            day-to-day tasks while keeping the larger team goals in view.
                        </p>
                        <button className="get-started mt-2">Get Started</button>
                    </div>
                    <Image className="mx-auto lg:mx-0" src={heroImage} alt="hero image" />
                </div>
            </section>
            <section className="section-gap">
                <div className="wrapper flex items-start flex-wrap lg:flex-nowrap">
                    <div className="text-center md:text-left">
                        <h2 className="section-header">What’s different about Manage?</h2>
                        <p className="text-different my-4">Manage provides all the functionality your team needs,
                            without the complexity. Our software is tailor-made
                            for modern digital product teams. </p>
                    </div>
                    <div>
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
            <section className="section-gap">
                <h2>What they’ve said</h2>
                <h1>cursel</h1>
                <button className="get-started">Get Started</button>
            </section>
            <section className="section-gap bg-[#F3603C] py-[5em]">
                <div className="wrapper flex flex-wrap  lg:text-left text-center justify-between">
                    <h2 className="text-[2.4rem] font-[700] text-white">Simplify how your team works today.</h2>
                    <button className="btn-white mt-8 lg:mt-0 lg:mx-0 mx-auto hover:opacity-95">Get Started</button>
                </div>
            </section>
            <footer className="bg-[#1D1E25] text-white py-16">
                <div className="wrapper flex justify-between items-center">
                    <div className="flex flex-wrap gap-20">
                        <Image src={logo} alt="logo" />
                        <div className="flex gap-4">
                            <Image src={facebook} alt="logo" />
                            <Image src={youtube} alt="logo" />
                            <Image src={twitter} alt="logo" />
                            <Image src={pinterest} alt="logo" />
                            <Image src={instagram} alt="logo" />
                        </div>
                    </div>
                    <div>
                        <ul className="flex gap-12 flex-wrap">
                            <li>
                                <Link href="#">Community</Link>
                            </li>
                            <li>
                                <Link href="#">Pricing</Link>
                            </li>

                            <li>
                                <Link href="#">Product</Link>
                            </li>
                            <li>
                                <Link href="#">About Us</Link>
                            </li>
                            <li>
                                <Link href="#">Careers</Link>
                            </li>
                            <li>
                                <Link href="#">Community</Link>
                            </li>

                            <li>
                                <Link href="#">Privacy Policy</Link>
                            </li>

                        </ul>

                    </div>
                    <div className="flex flex-wrap gap-4">
                        <input type="email" placeholder="updates in your inbox" className="rounded-full px-[1em] py-[.5em]" />
                        <button className="py-[0.5em] px-[1em] rounded-full font-bold text-[1rem] bg-[#F3603C]">Go</button>
                        <p className="hidden lg:block">Copyright 2020. All Rights Reserved</p>
                    </div>

                </div>
            </footer>
        </>
    );
}
