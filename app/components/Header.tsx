"use client"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/images/logo.svg"
import iconHumb from "@/public/images/icon-hamburger.svg"
import iconClose from "@/public/images/icon-close.svg"
import { useState } from "react"
import clsx from "clsx"


export default function Header() {
    const [isClicked, setIsClicked] = useState(false)
    function handleClick() {
        setIsClicked(state => !state);
    }
    return (
        <header className="mt-12">
            <div className="wrapper">
                <div className="flex justify-between  flex-col">
                    <div className="flex justify-between items-center flex-1">
                        <Image src={logo} alt="logo " />
                        <nav className="hidden lg:block">
                            <ul className="flex gap-12">
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
                            </ul>
                        </nav>
                        <button className="get-started hidden lg:block cursor-pointer">Get Started</button>
                        <button className="lg:hidden pointer-events-auto cursor-pointer block" onClick={handleClick}>

                            {
                                isClicked ? <Image className="cursor-pointer" src={iconClose} alt="close icon" />
                                    : <Image className="cursor-pointer" src={iconHumb} alt="hamburger icon" />
                            }
                        </button>
                    </div>

                    <nav className={clsx(
                        "bg-white mt-16 rounded-lg z-10 absolute w-[90%] shadow-lg",
                        isClicked ? "block" : "hidden"

                    )}>
                        <ul className="flex gap-12 flex-col items-center m-10">
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
                        </ul>
                    </nav>
                    <div className={clsx("overlay", isClicked ? "active" : ""  )}></div>

                </div>
            </div>
        </header>
    )
}
