import Card from "@/components/ui/YardSaleCard";
import Search from "@/components/ui/form/Search";

export default function Home() {
  return (
    <div className="mt-5 mb-10 w-9/12 mx-auto ">
      <div>
        <Search />
        <h1>Yardsales</h1>
        <Card />
        <Card /> <Card /> <Card /> <Card />
      </div>
    </div>
  );
}
