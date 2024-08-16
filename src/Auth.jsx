import { useState } from "react";
import { Input } from "@nextui-org/input";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import NavbarNew from "./Home/Navbar";
import { Button } from "@nextui-org/react";

export const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const[email,setEmail]=useState("");
  const [password, setPassword] = useState("");
  const toggleVisibility = () => setIsVisible(!isVisible);
  
  const handleSubmit=(e)=>{
    e.preventDefeault();
    console.log(email);
    setEmail("")
  }

  return (
    <>
      <NavbarNew />
      <div className="flex justify-center items-center h-screen p-10">
        <form onSubmit={handleSubmit}>
          <h1 className="text-4xl text-amber-400 font-extrabold mb-6">
            Login now
          </h1>
          <Input
            type="email"
            variant="underlined"
            label="Email"
            className="w-80 mb-4"
            required
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <Input
            label="Password"
            variant="underlined"
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
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type={isVisible ? "text" : "password"}
            className="max-w-xs mb-4"
          />
          <p className="text-sm text-slate-400">
            You dont have an account,
            <a href="/signup" className="text-blue-600">
              Signup
            </a>
            ?
          </p>
          <Button type="submit" variant="flat" className="mb-36">
            Log in
          </Button>
        </form>
      </div>
    </>
  );
};


// sognup part 


export const Signup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <>
      <NavbarNew />
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit}>
          <h1 className="text-4xl text-amber-400 font-extrabold mb-6">
            Signup now
          </h1>
          <Input
            type="text"
            variant="underlined"
            label="Name"
            className="w-80 mb-4"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="email"
            variant="underlined"
            label="Email"
            className="w-80 mb-4"
            value={email}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Password"
            variant="underlined"
            value={password}
            onChange={(e) => setName(e.target.value)}
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
            value={confirmPassword}
            onChange={(e) => setName(e.target.value)}
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
          <p className="text-sm text-slate-400">
            You have an account,
            <a href="/login" className="text-blue-600">
              login
            </a>
            ?
          </p>
          <Button type="submit" variant="flat" className="mb-36 mt-3">
            Sign up
          </Button>
        </form>
      </div>
    </>
  );
};
