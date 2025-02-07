import MetaTags from "../components/MetaTags.jsx";
import { Credits } from "../components/Credits.jsx";
import { motion } from "motion/react";
import WorkCard from "../components/WorkCard.jsx";

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
          <WorkCard
            title="Ocean+"
            description="The ultimate Vyond and GoAnimate streaming platform!"
            link="https://oceanbluestream.com/"
          />
          <WorkCard
            title="Codedex hack 2024"
            description="The Codedex New Year Hackathon 🎄!"
            link="https://new-year-hackathon.aregus.me/"
          />
        </div>
        <div className="mt-12">
          <Credits />
        </div>
      </motion.div>
    </>
  );
}
