"use client"
import Image from "next/image"
import anishaLi from "@/public/images/avatar-anisha.png"
import ali from "@/public/images/avatar-ali.png"
import shanai from "@/public/images/avatar-shanai.png"
import richard from "@/public/images/avatar-richard.png"
import { useState } from "react"

export default function Cursel() {
    const [whichCursel, setWhichCursel] = useState(1);
    function handleClick(id: number) {
        setWhichCursel(id)
    }
    return <>
        <div className="small-cursel flex gap-[30px]  lg:hidden">
            {
                whichCursel == 1 ? <div className="cursel">
                    <Image className="cursel-image" src={anishaLi} alt="" />
                    <div className="cursel-text">
                        <h4 className="cursel-header">Anisha Li</h4>
                        <p className="text-different">  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                    </div>
                </div>
                    : whichCursel == 2 ? <div className="cursel">
                        <Image className="cursel-image" src={ali} alt="" />
                        <div className="cursel-text">
                            <h4 className="cursel-header">Ali Bravo</h4>
                            <p className="text-different">“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
                        </div>
                    </div>
                        : whichCursel == 3 ? <div className="cursel">
                            <Image className="cursel-image" src={richard} alt="" />
                            <div className="cursel-text">
                                <h4 className="cursel-header">Richard Watts</h4>
                                <p className="text-different">“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</p>
                            </div>
                        </div>
                            : whichCursel == 4 ? <div className="cursel">
                                <Image className="cursel-image" src={shanai} alt="" />
                                <div className="cursel-text">
                                    <h4 className="cursel-header">Shanai Gough</h4>
                                    <p className="text-different">“Their software allows us to track@@@@, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
                                </div>
                            </div> : <></>
            }
        </div>

        <div className="large-cursel gap-[30px] hidden lg:flex">
            <div className="cursel">
                <Image className="cursel-image" src={anishaLi} alt="" />
                <div className="cursel-text">
                    <h4 className="cursel-header">Anisha Li</h4>
                    <p className="text-different">  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                </div>
            </div>
            <div className="cursel">
                <Image className="cursel-image" src={ali} alt="" />
                <div className="cursel-text">
                    <h4 className="cursel-header">Ali Bravo</h4>
                    <p className="text-different">“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
                </div>
            </div>
            <div className="cursel">
                <Image className="cursel-image" src={richard} alt="" />
                <div className="cursel-text">
                    <h4 className="cursel-header">Richard Watts</h4>
                    <p className="text-different">“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</p>
                </div>
            </div>
            <div className="cursel">
                <Image className="cursel-image" src={shanai} alt="" />
                <div className="cursel-text">
                    <h4 className="cursel-header">Shanai Gough</h4>
                    <p className="text-different">“Their software allows us to track@@@@, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
                </div>
            </div>
        </div>


        <div className="cursel-btns lg:hidden">
            <button onClick={() => handleClick(1)} className="cursel-btn"></button>
            <button onClick={() => handleClick(2)} className="cursel-btn"></button >
            <button onClick={() => handleClick(3)} className="cursel-btn" ></button >
            <button onClick={() => handleClick(4)} className="cursel-btn"></button>
        </div >
    </>
}
