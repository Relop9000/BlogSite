const BlogPostHeader = (props) => {
  const { data } = props;
  return (
    <div className="flex flex-col gap-8 mt-[100px]">
      <div>
        <h2 className="font-bold text-2xl">All Blog Post</h2>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button>All</button>
          {data.map((category, index) => {
            return (
              <Items key={category.id} tags={category.tags} index={index} />
            );
          })}
        </div>
        <div>View All</div>
      </div>
    </div>
  );
};
export default BlogPostHeader;
const Items = (props) => {
  const { tags, index } = props;
  if (index < 5) {
    return <button>{tags}</button>;
  }
};
