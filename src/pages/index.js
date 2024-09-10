import useSWR from "swr";
import BlogPost from "../components/BlogPost";
import BlogPostHeader from "../components/BlogPostHeader";
import Header from "@/components/Header";
import Contact from "../components/Contact";
import Trending from "../components/Trending";
import { Carousel } from "../components/Carousel";

const url = "https://dev.to/api/articles";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Home = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  console.log(data);

  if (isLoading) {
    return (
      <p className="flex justify-center items-center text-7xl font-semibold text-blue-700">
        ...Loading
      </p>
    );
  }

  if (error) {
    return (
      <p className="flex justify-center items-center text-7xl font-semibold text-blue-700">
        ...Uh Oh Error
      </p>
    );
  }

  return (
    <>
      <div className="mx-auto max-w-[1280px] w-full">
        <Header />
        <Carousel data={data} />
        <Trending data={data} />
        <BlogPostHeader data={data} />
        <BlogPost data={data} />
      </div>
      <div className="w-full h-[495px] bg-gray-100">
        <Contact />
      </div>
    </>
  );
};
export default Home;
