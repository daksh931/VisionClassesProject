import Navbar from "./Navbar";
import InformationCard from "./InformationCard";
export default function HomePage() {
  return (
    <>
      <Navbar />

      <div className="mainHomePage div min-h-[120vh]">
        <div className="flex  w-full justify-between	">
          <h1 className="font-mono text-[40px] font-bold 	p-4">
            Vision Classes
          </h1>
          <div className="flex mt-5 mr-10">
            <InformationCard />
          </div>
        </div>
      </div>
    </>
  );
}
