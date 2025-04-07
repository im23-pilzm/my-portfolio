import Image from "next/image";
import arrowRight from "/public/arrow-right.png"
import arrowLeft from "/public/arrow-left.png"
import picturePlaceholder from "/public/Rectangle-1920x1080-Placeholder.png"

export default function ProjectsMainPageLayout() {
    return(
        <div>
            <div>
                <p>title</p>
            </div>

            <div className="flex">
                <div>
                    <Image src={arrowLeft}
                           width={20}
                           height={20}
                           alt="arrow pointing left"
                           className="filter-arrow"
                    />
                </div>
                <div>
                    <Image
                        src={picturePlaceholder}
                        width={500}
                        height={500}
                        alt="Picture of the project"
                        className="rounded-3xl"
                    />
                </div>
                <div>
                    <Image src={arrowRight}
                           width={20}
                           height={20}
                           alt="arrow pointing right"
                           className="filter-arrow"
                    />
                </div>
            </div>
        </div>
    )
}