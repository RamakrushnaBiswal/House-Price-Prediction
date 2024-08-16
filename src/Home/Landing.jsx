import { Button } from "@nextui-org/react";
import { GiTreehouse } from "react-icons/gi";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <GiTreehouse className="w-60 h-60"/>
        <div className="lg:flex justify-center text-center">
          <h1 className="lg:text-8xl text-4xl  text-amber-300 lg:font-bold lg:mb-0 mb-3  font-bold">Welcome to</h1>
          <span className="lg:text-6xl text-amber-50 bg-cyan-400 font-black p-1 lg:mt-2 mt-4 mb-2 lg:-rotate-6 text-3xl">
            HOUSE HUB
          </span>
        </div>
        <div className="flex text-center justify-center mt-7 font-mono text-xl mb-1">
            <p>Empowering Your Real Estate Decisions with Smart Predictions </p>
        </div>
        <Button radius="full" className="p-6 text-center" variant="flat"><Link to="/started">Get Started</Link></Button>    
      </div>
    </>
  );
};
export default Landing;
