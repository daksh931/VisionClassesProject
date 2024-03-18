import Button from "./ui/Button";
import Input from "./ui/Input";

export default function InformationCard() {
  return (
    <>
      <div className="bg-zinc-500 min-w-72 pl-3 pr-5 rounded-md pb-5">
        <Input placeholder={"Name"} />
        <Input placeholder={"Email"} />
        <Input placeholder={"Phone Number"} />
        <Button> Submit </Button>
      </div>
    </>
  );
}
