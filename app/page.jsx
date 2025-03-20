import Image from "next/image";
import profilePic from "/pictures/IMG_0360.JPG"

export default function main_page(){
    return (
        <div>
            <section id="about_section" className="flex">
                <div className="w-1/2 justify">
                    <h1 className="text-5xl">Ich heisse Maximillian Pilz</h1>
                </div>

                <div className="w-1/2">
                    <Image
                        src={profilePic}
                        width={500}
                        height={500}
                        alt="Picture of me"
                        className="rounded-full"
                    />
                </div>
            </section>

        </div>
    );
}