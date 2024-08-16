import { Button, Input } from "@nextui-org/react";
import { IoIosArrowForward } from "react-icons/io";

const Subscribe = () => {
  return (
    <div className="w-full sm:w-4/5 lg:border-2 lg:border-amber-400 mx-auto p-6 sm:p-10 lg:p-14 mt-10 lg:mt-20">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-2 lg:space-y-0 lg:space-x-4 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold">Subscribe to our</h1>
          <span className="text-4xl sm:text-5xl border-3 border-dashed p-1 font-black">
            Newsletter
          </span>
        </div>
        <form className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-2">
          <Input
            type="email"
            variant="underlined"
            label="Email"
            className="w-full sm:w-80"
          />
          <Button type="submit" variant="flat" className="mt-5 lg:mt-0 lg:ml-2" color="danger">
            Subscribe<IoIosArrowForward />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
