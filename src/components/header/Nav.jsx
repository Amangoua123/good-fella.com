import { height } from "./anim";
import { motion } from "motion/react";

export function Nav() {
  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      class="w-8xl bg-bg h-300 fixed left-0 top-18 bottom-20"
    >
      <div className="h-100">Hello Mun</div>
    </motion.div>
  );
}
