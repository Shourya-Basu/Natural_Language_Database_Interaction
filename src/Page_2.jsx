import React from "react";

const Page_2 = ({ Mes, Data }) => {
  return (
    <div className="flex justify-center items-center h-full ">
      <div className="bg-white/90 p-5 rounded-3xl w-[90vw] flex  flex-col">
        <div className="flex justify-center items-center">
          <h1 className="text-5xl font-Knewave text-purple-900 py-5px">
            Backend Responce
          </h1>
        </div>
        <div className="text-2xl font-bold p-5">
          <p>
            <span className="text-cyan-800"> User Input : </span>
            {Mes}{" "}
          </p>
          <br />
          <p>
            <span className="text-cyan-800"> Prompt :</span> {Data.query}{" "}
          </p>
        </div>
        <div className=" p-5">
          <h1>
            <span className="text-cyan-800 text-2xl font-bold">Outpur : </span>
          </h1>
          <div className="max-h-96 overflow-y-auto border rounded-lg flex justify-center ">
            <table className="border-4 min-w-full table-auto">
              <thead >
                <tr className="border-4">
                  {Object.keys(Data.result[0]).map((col) => (
                    <th className="border-4" key={col}>{col}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {Data.result.map((row, i) => (
                  <tr key={i} className="border-4">
                    {Object.values(row).map((val, j) => (
                      <td key={j} className="border-4">{val}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page_2;
