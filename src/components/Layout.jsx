import Card from "./Card";
import ProfileCard from "./ProfileCard";
import CardList from "./CardList";

export default function Layout() {
  return (
    <main className="w-full mx-auto  mb-20">
      <ProfileCard />
      <Card />
      <CardList />
    </main>
  );
}
