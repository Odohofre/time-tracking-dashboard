import Jeremy from "../assets/images/image-jeremy.png";

export default function ProfileCard() {
  return (
    <div className="flex flex-col rounded-2xl w- bg-neutral-blue-700 overflow-hidden">
      <div className="flex items-center w-full justify-center space-x-5 rounded-2xl bg-primary-blue px-5 py-10">
        <img
          src={Jeremy}
          className="w-20 h-auto rounded-full border-4"
          width={80}
          height={80}
        />
        <div className="">
          <span className=" text-neutral-blue-100/50 text-sm">Report For</span>
          <h1 className="text-2xl  text-neutral-blue-100">Jeremy Robson</h1>
        </div>
      </div>
      <ul className="flex justify-center space-x-10 py-6 px-5 text-neutral-blue-200">
        <li>
          <button>Daily</button>
        </li>
        <li>
          <button>Weekly</button>
        </li>
        <li>
          <button>Monthly</button>
        </li>
      </ul>
    </div>
  );
}
