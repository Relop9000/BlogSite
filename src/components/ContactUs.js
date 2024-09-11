export default function ContactUs() {
  return (
    <div className="w-[895px] h-[895px] mx-auto my-[100px] flex flex-col gap-5 items-center">
      <div className="flex flex-col gap-5">
        <h4 className="text-4xl font-semibold">Contact Us</h4>
        <p className="text-base text-[#696A75] w-[624px] h-[103px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam
        </p>
      </div>
      <div className="flex gap-[50px] py-[10px]">
        <div className="w-[294px] h-[133px] border border-solid border-[#E8E8EA] rounded-xl p-4 gap-[10px]">
          <p className="text-2xl font-semibold">Address</p>
          <p className="text-lg font-normal text-[#696A75]">
            1328 Oak Ridge Drive, Saint Louis, Missouri
          </p>
        </div>
        <div className="w-[294px] h-[133px] border border-solid border-[#E8E8EA] rounded-xl p-4 gap-[10px]">
          <p className="text-2xl font-semibold">Contact</p>
          <p className="text-lg font-normal text-[#696A75]">
            313-332-8662 info@email.com
          </p>
        </div>
      </div>
      <div className="w-[643px] h-[440px] rounded-[10px] bg-[#F6F6F7] flex flex-col gap-5 p-8">
        <h5 className="text-lg font-semibold">Leave a Message</h5>
        <div className="flex gap-[28px]">
          <input
            placeholder="Your Name"
            className="w-[225px] h-[38px] border border-solid border-[#DCDDDF] rounded-[5px]"
          ></input>
          <input
            placeholder="Your Email"
            className="w-[225px] h-[38px] border border-solid border-[#DCDDDF] rounded-[5px]"
          ></input>
        </div>
        <input
          placeholder="Subject"
          className="w-[478px] h-[35px] border border-solid border-[#DCDDDF] rounded-[5px]"
        ></input>
        <input
          placeholder="Write a message"
          className="w-[478px] h-[134px] border border-solid border-[#DCDDDF] rounded-[5px]"
        ></input>
        <div className="w-[130px] h-10 rounded-md py-[10px] px-[16px] text-white text-sm mt-1 bg-[#4B6BFB]">
          Send Message
        </div>
      </div>
    </div>
  );
}
