import "./SocialIcons.css"
import {FaReddit, FaTwitter, FaYoutube, FaGithub} from "react-icons/fa";
import {FaBluesky, FaDiscord} from "react-icons/fa6";

export function SocialIcons() {
    return (
        <div className="socialicons">
            <a href="https://www.youtube.com/@aregthevideoeditor" target="_blank"><FaYoutube/></a>
            <a href="https://www.reddit.com/user/SUPERAREG/" target="_blank"><FaReddit/></a>
            <a href="https://x.com/Aregtheeditor" target="_blank"><FaTwitter/></a>
            <a href="https://bsky.app/profile/aregus.me" target="_blank"><FaBluesky/></a>
            <a href="https://discord.gg/EZUW8wW5S8" target="_blank"><FaDiscord/></a>
            <a href="https://github.com/Areg472" target="_blank"><FaGithub/></a>
        </div>
    )
}