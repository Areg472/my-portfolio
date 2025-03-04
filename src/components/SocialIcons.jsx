import "./SocialIcons.css";
import { FaReddit, FaYoutube, FaGithub } from "react-icons/fa";
import { FaBluesky, FaDiscord, FaXTwitter } from "react-icons/fa6";
import { TbBrandMatrix } from "react-icons/tb";

// eslint-disable-next-line react/prop-types
export function SocialIcons({ useHmm }) {
  function HandleHover(value) {
    useHmm(value);
  }

  return (
    <div className="socialicons mt-[18px] md:mt-[20px]">
      <div
        className="flex flex-row gap-4"
        onMouseLeave={() => HandleHover(null)}
      >
        <Icon link="https://www.youtube.com/@aregthevideoeditor">
          <FaYoutube onMouseEnter={() => HandleHover(1)} />
        </Icon>
        <Icon link={"https://www.reddit.com/user/SUPERAREG/"}>
          <FaReddit onMouseEnter={() => HandleHover(2)} />
        </Icon>
        <Icon link="https://x.com/Aregtheeditor">
          <FaXTwitter onMouseEnter={() => HandleHover(3)} />
        </Icon>
        <Icon link="https://bsky.app/profile/aregus.me">
          <FaBluesky onMouseEnter={() => HandleHover(4)} />
        </Icon>
        <Icon link="https://discord.gg/EZUW8wW5S8">
          <FaDiscord onMouseEnter={() => HandleHover(5)} />
        </Icon>
        <Icon link="https://github.com/Areg472">
          <FaGithub onMouseEnter={() => HandleHover(6)} />
        </Icon>
        <Icon link="https://matrix.to/#/@aregus:tchncs.de">
          <TbBrandMatrix onMouseEnter={() => HandleHover(7)} />
        </Icon>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Icon({ children, link }) {
  return (
    <a href={link} target="_blank">
      {children}
    </a>
  );
}
