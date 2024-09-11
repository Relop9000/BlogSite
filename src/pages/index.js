import useSWR from "swr";
import BlogPost from "../components/BlogPost";
import BlogPostHeader from "../components/BlogPostHeader";
import Header from "@/components/Header";
import Contact from "../components/Contact";
import Trending from "../components/Trending";
import { Carousel } from "../components/Carousel";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext";

const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  console.log(data);

  if (isLoading) {
    return (
      <p className=" w-[450px] text-7xl font-semibold text-blue-700 mx-auto mt-[450px]">
        ...Loading
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-7xl font-semibold text-blue-700 mx-auto mt-[450px]">
        ...Uh Oh Error
      </p>
    );
  }

  const light = useContext(ThemeContext);
  console.log(light);
  return (
    <>
      <div className="mx-auto max-w-[1280px] w-full">
        <Header />
        <Carousel data={data} />
        <Trending data={data} />
        <BlogPostHeader data={data} />
        <BlogPost data={data} />
      </div>
      <div className="w-full h-[400px] bg-gray-100">
        <Contact />
      </div>
    </>
  );
};
export default Home;
