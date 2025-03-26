import Image from "next/image"
import Link from "next/link"
import logo from "@/public/images/logo.svg"
import facebook from "@/public/images/icon-facebook.svg"
import instagram from "@/public/images/icon-instagram.svg"
import twitter from "@/public/images/icon-twitter.svg"
import pinterest from "@/public/images/icon-pinterest.svg"
import youtube from "@/public/images/icon-youtube.svg"

export default function Footer() {
    return (
        <footer className="bg-[#1D1E25] text-white py-16">
            <div className="wrapper flex justify-center  
                    items-center gap-[54px] lg:flex-nowrap lg:justify-between lg:flex-row flex-col-reverse flex-wrap-reverse">
                <div className="flex flex-wrap
                        gap-[50px]  flex-col">
                    <Image className="mx-auto" src={logo} alt="logo" />
                    <div className="flex gap-4 mx-auto">
                        <Link href="#" >
                            <Image src={facebook} alt="logo" />
                        </Link>
                        <Link href="#" >
                            <Image src={youtube} alt="logo" />
                        </Link>
                        <Link href="#" >
                            <Image src={twitter} alt="logo" />
                        </Link>
                        <Link href="#" >
                            <Image src={pinterest} alt="logo" />
                        </Link>
                        <Link href="#" >
                            <Image src={instagram} alt="logo" />
                        </Link>
                    </div>
                    <p className="opacity-50 block sm:hidden">Copyright 2020. All Rights Reserved</p>
                </div>
                <div className="flex flex-1">
                    <ul className="flex justify-around w-full gap-24">
                        <div className="list-wrapper">
                            <li>
                                <Link href="#">Home</Link>
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
                        </div>
                        <div className="list-wrapper">
                            <li>
                                <Link href="#">Careers</Link>
                            </li>
                            <li>
                                <Link href="#">Community</Link>
                            </li>

                            <li>
                                <Link href="#">Privacy Policy</Link>
                            </li>
                        </div>
                    </ul>

                </div>
                <div className="flex flex-col gap-16">
                    <div className="flex gap-2">
                        <input type="email" placeholder="updates in your inbox..." className="rounded-full px-[1em] py-[.5em] text-black" />
                        <button className="py-[0.5em] px-[1em] rounded-full font-bold text-[1rem] bg-[#F3603C]">Go</button>
                    </div>
                    <p className="opacity-50 hidden lg:block text-[13px] self-end">Copyright 2020. All Rights Reserved</p>
                </div>

            </div>
        </footer >

    )

}

