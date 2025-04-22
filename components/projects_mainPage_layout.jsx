import Image from "next/image";
import arrowRight from "/public/arrow-right.png"
import arrowLeft from "/public/arrow-left.png"
import memoNotes from "/public/Screenshot 2025-04-10 143034.png"
import housePricePredictor from "/public/Screenshot 2025-04-10 142916.png"
import data from '@/data/projects.json'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import "/app/globals.css"

console.log(data.projects[0].title)


export default function ProjectsMainPageLayout() {
    return (<div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <h2 className="text-[40px] mb-15 text-center">MemoNotes</h2>
                    <Image
                        src={memoNotes}
                        alt="memoNotes Picture"
                        width={1296}
                        height={2304}
                        className="rounded-[8px] mx-auto border-white border-solid border-[1px]"
                    /></SwiperSlide>
                <SwiperSlide>
                    <h2 className="text-[40px] mb-15 text-center">HousePricePredictor</h2>
                    <Image
                        src={housePricePredictor}
                        alt="housePricePredictor Picture"
                        width={1296}
                        height={2304}
                        className="rounded-[8px] mx-auto border-white border-solid border-[1px]"
                    /></SwiperSlide>
            </Swiper>
        </div>
    )

    {/*return(
        <div>
            {data?.projects && data.projects.map((item) => (
                <div key={item.id} className={"single-item"}>
                    <h1>{item.id}</h1>
                </div>
            ))}
            <div className="text-[3rem] text-center">
                <p>{data.projects.title}</p>
            </div>

            <div className="flex items-center justify-center mt-[5rem]">
                <button onClick={()=>{

                }}>
                    <Image src={arrowLeft}
                           width={50}
                           height={50}
                           alt="arrow pointing left"
                           className="filter-arrow mr-[3rem]"
                    />
                </button>
                <div>
                    <Image
                        src={picturePlaceholder}
                        width={1152}
                        height={432}
                        alt="Picture of the project"
                        className="rounded-3xl"
                    />
                </div>
                <button>
                    <Image src={arrowRight}
                           width={50}
                           height={50}
                           alt="arrow pointing right"
                           className="filter-arrow ml-[3rem]"
                    />
                </button>
            </div>

            <div className="flex justify-between mt-[3rem]">
                <div className="ml-[8rem] border-white border-[1px] border-solid w-[28rem] h-[15rem] rounded-[10px]">
                    <p>About</p>
                    <p></p>
                </div>
                <div className="border-white border-[1px] border-solid w-[28rem] h-[15rem] rounded-[10px]">
                    <p>Problem</p>
                    <p></p>
                </div>
                <div className="mr-[8rem] border-white border-[1px] border-solid w-[28rem] h-[15rem] rounded-[10px]">
                    <p>Lösung</p>
                    <p></p>
                </div>
            </div>

        </div>
    )*/
    }
}