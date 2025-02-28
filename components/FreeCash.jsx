import Image from "next/image";
import TetherImage from "@/public/tether.webp";
import appStore from "@/public/appstore.jpeg";
import GooglePlay from "@/public/GooglePlay.png";
import microsoft from "@/public/microsoft.png";
export default function FreeCash() {
  return (
    <section className="py-8">
      <div className="lg:max-w-7xl mx-auto container px-10">
        <h1 className="text-2xl font-medium text-center text-orange-500">
          Claim Free <span className="text-[#26A17B]">USDT </span> Now
        </h1>
        <div className="flex justify-center items-center">
          <Image src={TetherImage} alt="earn free cash" />{" "}
        </div>
        <p className="text-center text-2xl font-semibold text-gray-900">
          Claim Now Free $100 USDT
        </p>
        <div className="flex flex-col items-center gap-3 mt-5 justify-center">
          <a href="https://www.effectiveratecpm.com/ebmi8eah?key=f08d3ac8bfcaba61b928eb1819245b99">
            <button className="bg-orange-500 px-4 py-2 rounded-full text-white hover:text-lime-400 transition-all duration-500 hover:bg-orange-700 ">
              Verify Now
            </button>
          </a>
          <h2 className="text-3xl font-bold text-center text-[#26A17B] pt-4">
            How to Cliam Free USDT
          </h2>
          <p className="text-orange-500 text-lg font-medium inline-flex items-center justify-center gap-[2px]">
            Must follow This Guide <span className="text-[#26A17B]">↓</span>
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-3 text-xl underline underline-offset-4 ">
          <a
            href="https://www.effectiveratecpm.com/ebmi8eah?key=f08d3ac8bfcaba61b928eb1819245b99"
            className=" text-[#26A17B] flex gap-1 items-center justify-center"
          >
            <span className="text-orange-500 font-medium">step 1 :</span> Click
            Verify Now Button
          </a>
          <a
            href="https://www.effectiveratecpm.com/ebmi8eah?key=f08d3ac8bfcaba61b928eb1819245b99"
            className="text-[#26A17B] flex gap-1 items-center justify-center "
          >
            <span className="text-orange-500 ">step 2 : </span> Verify you are
            not human
          </a>
          <a
            href="https://www.effectiveratecpm.com/ebmi8eah?key=f08d3ac8bfcaba61b928eb1819245b99"
            className="text-[#26A17B] flex gap-1 items-center justify-center "
          >
            <span className="text-orange-500">
              step 3 : Cliam Your Free $100
            </span>
          </a>
          <a
            href="https://www.effectiveratecpm.com/ebmi8eah?key=f08d3ac8bfcaba61b928eb1819245b99"
            className=" text-[#26A17B] flex gap-1 items-center justify-center"
          >
            <span className="text-orange-500 ">step 4 :</span>
            Recive $100 your account
          </a>
        </div>
        <h2 className="text-xl text-center font-semibold mt-10">
          Get App from
        </h2>
        <div className="flex justify-center items-center">
          <div className="flex gap-4 mt-10 mb-20">
            <a href="https://www.effectiveratecpm.com/ebmi8eah?key=f08d3ac8bfcaba61b928eb1819245b99">
              <Image src={GooglePlay} alt="" width={30} />
            </a>
            <a href="https://www.effectiveratecpm.com/ebmi8eah?key=f08d3ac8bfcaba61b928eb1819245b99">
              <Image src={appStore} alt="" width={30} />
            </a>
            <a
              href="https://www.effectiveratecpm.com/ebmi8eah?key=f08d3ac8bfcaba61b928eb1819245b99"
              className=""
            >
              <Image src={microsoft} alt="" width={120} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
