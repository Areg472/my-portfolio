import MetaTags from "../components/MetaTags.jsx";
import { SocialIcons } from "../components/SocialIcons.jsx";
import "./Homepage.css";
import AnimatedText from "../components/AnimatedText.jsx";
import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { MobileView, BrowserView, isMobile } from "react-device-detect";
import Credits from "../components/Credits.jsx";

export function Homepage() {
  const [hmm, setHmm] = useState(null);
  const [membersCount, setMembersCount] = useState(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  function HandleHoverVid(value) {
    setHmm(value);
  }

  useEffect(() => {
    let mounted = true;
    async function fetchMembers() {
      const apiUrl = "/api/club/2CGUYCGUY";

      try {
        console.log("Fetching members...");
        const res = await fetch(apiUrl, {
          signal: AbortSignal.timeout(5000),
        });

        if (!mounted) return;

        if (res.ok) {
          const data = await res.json();
          const list = Array.isArray(data.members) ? data.members : [];
          console.log("Members fetched successfully:", list);
          setMembersCount(list.length);
          setHasLoaded(true);
          return;
        }
      } catch (err) {
        console.warn("Fetch failed:", err.message);
      }

      console.error("Fetch attempt failed");
      if (mounted) {
        setMembersCount(null);
        setHasLoaded(true);
      }
    }
    fetchMembers();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <MetaTags
        title={"Areg"}
        description="Areg's small little corner in the internet :3"
        name="Areg"
      />
      <motion.div
        initial={{ rotate: isMobile ? 0 : 150, scale: 0, opacity: 0 }}
        transition={{
          duration: 0.75,
          type: "spring",
          bounce: isMobile ? 0.2 : 0.3,
        }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: isMobile ? 0 : -150, scale: 0, opacity: 0 }}
      >
        <div className="container font-regularExo">
          <h1 className="font-thin mb-4 text-3xl md:text-5xl font-bolditalic-exo">
            Areg
          </h1>

          <h4 className="font-thin mt-3 text-md md:text-xl font-regular-exo">
            A smol web dev who likes open source stuff, and programming. <br />
            Computers are cool :)
          </h4>

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
                    className="text-l text-center font-bold-exo font-"
                    key={hmm}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {(hmm === 1 && "YouTube") ||
                      (hmm === 3 && "X") ||
                      (hmm === 4 && "BlueSky") ||
                      (hmm === 5 && "Discord") ||
                      (hmm === 6 && "GitHub") ||
                      (hmm === 7 && "Contact") ||
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
            {hasLoaded && membersCount !== null && membersCount < 30 && (
              <a href={"https://link.aregus.me/club"} target="_blank">
                <button className="font-regular-exo cursor-pointer mt-4 bg-yellow-400 rounded-xl text-black w-48 h-8">
                  My Brawl Stars Club
                </button>
              </a>
            )}
            <SocialIcons useHmm={setHmm} />
            <div className="flex flex-col items-center justify-center ml-[9%] md:ml-[7%]">
              <div
                onMouseLeave={() => HandleHoverVid(null)}
                className="flex flex-col md:flex-row gap-4"
              >
                <div className="content-center items-center justify-center w-[90%] md:w-[45%]">
                  <video
                    controls
                    onMouseEnter={() => HandleHoverVid(8)}
                    poster="https://file.garden/Zp_ExamEPnCWgsNn/Screenshot%202025-10-09%20at%2009-34-24%20Areg.png"
                  >
                    <source
                      src="https://file.garden/Zp_ExamEPnCWgsNn/Ocean%2B%20full%20trailer.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <MobileView>
                    <p className="font-regular-exo mt-4">Ocean+ trailer</p>
                  </MobileView>
                </div>
                <div className="content-center items-center justify-center w-[90%] md:w-[45%]">
                  <video
                    controls
                    onMouseEnter={() => HandleHoverVid(9)}
                    poster="https://file.garden/Zp_ExamEPnCWgsNn/Screenshot%202025-10-09%20at%2009-29-43%20Areg.png"
                  >
                    <source
                      src="https://file.garden/Zp_ExamEPnCWgsNn/Doing%20the%20hackathon!.mp4"
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
