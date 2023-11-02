import shoppyBannerImg from "../../public/assets/shoppyBanner.jpeg";
import Button from "../components/ui/Button";

const Banner = () => {
  return (
    <header className="relative overflow-hidden flex flex-col justify-center items-center bg-slate-900 mt-8">
      <img
        src="../assets/shoppyBanner.jpeg"
        className="w-full h-80 object-cover opacity-60 "
      />
      <div className="absolute top-32 text-center flex flex-col gap-3 text-white ">
        <div className="text-5xl font-extrabold">Get Your Shoes!</div>
        <div className="text-xl font-semibold">Perfect Shoes For You</div>
      </div>
    </header>
  );
};

export default Banner;
