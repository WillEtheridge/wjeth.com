// External Imports
import Image from "next/image";

const BottomImage = ({ src, alt }) => {
  return (
    <Image
      src={src}
      width={30}
      height={30}
      alt={alt}
      className="hover:scale-120 transition"
    />
  );
};

const Bottom = () => {
  return (
    <div className="w-full bg-cBg2 py-2 fixed bottom-0 left-0 z-50 flex justify-center ">
      <div className="w-full max-w-full lg:max-w-7xl lg:w-7xl px-4 lg:px-0 flex flex-row items-center justify-between">
        <p className="text-smallBody text-cWhite">© William Etheridge 2025</p>
        <div className="flex space-x-4">
          {/*
<BottomImage src="/neo.png" alt="Enter the Matrix" />
          <BottomImage src="/blobby.webp" alt="Mr Blobby Mode" />
          <BottomImage src="/bat.png" alt="Play Pong" />


          */}
        </div>
      </div>
    </div>
  );
};

export default Bottom;
