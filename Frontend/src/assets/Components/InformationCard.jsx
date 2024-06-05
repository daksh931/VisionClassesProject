import Button from "./ui/Button";
import Input from "./ui/Input";

export default function InformationCard() {
  return (
    <>
      <div className="bg-zinc-500 min-w-72 pl-3 pr-5 rounded-md pb-5 flex flex-col pt-2 ">
        <a className="text-center w-full text-2xl uppercase font-mono text-white font-semibold ">inquiry </a>
        <Input placeholder={"Name"} />
        <Input placeholder={"Email"} />
        <Input placeholder={"Phone Number"} />
        <button className="py-3"> <Button> Submit </Button></button> 
      </div>
    </>
  );
}
