import Link from "next/link";

const BlogPost = (props) => {
  const { data } = props;

  return (
    <div className="grid grid-cols-3 mx-auto mt-8 gap-4">
      {data.map((blog, index) => {
        return (
          <Link href={`blog/${blog.id}`}>
            <Blog
              key={blog.id}
              image={blog.cover_image}
              title={blog.title}
              date={blog.published_at}
              tags={blog.tags}
              index={index}
            />
          </Link>
        );
      })}
      <button className="border border-solid w-[123px] h-12 mx-[560px] rounded-md px-3 py-5 flex justify-center items-center">
        Load More
      </button>
    </div>
  );
};
export default BlogPost;

const Blog = (props) => {
  const { image, title, tags, date, index } = props;
  if (index < 9) {
    return (
      <div
        index={`${index}`}
        className="w-[392px] h-[476px] border border-solid rounded-xl flex flex-col justify-between p-4 max-lg:w-[200px] max-lg:h-[250px]"
      >
        <img
          src={image}
          className="w-[360px] h-[240px] rounded-md"
          alt={title}
        />
        <div>{tags}</div>
        <h3 className="text-2xl font-semibold max-lg:text-sm">{title}</h3>
        <p className="text-base font-normal text-gray-400 max-lg:text-xs">
          {date}
        </p>
      </div>
    );
  }
};
