import info from "../assets/data.json";
import CardItem from "./CardItem";
import { v4 as uuidv4 } from "uuid";

export default function CardList() {
  return (
    <ul>
      {info.map(({ title,  timeframes: { daily, weekly, monthly } }) => (
        <li key={uuidv4()}>
          <CardItem
            title={title}
            current={daily.current}
            previous={daily.previous}
          />
        </li>
      ))}
    </ul>
  );
}
