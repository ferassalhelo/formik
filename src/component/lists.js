import React from "react";

export default function Lists(Props) {
  let arr = [...Props.data];

  return (
    <div className="my-2 max-w-xl m-auto ">
      {arr.map(item => {
        return (
          <div
            className="h-12 my-2 bg-red-50 p-4 flex  px-6 justify-around"
            key={item.id}
          >
            <p> {item.companyName}</p>
            <p>{item.date}</p>
            <button
              onClick={() => {
                Props.deleateItem(item.id);
              }}
            >
              <i className="far fa-trash-alt text-red-200"></i>
            </button>
          </div>
        );
      })}
    </div>
  );
}
