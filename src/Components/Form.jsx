import { Button, Input } from "@nextui-org/react";
import { Select, SelectItem } from "@nextui-org/select";
import NavbarNew from "../Home/Navbar";
import Footer from"../Home/Footer"
import { data,furnishingData,property,typeapprt } from "../utils/data";
const Form = () => {
  return (
    <>
      <NavbarNew />
      <div className="flex h-full w-full justify-center items-center p-20 gap-72">
        <div className="">
          <h1 className="text-6xl font-bold text-center mb-4 text-amber-400">
            Check your feature <br />
            House price
          </h1>
          <h2 className="text-5xl font-extrabold text-center text-cyan-400 mt-32">
            Your House Price is <br />
             ₹ <b>2,30,000</b>/-
          </h2>
        </div>
        <div className="flex h-full flex-col items-center justify-start w-1/5">
          <form className="h-full">
            <Input
              type="text"
              variant="underlined"
              label="Area of house"
              className="w-96 mb-4"
            />
            <Input
              type="text"
              variant="underlined"
              label="Number of BHK"
              className="w-96 mb-4"
            />
            <Select
              label="Number of bathrooms"
              variant="underlined"
              className="w-96 mb-2"
            >
              {data.map((an) => (
                <SelectItem key={an.key}>{an.label}</SelectItem>
              ))}
            </Select>
            <Select
              label="Number of Parkings"
              variant="underlined"
              className="w-96 mb-2"
            >
              {data.map((an) => (
                <SelectItem key={an.key}>{an.label}</SelectItem>
              ))}
            </Select>
            <Select
              label="Furnishing"
              variant="underlined"
              className="w-96 mb-2"
            >
              {furnishingData.map((an) => (
                <SelectItem key={an.key}>{an.label}</SelectItem>
              ))}
            </Select>
            <Select
              label="Transaction of Property"
              variant="underlined"
              className="w-96 mb-2"
            >
              {property.map((an) => (
                <SelectItem key={an.key}>{an.label}</SelectItem>
              ))}
            </Select>
            <Select
              label="Type of Property"
              variant="underlined"
              className="w-96 mb-2"
            >
              {typeapprt.map((an) => (
                <SelectItem key={an.key}>{an.label}</SelectItem>
              ))}
            </Select>
            <Button type="submit" variant="flat" color="secondary">
              Predict
            </Button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Form;
