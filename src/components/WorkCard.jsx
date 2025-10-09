import { motion } from "motion/react";

export default function WorkCard({
  // eslint-disable-next-line react/prop-types
  title = "",
  // eslint-disable-next-line react/prop-types
  description = "",
  // eslint-disable-next-line react/prop-types
  link = "",
  // eslint-disable-next-line react/prop-types
  image_link = "",
  // eslint-disable-next-line react/prop-types
  image_alt = "",
}) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="h-full">
      <div className="border-2 border-dotted border-[#ffd846] rounded-md w-80 md:w-96 mt-10 p-4 flex flex-col h-full">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            className="w-full h-auto block"
            src={image_link}
            alt={image_alt}
          />

          <div
            className="absolute left-[4%] top-[4%] bg-black/60 text-white px-3 py-1 rounded-md pointer-events-none"
            style={{ fontSize: "clamp(0.75rem, 1.6vw, 1rem)" }}
          >
            {title}
          </div>

          <div
            className="absolute left-1/2 transform -translate-x-1/2 bottom-[4%] flex justify-center"
            style={{ width: "92%" }}
          >
            <a href={link} target="_blank" rel="noreferrer">
              <button className="bg-[#ffd846] text-black px-4 py-2 rounded-md font-bold-exo cursor-pointer">
                Visit
              </button>
            </a>
          </div>
        </div>
        <div className="mt-3 flex-grow min-h-0">
          <p className="font-regular-exo">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
