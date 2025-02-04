"use client"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/images/logo.svg"
import iconHumb from "@/public/images/icon-hamburger.svg"
import iconClose from "@/public/images/icon-close.svg"
import { useState } from "react"

export default function Header() {
    const [isClicked, setIsClicked] = useState(false)
    function handleClick() {
        setIsClicked(state => !state);
    }
    return (
        <header className="mt-12">
            <div className="wrapper flex justify-between items-center ">

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
                <button className="get-started hidden lg:block">Get Started</button>
                <button className="lg:hidden block" onClick={handleClick}>
                    {
                        isClicked ? <Image src={iconClose} alt="close icon" />
                            : <Image src={iconHumb} alt="hamburger icon" />
                    }
                </button>
            </div>
        </header>
    )
}
