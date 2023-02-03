import work from "../assets/images/icon-work.svg";
import ellipsis from "../assets/images/icon-ellipsis.svg";

export default function CardItem({title, current, previous}) {
  return (
    <div className="#faffff relative rounded-2xl h-40 bg-[#ff8864] mt-10 overflow-hidden ">
      <div className="h-1/4 z-10">
        <img
          src={work}
          width={79}
          className="absolute -top-3 right-4"
          alt="A mail bag"
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
