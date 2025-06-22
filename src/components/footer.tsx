export default function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-5 bg-black py-[40px] text-center lg:flex-row lg:justify-between lg:px-10 lg:py-[20px]">
      <div className="flex flex-col items-center justify-center gap-2 lg:items-start">
        <div className="font-montserrat flex items-center gap-3">
          <span className="text-[18px] text-white">
            <i className="fa-solid fa-phone"></i>
          </span>
          <p className="-ml-2 text-white">:</p>
          <p className="text-white text-[14px]">+998 97 206 1020</p>
        </div>
        <div className="font-montserrat flex items-center gap-3">
          <span className="text-[18px] text-white">
            <i className="fa-solid fa-envelope"></i>
          </span>
          <p className="-ml-2 text-white">:</p>
          <p className="text-white text-[14px]">yoqubjonovjasurbek612@gmail.com</p>
        </div>
      </div>
      <p className="text-white text-[16px]">@2025 Yoqubjonov Jasurbek All Rights Reserved.</p>
    </div>
  );
}
