import MetaTags from "../components/MetaTags.jsx";
import { SocialIcons } from "../components/SocialIcons.jsx";
import { Credits } from "../components/Credits.jsx";
import "./Homepage.css";
import AnimatedText from "../components/AnimatedText.jsx";
import { motion } from "motion/react";
import { useState } from "react";

export function Homepage() {
  const [hmm, useHmm] = useState(null);

  return (
    <>
      <MetaTags
        title={"Aregtheeditor"}
        description="Areg's small little corner in the internet :3"
        name="Aregtheeditor"
      />
      <motion.div
        initial={{ rotate: 150, scale: 0, opacity: 0 }}
        transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: -150, scale: 0, opacity: 0 }}
      >
        <div className="container font-regularExo">
          <h1 className="text-3xl md:text-5xl font-bolditalic-exo">
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
            <div className="h-8">
              {hmm ? (
                <motion.h2
                  className="text-l text-center font-bold-exo"
                  key={hmm}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  {(hmm === 1 && "Youtube") ||
                    (hmm === 2 && "Reddit") ||
                    (hmm === 3 && "X") ||
                    (hmm === 4 && "Bluesky") ||
                    (hmm === 5 && "Discord") ||
                    (hmm === 6 && "Github")}
                </motion.h2>
              ) : (
                <AnimatedText />
              )}
            </div>
            <SocialIcons useHmm={useHmm} />
            <div className="videos">
              <div className="video">
                <video controls>
                  <source
                    src="https://gr5mutu1hr.ufs.sh/f/thKihuQxhYcP5uuhvrey9QMVKuYNiPmI2vUEWw8p31tdckfX"
                    type="video/mp4"
                  />
                </video>
                <p className="font-regular-exo">Ocean+ trailer</p>
              </div>
              <div className="video secondvid">
                <video controls>
                  <source
                    src="https://gr5mutu1hr.ufs.sh/f/thKihuQxhYcPd668IfdaseL9gSckKrUp5Etw6zQqDBM721Zj"
                    type="video/mp4"
                  />
                </video>
                <p className="font-regular-exo">Doing the Hackathon</p>
              </div>
            </div>
          </div>
          <Credits />
        </div>
      </motion.div>
    </>
  );
}
