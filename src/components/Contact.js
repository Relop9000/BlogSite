import Instagram from "./icons/Instagram";
import FaceBook from "./icons/FaceBook";
import LinkedIn from "./icons/LinkedIn";
import Twitter from "./icons/Twitter";
import BlogLogo from "./icons/BlogLogo";
import Link from "next/link";

export default function Contact() {
  return (
    <div className=" flex flex-col p-4 mt-[100px] max-w-[1280px] mx-auto">
      <div className="flex justify-between mx-0 my-8">
        <div className="w-[289px] h-[236px] font-normal text-base">
          <h3 className="font-semibold text-lg">About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <p>Email : info@jstemplate.net</p>
          <p>Phone : 880 123 456 789</p>
        </div>
        <div className="gap-3">
          <Link href="/">
            <p>Home</p>
          </Link>
          <Link href="/blogPage">
            <p>Blog</p>
          </Link>
          <Link href="/contact">
            <p>Contact</p>
          </Link>
        </div>
        <div className="flex justify-between w-[144px] mr-[190px]">
          <FaceBook />
          <Twitter />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
      <div className=" flex justify-between border-t border-solid border-gray-200 ">
        <div className="flex">
          <BlogLogo />
          <div>
            <p>MetaBlog</p>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex gap-2">
          <p>Terms of Use</p>
          <span>|</span>
          <p>Privacy Policy</p>
          <span>|</span>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
}
