import { useState } from "react";
import { Input } from "@nextui-org/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import NavbarNew from "./Home/Navbar";
import { Button } from "@nextui-org/react";

export const Login = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
    <NavbarNew/>
    <div className="flex justify-center items-center h-screen">
      <form>
        <h1 className="text-4xl text-amber-400 font-extrabold mb-6">Login now</h1>
        <Input
          type="email"
          variant="underlined"
          label="Email"
          className="w-80 mb-4"
        />
        <Input
          label="Password"
          variant="underlined"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <FaEye className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs mb-4"
        />
        <Button type="submit" variant="flat" className="mb-36">Log in</Button>
      </form>
    </div>
    </>
  );
};

export const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <>
    <NavbarNew/>
    <div className="flex justify-center items-center h-screen">
      <form>
        <h1 className="text-4xl text-amber-400 font-extrabold mb-6">Signup now</h1>
        <Input
          type="text"
          variant="underlined"
          label="Name"
          className="w-80 mb-4"
        />
        <Input
          type="email"
          variant="underlined"
          label="Email"
          className="w-80 mb-4"
        />
        <Input
          label="Password"
          variant="underlined"
          placeholder="Enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <FaEye className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <FaEyeSlash className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs mb-4"
        />
        <Input
          label="Confirm Password"
          variant="underlined"
          placeholder="Re-enter your password"
          endContent={
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
              aria-label="toggle password visibility"
            >
              {isVisible ? (
                <FaEye className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <FaEyeSlash className="text-2xl text-default-400 pointer-events-none"/>
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
          className="max-w-xs mb-4"
        />
        <Button type="submit" variant="flat" className="mb-36">Sign up</Button>
      </form>
    </div>
    </>
  );
};
