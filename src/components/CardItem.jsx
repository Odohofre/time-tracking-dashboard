import ellipsis from "../assets/images/icon-ellipsis.svg";

import { work, exercise, play, care, social, study } from "./ImageList";

export default function CardItem({ title, current, previous }) {
  const data = {
    Work: {
      color: "bg-[#ff8c66]",
      image: work,
    },
    Play: {
      color: "bg-[#56c2e6]",
      image: play,
    },
    Study: {
      color: "bg-[#ff5c7c]",
      image: study,
    },
    Exercise: {
      color: "bg-[#4acf81]",
      image: exercise,
    },
    Social: {
      color: "bg-[#7536d3]",
      image: social,
    },
    "Self Care": {
      color: "bg-[#f1c65b]",
      image: care,
    },
  };

  return (
    <div
      className={`relative rounded-2xl h-40 mt-10 overflow-hidden ${data[title].color}`}
    >
      <div className="h-1/4 z-10">
        <img
          src={data[title].image}
          width={76}
          className="absolute -top-3 right-4"
          alt={title}
        />
      </div>

      <div className="bg-neutral-blue-700 text-neutral-blue-50 h-3/4 rounded-2xl flex flex-col items-center justify-center space-y-2 px-6 relative z-20">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-lg">{title}</h2>
          <img src={ellipsis} width={21} height={5} alt="ellipsis" />
        </div>
        <div className="flex w-full justify-between items-center font-light">
          <span className="text-3xl">{`${current}hrs`}</span>
          <span className="text-neutral-blue-100 text-base">
            {`Last Week - ${previous}hrs`}
          </span>
        </div>
      </div>
    </div>
  );
}
