import React from "react";
import { Send } from "lucide-react";
import { motion } from "motion/react";
const Send_button = ({onClick}) => {
  return (
    <div>
      <motion.button
        type="button"
        onClick={onClick}
        className="bg-cyan-500 h-[18vh] w-[9vw] rounded-3xl"
        whileHover={{ 
          scale: 1.1,
          boxShadow: "0px 0px 20px rgba(0, 166, 244, 90)",
        }}
      >
        <div className="flex justify-center items-center">
          <Send size={90} color="#ffffff" strokeWidth={1.5} />
        </div>
      </motion.button>
    </div>
  );
};

export default Send_button;
