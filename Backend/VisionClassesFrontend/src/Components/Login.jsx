import Input from "./ui/Input";
import Button from "./ui/Button";
import Navbar from "./Navbar";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="login-container flex flex-col w-full min-h-[120vh] bg-slate-300">
        <div className="self-center shadow-xl  shadow-zinc-400 hover:shadow-zinc-500  rounded-md border-4 border-white mt-12 min-h-72 min-w-72  bg-slate-400 p-4 font-semibold">
          <h2 className="text-slate-700 text-center font-bold text-2xl ">
            Login Here
          </h2>

          <Input placeholder={"Email"} classname="mt-5" />
          <Input placeholder={"Password"} classname="mt-5" />

          <div className="flex justify-center w-full">
            <Button style={"px-5 mt-5"}> Login </Button>
          </div>
        </div>
      </div>
    </>
  );
}
