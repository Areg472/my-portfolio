import MetaTags from "../components/MetaTags.jsx";
import { Credits } from "../components/Credits.jsx";
import { motion } from "motion/react";

export function Work() {
  return (
    <>
      <MetaTags
        title={"Aregtheeditor"}
        description="My smol OwO work!"
        name="Aregtheeditor"
      />
      <motion.div
        initial={{ rotate: 150, scale: 0, opacity: 0 }}
        transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: -150, scale: 0, opacity: 0 }}
      >
        <div className="container font-regularExo">
          <motion.div whileHover={{ scale: 1.1 }}>
            <div className="border-2 border-dotted border-[#ffd846] rounded-md w-80 md:w-96 h-[250px] md:h-56 mt-10 p-4">
              <h2 className="mt-4 font-bold-exo">Ocean+</h2>

              <p className="font-regular-exo">
                The ultimate Vyond and GoAnimate streaming platform!
              </p>
              <a href={"https://oceanbluestream.com"} target="_blank">
                <button
                  className={
                    "text-2xl bg-[#ffd846] w-44 h-10 rounded-md mt-10 text-black font-bold-exo"
                  }
                >
                  Click here!
                </button>
              </a>
            </div>
          </motion.div>
          <motion.div whileHover={{ scale: 1.1 }}>
            <div className="border-2 border-dotted border-[#ffd846] rounded-md w-80 md:w-96 h-[250px] md:h-56 mt-10 p-4">
              <h2 className="mt-4 font-bold-exo">
                Codedex hack 2024{" "}
                <img
                  className="size-5 mb-1 inline"
                  src="https://utfs.io/f/thKihuQxhYcPwsR0oOfEF1bloKXeA0d3pP7RDCmGxkgNhTjM"
                  alt="tree"
                />
              </h2>

              <p className="font-regular-exo">
                The Codedex New Year hackathon
                <br />
                website!
              </p>
              <a href={"https://new-year-hackathon.aregus.me"} target="_blank">
                <button
                  className={
                    "text-2xl bg-[#ffd846] w-44 h-10 rounded-md text-black mt-10 font-bold-exo"
                  }
                >
                  Click here!
                </button>
              </a>
            </div>
          </motion.div>
        </div>
        <div className="mt-12">
          <Credits />
        </div>
      </motion.div>
    </>
  );
}
