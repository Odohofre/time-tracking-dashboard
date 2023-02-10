import info from "../assets/data.json";
import CardItem from "./CardItem";
import { v4 as uuidv4 } from "uuid";

export default function CardList({ timeframe = "weekly" }) {
  return (
    <ul className="xl:col-span-3 xl:row-span-1 xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:gap-6">
      {info.map(({ title, timeframes }) => (
        <li className="xl:row-span-1 xl:col-span-1" key={uuidv4()}>
          <CardItem
            title={title}
            timefr={timeframe}
            current={timeframes[timeframe].current}
            previous={timeframes[timeframe].previous}
          />
        </li>
      ))}
    </ul>
  );
}
