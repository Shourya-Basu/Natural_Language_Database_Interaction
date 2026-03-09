import React, { useState } from "react";
import Textingbox from "./Commponents/Textingbox/Textingbox";

const Page_1 = ({Mes, setMes, onClick}) => {
    
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="bg-white/90 p-5 rounded-3xl">
        <div className="text-center text-[3vw] font-Knewave m-2.5">
          <h1 className="text-purple-900">
            Natural Language Database Interaction
          </h1>
        </div>
        <div className="w-[70vw] border-4 m-5 rounded-3xl border-purple-800">
          <Textingbox Mes={Mes} setMes={setMes} onClick={onClick} />
        </div>
      </div>
    </div>
  );
};

export default Page_1;
