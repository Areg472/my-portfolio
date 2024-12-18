import MetaTags from "../components/MetaTags.jsx";
import {Navbar} from "../components/Navbar.jsx";
import {Credits} from "../components/Credits.jsx";
import {motion} from "motion/react";

export function Work() {
    return (
        <>
            <MetaTags
                title={"Aregtheeditor"}
                description="My smol OwO work!"
                name="Aregtheeditor"
                image="https://utfs.io/f/thKihuQxhYcPnE4P0fJqSrG7F3ilObYXHjDPRupZ6a15IhtQ"
            />
            <Navbar/>
            <div className="container">
                <motion.div whileHover={{scale: 1.1}}>
                    <div
                        className="border-2 border-dotted border-amber-300 rounded-md w-72 md:w-96 h-[250px] md:h-56 mt-10">
                        <h2 className="mt-4">Ocean+</h2>

                        <p>The ultimate Vyond and GoAnimate streaming platform</p>
                        <a href={"https://oceanbluestream.com"} target="_blank">
                            <button className={"text-2xl bg-blue-500 w-44 h-10 rounded-3xl mt-10"}>Click here!</button>
                        </a>
                    </div>
                </motion.div>
                <motion.div whileHover={{scale: 1.1}}>
                    <div
                        className="border-2 border-dotted border-amber-300 rounded-md w-72 md:w-96 h-[210px] md:h-48 mt-10">
                        <h2 className="mt-4">Codedex hack 🎄 2023</h2>

                        <p>The Codedex New Year hackathon website</p>
                        <a href={"https://new-year-hackathon.aregus.me"} target="_blank">
                            <button className={"text-2xl bg-blue-500 w-44 h-10 rounded-3xl mt-10"}>Click here!</button>
                        </a>
                    </div>
                </motion.div>
            </div>
            <div className="mt-12">
                <Credits/>
            </div>
        </>
    )
}