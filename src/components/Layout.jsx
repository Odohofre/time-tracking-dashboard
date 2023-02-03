import Card from "./CardItem";
import ProfileCard from "./ProfileCard";
import CardList from "./CardList";

export default function Layout() {
  return (
    <main className="w-full mx-auto  mb-20">
      <ProfileCard />
      <CardList />
    </main>
  );
}
