import ProfileCard from "./ProfileCard";
import CardList from "./CardList";
import { useState } from "react";

export default function Layout() {
  const [active, setActive] = useState(true);

  return (
    <main className="w-full mx-auto  mb-20">
      <ProfileCard />
      <CardList timeframe="daily" />
    </main>
  );
}
