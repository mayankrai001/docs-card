import React from "react";
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({ data, reference}) {
  return (
      <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className="relative w-52 h-64 flex-shrink-0 bg-zinc-900 rounded-[30px] text-white p-8 overflow-hidden ">
        <FaRegFileAlt />
        <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
        <div className="footer absolute bottom-0 w-full left-0">
          <div className="flex items-center justify-between py-1 px-8 mb-3">
            <h5>{data.filesize}</h5>
            <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
              {data.close ? (
                <IoMdClose />
              ) : (
                <LuDownload size="0.8em" color="white" />
              )}
            </span>
          </div>
          {data.tag.isOpen ? (
            <div className={`tag w-full h-12 ${data.tag.tagColor ==="blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
              <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
            </div>
          ) : null}
        </div>
      </motion.div>
  );
}

export default Card;
