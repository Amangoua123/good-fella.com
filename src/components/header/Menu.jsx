import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Nav } from "./Nav";

export function Menu() {
  const [buttonState, setButtonState] = useState(false);
  return (
    <div
      onClick={() => setButtonState(!buttonState)}
      class="uppercase text-md cursor-pointer text-menu font-extralight flex gap-3 items-center"
    >
      <div class="relative w-14 flex justify-center overflow-hidden">
        <motion.span
          className="inline-block"
          transition={{ type: "spring", bounce: 0, duration: 0.3 }}
          animate={{ y: buttonState ? "-100%" : 0 }}
        >
          MENU
        </motion.span>

        <AnimatePresence mode="popLayout">
          {buttonState && (
            <motion.span
              class="absolute left-1/2 -translate-x-1/2  top-full"
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              initial={{ y: 0, opacity: 1 }}
              animate={{ opacity: 1, top: 0 }}
              exit={{ opacity: 1, top: "100%" }}
            >
              CLOSE
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div class="flex flex-col gap-1">
        <motion.span
          transition={{ type: "spring", bounce: 0, duration: 0.3 }}
          animate={{
            rotate: buttonState ? 45 : 0,
            translateY: buttonState ? 3 : 0,
          }}
          className="bars w-5 bg-menu h-0.5"
        ></motion.span>
        <motion.span
          transition={{ type: "spring", bounce: 0, duration: 0.3 }}
          animate={{
            rotate: buttonState ? -45 : 0,
            translateY: buttonState ? -3 : 0,
          }}
          className="bars w-5 bg-white h-0.5"
        ></motion.span>
      </div>
      <AnimatePresence mode="wait">{buttonState && <Nav />}</AnimatePresence>
    </div>
  );
}
