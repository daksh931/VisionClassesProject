import Input from "./ui/Input";
import Button from "./ui/Button";
import Navbar from "./Navbar";

export default function Signup() {
  return (
    <>
      <Navbar />
      <div className="Signup-container flex flex-col w-full min-h-[120vh] bg-slate-300">
        <div className="self-center mt-12 shadow-xl  shadow-zinc-400 hover:shadow-zinc-500  rounded-md border-4 border-white  min-h-72 min-w-72  bg-slate-400 p-4 font-semibold">
          <h2 className="text-slate-700 text-center font-bold text-2xl ">
            Signup Here
          </h2>

          <Input placeholder={"Name"} classname="mt-5" />
          <Input placeholder={"Email"} classname="mt-5" />
          <Input placeholder={"Phone Number"} classname="mt-5" />
          <Input placeholder={"Password"} classname="mt-5" />

          <div className="flex justify-center w-full">
            <Button style={"px-5 mt-5"}> Signup </Button>
          </div>
        </div>
      </div>
    </>
  );
}
