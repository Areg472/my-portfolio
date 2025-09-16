import MetaTags from "../components/MetaTags.jsx";
import { SocialIcons } from "../components/SocialIcons.jsx";
import { Credits } from "../components/Credits.jsx";
import "./Homepage.css";
import AnimatedText from "../components/AnimatedText.jsx";
import { motion } from "motion/react";
import { useState } from "react";
import { MobileView, BrowserView } from "react-device-detect";

export function Homepage() {
  const [hmm, useHmm] = useState(null);

  function HandleHoverVid(value) {
    useHmm(value);
  }

  return (
    <>
      <MetaTags
        title={"Areg"}
        description="Areg's small little corner in the internet :3"
        name="Areg"
      />
      <motion.div
        initial={{ rotate: 150, scale: 0, opacity: 0 }}
        transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: -150, scale: 0, opacity: 0 }}
      >
        <div className="container font-regularExo">
          <h1 className="text-3xl md:text-5xl font-bolditalic-exo">Areg</h1>
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
                    onMouseEnter={() => HandleHoverVid(10)}
                    onMouseLeave={() => HandleHoverVid(null)}
                  />
                </motion.div>
              </motion.div>
            </div>
            <div className="h-8">
              <BrowserView>
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
                      (hmm === 3 && "X") ||
                      (hmm === 4 && "Bluesky") ||
                      (hmm === 5 && "Discord") ||
                      (hmm === 6 && "Github") ||
                      (hmm === 8 && "Ocean+ Trailer") ||
                      (hmm === 9 && "Doing the Hackathon") ||
                      (hmm === 10 && ":3")}
                  </motion.h2>
                ) : (
                  <AnimatedText />
                )}
              </BrowserView>
              <MobileView>
                <AnimatedText />
              </MobileView>
            </div>
            <SocialIcons useHmm={useHmm} />
            <div className="flex flex-col items-center justify-center ml-[9%] md:ml-[7%]">
              <div
                onMouseLeave={() => HandleHoverVid(null)}
                className="flex flex-col md:flex-row gap-4"
              >
                <div className="content-center items-center justify-center w-[90%] md:w-[45%]">
                  <video controls onMouseEnter={() => HandleHoverVid(8)}>
                    <source
                      src="https://gr5mutu1hr.ufs.sh/f/thKihuQxhYcP5uuhvrey9QMVKuYNiPmI2vUEWw8p31tdckfX"
                      type="video/mp4"
                    />
                  </video>
                  <MobileView>
                    <p className="font-regular-exo mt-4">Ocean+ trailer</p>
                  </MobileView>
                </div>
                <div className="content-center items-center justify-center w-[90%] md:w-[45%]">
                  <video controls onMouseEnter={() => HandleHoverVid(9)}>
                    <source
                      src="https://gr5mutu1hr.ufs.sh/f/thKihuQxhYcPd668IfdaseL9gSckKrUp5Etw6zQqDBM721Zj"
                      type="video/mp4"
                    />
                  </video>
                  <MobileView>
                    <p className="font-regular-exo mt-4">Doing the Hackathon</p>
                  </MobileView>
                </div>
              </div>
            </div>
          </div>
          <Credits />
        </div>
      </motion.div>
    </>
  );
}
