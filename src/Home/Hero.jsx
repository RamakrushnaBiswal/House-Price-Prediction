import img1 from "../assets/House searching-amico.png";

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10 space-y-10 lg:space-y-0 p-4 lg:p-10">
      <div className="flex flex-col justify-center items-center w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-3xl lg:text-8xl text-amber-300 font-black">
          Accuration Value <b className="text-purple-500">98.65%</b>
        </h1>
        <i className="text-2xl lg:text-4xl text-slate-400 mt-4 lg:mt-2">
          Get your insights accurately
        </i>
      </div>
      <div className="flex justify-center items-center w-full lg:w-1/3">
        <img src={img1} alt="House searching" className="w-4/5 lg:w-full"/>
      </div>
    </div>
  );
};

export default Hero;
