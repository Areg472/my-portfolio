import MetaTags from "../components/MetaTags.jsx";
import { SocialIcons } from "../components/SocialIcons.jsx";
import { Credits } from "../components/Credits.jsx";
import "./Homepage.css";
import AnimatedText from "../components/AnimatedText.jsx";
import { motion } from "motion/react";

export function Homepage() {
  return (
    <>
      <MetaTags
        title={"Aregtheeditor"}
        description="Areg's small little corner in the internet :3"
        name="Aregtheeditor"
        image="https://gr5mutu1hr.ufs.sh/f/thKihuQxhYcPw3n5zcEF1bloKXeA0d3pP7RDCmGxkgNhTjMa"
      />
      <motion.div
        initial={{ rotate: 150, scale: 0, opacity: 0 }}
        transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: -150, scale: 0, opacity: 0 }}
      >
        <div className="container font-regularExo">
          <h1 className="text-3xl md:text-5xl font-bolditalicExo">
            Aregtheeditor
          </h1>
          <div className="card">
            <div className="flex justify-center items-center mb-4">
              <motion.div
                initial={{ scale: 0.2, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeatType: "reverse",
                  type: "spring",
                  bounce: 1,
                  delay: 1,
                  bounceStiffness: 360,
                  bounceDamping: 5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  transition={{
                    duration: 7,
                    repeatType: "loop",
                    ease: "linear",
                    repeat: Infinity,
                    delay: 1,
                  }}
                  animate={{ rotate: 360 }}
                >
                  <img
                    className="w-16 h-16 rounded-full"
                    src="https://utfs.io/f/thKihuQxhYcPw3n5zcEF1bloKXeA0d3pP7RDCmGxkgNhTjMa"
                    alt="Profile Picture"
                  />
                </motion.div>
              </motion.div>
            </div>
            <AnimatedText />
            <SocialIcons />
            <div className="videos">
              <div className="video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://gr5mutu1hr.ufs.sh/f/thKihuQxhYcP5uuhvrey9QMVKuYNiPmI2vUEWw8p31tdckfX"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <p>Ocean+ trailer</p>
              </div>
              <div className="video secondvid">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://gr5mutu1hr.ufs.sh/f/thKihuQxhYcPd668IfdaseL9gSckKrUp5Etw6zQqDBM721Zj"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <p>Jane ruins the ship trip/grounded</p>
              </div>
            </div>
          </div>
          <Credits />
        </div>
      </motion.div>
    </>
  );
}
