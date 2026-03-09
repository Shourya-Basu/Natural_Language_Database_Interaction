import React from "react";
import Send_button from "./Send_button";
const Textingbox = ({ Mes, setMes, onClick }) => {
  
  const submit = (a) => {
    setMes(a.target.value);
  };

  return (
    <div className="h-[20vh] w-[70vw]">
      <form className="flex flex-row gap-3">
        <div>
          <textarea
            className="p-5 rounded-3xl h-[20vh] w-[59vw] bg-amber-50  resize-none text-2xl"
            onChange={submit}
            value={Mes}
          ></textarea>
        </div>
        <div className="flex items-center">
          <Send_button onClick={onClick} />
        </div>
      </form>
    </div>
  );
};

export default Textingbox;
