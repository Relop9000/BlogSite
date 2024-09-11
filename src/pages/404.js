import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Link from "next/link";

export default function custom404() {
  return (
    <>
      <div className="mx-auto max-w-[1280px] w-full">
        <Header />
        <div className="flex items-center w-[642px] h-[208px] gap-10 mx-auto my-[150px]">
          <p className="text-7xl font-normal">404</p>
          <div className="border-l border-solid border-gray-200 h-[153px]"></div>
          <div className="flex flex-col gap-5">
            <p className="text-2xl font-semibold">Page Not Found</p>
            <p className="text-lg text-[#696A75]">
              We're sorry, This page is unknown or does not exist the page you
              are looking for.
            </p>
            <Link href="/">
              <p className="text-sm text-white font-medium bg-[#4B6BFB] rounded-md w-[130px] h-[40px] flex justify-center items-center">
                Back to home
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[400px] bg-gray-100">
        <Contact />
      </div>
    </>
  );
}
