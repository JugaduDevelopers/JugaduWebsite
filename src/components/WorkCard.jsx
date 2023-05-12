import React from "react";

const listItem = [
  {
    item: "Market analysis",
  },
  {
    item: "Product development planning",
  },
  {
    item: "MVP development",
  },
  {
    item: "QA and software support",
  },
  {
    item: "Product design",
  },
  {
    item: "UI/UX of the product",
  },
];

const WorkCard = ({ heading }) => {
  return (
    <div className="bg-queenBlue px-6 py-16 rounded-lg flex gap-6 flex-col">
      <div className="text-black text-xl">Minimum viable product</div>
      <div className="flex flex-col gap-4">
        {listItem.map((x, i) => {
          return (
            <div key={i} className="flex flex-row items-center gap-3">
              <div className="h-2 w-2 bg-black rounded-lg" />
              <div className="text-black text-xs">{x.item}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkCard;
