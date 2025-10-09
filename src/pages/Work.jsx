import MetaTags from "../components/MetaTags.jsx";
/*import { Credits } from "../components/Credits.jsx";*/
import { motion } from "motion/react";
import WorkCard from "../components/WorkCard.jsx";

export function Work() {
  return (
    <>
      <MetaTags title={"Areg"} description="My smol OwO work!" name="Areg" />
      <motion.div
        initial={{ rotate: 150, scale: 0, opacity: 0 }}
        transition={{ duration: 0.75, type: "spring", bounce: 0.3 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: -150, scale: 0, opacity: 0 }}
      >
        <div className="container font-regularExo">
          <WorkCard
            title="Ocean+"
            description="The ultimate Vyond and GoAnimate streaming platform!"
            link="https://oceanbluestream.com/"
            image_alt="Ocean+ logo"
            image_link="https://file.garden/Zp_ExamEPnCWgsNn/logo.jpg"
          />
          <WorkCard
            title="Codédex Winter Hackathon 2024"
            description="A 2 day hackathon run by Codédex in December :D"
            link="https://new-year-hackathon.aregus.me/"
            image_link="https://file.garden/Zp_ExamEPnCWgsNn/Screenshot%202025-10-09%20at%2009-42-40%20Areg%20travels.png"
            image_alt="A screenshot of my hackathon project website"
          />
        </div>
        {/*<div className="mt-12"><Credits /></div>*/}
      </motion.div>
    </>
  );
}
