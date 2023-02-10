import { v4 as uuidv4 } from "uuid";
import Jeremy from "../assets/images/image-jeremy.png";

export default function ProfileCard({ timeframe, onClick }) {
  const buttons = ["Daily", "Weekly", "Monthly"];

  return (
    <div className="flex flex-col rounded-2xl xl:col-span-1 xl:row-span-2 bg-neutral-blue-700 overflow-hidden h-56 xl:h-full xl:pb-6">
      <div className="flex xl:flex-col items-center xl:items-start xl:justify-between w-full h-2/3 space-x-5 xl:space-x-0 rounded-2xl bg-primary-blue px-6 py-10 xl:pt-7 xl:pb-16">
        <img
          src={Jeremy}
          alt="Jeremy's face"
          className="w-20 h-auto rounded-full border-4"
          width={80}
          height={80}
        />
        <div className="xl:mt-5">
          <span className=" text-neutral-blue-100/80 text-sm xl:text-base">
            Report For
          </span>
          <h1 className="text-2xl xl:text-4xl font-light  text-neutral-blue-50">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <ul className="flex xl:flex-col justify-between xl:justify-start xl:space-y-5 font-normal h-1/3 text-lg py-6 xl:py- px-6">
        {buttons.map((btn) => (
          <li key={uuidv4()}>
            <button
              className={
                timeframe == btn.toLowerCase()
                  ? "text-neutral-blue-50"
                  : "text-neutral-blue-200 hover:text-neutral-blue-50"
              }
              onClick={onClick}
              value={btn.toLowerCase()}
            >
              {btn}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
