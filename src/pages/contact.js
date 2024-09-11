import Header from "@/components/Header";
import Contact from "@/components/Contact";
import ContactUs from "@/components/ContactUs";

const ContactPage = () => {
  return (
    <>
      <div className="max-w-[1280px] mx-auto">
        <Header />
        <ContactUs />
      </div>
      <div className="w-full h-[400px] bg-gray-100">
        <Contact />
      </div>
    </>
  );
};
export default ContactPage;
