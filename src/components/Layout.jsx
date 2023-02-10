import ProfileCard from "./ProfileCard";
import CardList from "./CardList";
import { useState } from "react";

export default function Layout() {
  const [timeframe, setTimeframe] = useState("daily");

  const handleClick = (event) => setTimeframe(event.currentTarget.value);

  return (
    <main className="w-full mx-auto  mb-20">
      <ProfileCard onClick={handleClick} timeframe={timeframe} />
      <CardList timeframe={timeframe} />
    </main>
  );
}
