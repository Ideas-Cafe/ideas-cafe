"use client";
import { motion } from "framer-motion";
const Blank2 = () => {
  return (
    <>
      <div
        className="flex justify-center items-center h-screen w-full bg-black text-amber-50"
        id="blank"
      >
        <div className="text-amber-50">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl max-sm:text-2xl font-bold text-center"
          >
            "SHARE YOUR IDEAS, JOIN THE <br className="max-sm:hidden" />{" "}
            DISCUSSION, BUILD THE FUTURE"
          </motion.p>
        </div>
      </div>
    </>
  );
};
export default Blank2;
