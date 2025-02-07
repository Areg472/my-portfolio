import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
export default function WorkCard({ title, description, link }) {
  return (
    <motion.div whileHover={{ scale: 1.1 }}>
      <div className="border-2 border-dotted border-[#ffd846] rounded-md w-80 md:w-96 h-[250px] md:h-56 mt-10 p-4 flex flex-col">
        <div className="mb-auto">
          <h2 className="mt-4 font-bold-exo">{title}</h2>
          <p className="font-regular-exo">{description}</p>
        </div>

        <div className="mt-auto mb-2 flex justify-center">
          <a href={link} target="_blank">
            <button className="text-2xl bg-[#ffd846] w-44 h-10 rounded-md text-black font-bold-exo cursor-pointer">
              Click here!
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
