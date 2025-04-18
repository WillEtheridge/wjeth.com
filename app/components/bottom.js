// External Imports
import Image from "next/image";

const Bottom = () => {
  return (
    <div className="w-full bg-cBg2 py-2 fixed bottom-0 left-0 z-50 flex justify-center ">
      <div className="w-full max-w-full lg:max-w-7xl lg:w-7xl px-4 lg:px-0 flex flex-row items-center justify-between">
        <p className="text-smallBody text-cWhite">© William Etheridge 2025</p>
        <div className="flex space-x-4">
          <Image
            src="/neo.png"
            width={30}
            height={30}
            alt="Enter the Matrix"
            className="hover:scale-120 transition"
          />
          <Image
            src="/blobby.webp"
            width={30}
            height={30}
            alt="Mr Blobby Mode"
            className="hover:scale-120 transition"
          />
          <Image
            src="/bat.png"
            width={30}
            height={30}
            alt="Mr Blobby Mode"
            className="hover:scale-120 transition"
          />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
