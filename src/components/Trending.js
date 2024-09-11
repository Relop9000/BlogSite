export default function Trending(props) {
  const { data } = props;
  return (
    <div className="w-full mt-[100px]">
      <h2 className="font-bold text-2xl">Trending</h2>
      <div className="flex justify-between mt-8">
        {data.map((trend, index) => {
          return (
            <TrendingPost
              cover_image={trend.cover_image}
              tags={trend.tags}
              title={trend.title}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
const TrendingPost = (props) => {
  const { cover_image, tags, title, index } = props;
  if (index < 4) {
    return (
      <div className="card bg-base-100 image-full w-[289px] h-[320px] shadow-xl">
        <figure>
          <img src={`${cover_image}`} alt={title} />
        </figure>
        <div className="card-body w-[230px] h-[120px] self-end justify-between mx-auto p-0 m-2">
          <div className="card-actions p-4">
            <p className="text-xs w-[66] h-5 text-white">{tags}</p>
            <p className="text-lg text-white">{title}</p>
          </div>
        </div>
      </div>
    );
  }
};
