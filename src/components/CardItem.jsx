import ellipsis from "../assets/images/icon-ellipsis.svg";

import { work, exercise, play, care, social, study } from "./ImageList";

export default function CardItem({ title, current, previous, timefr }) {
  const time = {
    daily: "Yesterday",
    weekly: "Last Weekly",
    monthly: "Last Month",
  };

  const data = {
    Work: {
      color: "bg-[#ff8c66]",
      image: work,
      width: 79,
      height: 79,
    },
    Play: {
      color: "bg-[#56c2e6]",
      image: play,
      width: 76,
      height: 77,
    },
    Study: {
      color: "bg-[#ff5c7c]",
      image: study,
      width: 79,
      height: 79,
    },
    Exercise: {
      color: "bg-[#4acf81]",
      image: exercise,
      width: 81,
      height: 55,
    },
    Social: {
      color: "bg-[#7536d3]",
      image: social,
      width: 75,
      height: 100,
    },
    "Self Care": {
      color: "bg-[#f1c65b]",
      image: care,
      width: 67,
      height: 67,
    },
  };

  return (
    <div
      className={`relative rounded-2xl h-40 xl:h-full mt-10 xl:m-0 overflow-hidden ${data[title].color}`}
    >
      <div className="h-1/4 z-10">
        <img
          src={data[title].image}
          width={data[title].width}
          className="absolute -top-1 right-4"
          alt={title}
        />
      </div>

      <div
        className={`bg-neutral-blue-700 hover:bg-neutral-blue-200 cursor-pointer text-neutral-blue-50 w-full h-3/4 rounded-2xl flex flex-col items-center justify-center space-y-2 xl:space-y-5 px-6 mx-0 relative z-20`}
      >
        <div className="flex justify-between items-center w-full">
          <h2 className="text-lg">{title}</h2>
          <img src={ellipsis} width={21} height={5} alt="ellipsis" />
        </div>
        <div className="flex w-full xl:flex-col xl:space-y-2 justify-between xl:justify-start  items-center xl:items-start xl:mt-10 font-light">
          <span className="text-3xl xl:text-6xl">{`${current}hrs`}</span>
          <span className="text-neutral-blue-100 text-base xl:text-sm">
            {`${time[timefr]} - ${previous}hrs`}
          </span>
        </div>
      </div>
    </div>
  );
}
