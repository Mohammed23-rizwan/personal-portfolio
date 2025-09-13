import React from "react";

const Card = () => {
  return (
    <div className="w-[450px] h-[250px] bg-slate-400 border border-slate-600 p-4 flex rounded-2xl">
      <div className="w-[40%] h-full  flex justify-center items-center">
        <div className="w-20 h-20 rounded-full overflow-hidden border-slate-500 border">
          <img src="https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg" className=" object-fill" alt="" />{" "}
        </div>
      </div>
      <div className="w-full h-full text-white px-2">
        <ul className="flex flex-col justify-center h-full gap-2">
          <li className=" capitalize">name : Mohammed rizwan s</li>
          <li className=" capitalize">Date of birth : 23/03/1998</li>
          <li className=" capitalize">martial status : Single </li>
          <li className=" capitalize">Education : BE - CSE</li>
          <li className=" capitalize">
            Address : no 8 indhira nagar 2nd cross st pattur
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
