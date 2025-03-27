"use client"
import Image from "next/image"
import anishaLi from "@/public/images/avatar-anisha.png"
import ali from "@/public/images/avatar-ali.png"
import shanai from "@/public/images/avatar-shanai.png"
import richard from "@/public/images/avatar-richard.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from 'swiper/modules';
import "swiper/css"
import 'swiper/css/pagination';

export default function Cursel() {

    return <>

        <Swiper
            modules={[Pagination]}
            spaceBetween={100}
            slidesPerView={1}
            breakpoints={{
                0: { slidesPerView: 1, },
                850: { slidesPerView: 2, spaceBetween: 20 }, // reduce the spacing 
                1024: {slidesPerView: 2, spaceBetween: 80 }, // from 1024 to 1256 no spacing at all this is going to fix it
                1256: { slidesPerView: 3, spaceBetween: 100 }
            }}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <div className="cursel">
                    <Image className="cursel-image" src={anishaLi} alt="" />
                    <div className="cursel-text">
                        <h4 className="cursel-header">Anisha Li</h4>
                        <p className="text-different">  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide>
                <div className="cursel">
                    <Image className="cursel-image" src={ali} alt="" />
                    <div className="cursel-text">
                        <h4 className="cursel-header">Ali Bravo</h4>
                        <p className="text-different">“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="cursel">
                    <Image className="cursel-image" src={richard} alt="" />
                    <div className="cursel-text">
                        <h4 className="cursel-header">Richard Watts</h4>
                        <p className="text-different">“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="cursel">
                    <Image className="cursel-image" src={shanai} alt="" />
                    <div className="cursel-text">
                        <h4 className="cursel-header">Shanai Gough</h4>
                        <p className="text-different">“Their software allows us to track@@@@, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper >

    </>
}
