import { useRouter } from "next/router";
import useSWR from "swr";
import parse from "html-react-parser";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Page() {
  const router = useRouter();

  const { id } = router.query;
  const url = `https://dev.to/api/articles/${id}`;

  const { data: blogDetail = {}, isLoading, error } = useSWR(url, fetcher);
  console.log(blogDetail);
  if (isLoading) return <div>...Loading</div>;
  if (error) return <div>...Error</div>;

  const body_html = blogDetail?.body_html;
  const bodyMarkdown = blogDetail.body_markdown;

  return (
    <>
      <div className="max-w-[1280px] mx-auto">
        <Header />
        <div className="mx-auto max-w-[1024px] my-[80px]">
          <div className="text-2xl">{blogDetail.title}</div>
          <div>{parse(body_html)}</div>
          <div class="prose">
            <Markdown rehypePlugins={[rehypeHighlight]}>
              {bodyMarkdown}
            </Markdown>
          </div>
        </div>
      </div>
      <div className="w-full h-[495px] bg-gray-100">
        <Contact />
      </div>
    </>
  );
}
