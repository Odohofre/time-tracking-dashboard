import info from "../assets/data.json";
import CardItem from "./CardItem";
import { v4 as uuidv4 } from "uuid";

export default function CardList({timeframe='daily'}) {
  return (
    <ul>
      {info.map(({ title,  timeframes }) => (
        <li key={uuidv4()}>
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
