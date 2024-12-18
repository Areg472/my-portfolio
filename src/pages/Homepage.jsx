import MetaTags from "../components/MetaTags.jsx";
import {SocialIcons} from "../components/SocialIcons.jsx";
import {Credits} from "../components/Credits.jsx";
import "./Homepage.css";
import AnimatedText from "../components/AnimatedText.jsx";
import {Navbar} from "../components/Navbar.jsx";


export function Homepage() {
    return(
        <>
            <MetaTags
                title={"Aregtheeditor"}
                description="Areg's small little corner in the internet :3"
                name="Aregtheeditor"
                image="https://utfs.io/f/thKihuQxhYcPnE4P0fJqSrG7F3ilObYXHjDPRupZ6a15IhtQ"
            />
            <Navbar/>
            <div className="container">
                <h1 className="text-3xl md:text-5xl">Aregtheeditor</h1>
                <div className="card">
                    <img className="pfp" src="https://utfs.io/f/thKihuQxhYcPnE4P0fJqSrG7F3ilObYXHjDPRupZ6a15IhtQ" width="8"
                         alt="Profile Picture"/>
                    <AnimatedText/>
                    <SocialIcons/>
                    <div className="videos">
                        <div className="video">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/st007EZniyU"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen></iframe>
                            <p>Ocean+ trailer</p>
                        </div>
                        <div className="video secondvid">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6X45_n83idI"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen></iframe>
                            <p>Jane ruins the ship trip/grounded</p>
                        </div>
                    </div>
                </div>
                <Credits/>
            </div>
        </>
    )
}