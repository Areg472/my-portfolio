import "./SocialIcons.css";
import { FaReddit, FaYoutube, FaGithub } from "react-icons/fa";
import { FaBluesky, FaDiscord, FaXTwitter } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
export function SocialIcons({ useHmm }) {
  function HandleHover(value) {
    useHmm(value);
  }

  return (
    <div className="socialicons">
      <div
        className="flex flex-row gap-4"
        onMouseLeave={() => HandleHover(null)}
      >
        <a href="https://www.youtube.com/@aregthevideoeditor" target="_blank">
          <FaYoutube onMouseEnter={() => HandleHover(1)} />
        </a>
        <a href="https://www.reddit.com/user/SUPERAREG/" target="_blank">
          <FaReddit onMouseEnter={() => HandleHover(2)} />
        </a>
        <a href="https://x.com/Aregtheeditor" target="_blank">
          <FaXTwitter onMouseEnter={() => HandleHover(3)} />
        </a>
        <a href="https://bsky.app/profile/aregus.me" target="_blank">
          <FaBluesky onMouseEnter={() => HandleHover(4)} />
        </a>
        <a href="https://discord.gg/EZUW8wW5S8" target="_blank">
          <FaDiscord onMouseEnter={() => HandleHover(5)} />
        </a>
        <a href="https://github.com/Areg472" target="_blank">
          <FaGithub onMouseEnter={() => HandleHover(6)} />
        </a>
      </div>
    </div>
  );
}
