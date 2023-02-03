import Jeremy from "../assets/images/image-jeremy.png";

export default function ProfileCard() {
  return (
    <div className="flex flex-col rounded-2xl bg-neutral-blue-700 overflow-hidden h-56">
      <div className="flex items-center w-full h-2/3 space-x-5 rounded-2xl bg-primary-blue px-6 py-10">
        <img
          src={Jeremy}
          className="w-20 h-auto rounded-full border-4"
          width={80}
          height={80}
        />
        <div className="">
          <span className=" text-neutral-blue-100/90 text-sm">Report For</span>
          <h1 className="text-2xl font-light  text-neutral-blue-50">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <ul className="flex justify-between font-normal h-1/3 text-lg space-x- py-6 px-6 text-neutral-blue-200">
        <li>
          <button>Daily</button>
        </li>
        <li>
          <button className="text-neutral-blue-50">Weekly</button>
        </li>
        <li>
          <button>Monthly</button>
        </li>
      </ul>
    </div>
  );
}
