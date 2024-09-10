import moment from "moment";

export const Carousel = (props) => {
  const { data } = props;
  return (
    <div className="carousel w-full mt-[100px]">
      {data.map((slide, index) => {
        return (
          <CarouselSlide
            key={index}
            cover_image={slide.cover_image}
            title={slide.title}
            tags={slide.tags}
            published_at={slide.published_at}
            index={index}
          />
        );
      })}
    </div>
  );
};

const CarouselSlide = (props) => {
  const { cover_image, title, published_at, tags, index } = props;
  const formattedDate = moment(published_at).format("LL");

  return (
    <div
      id={`${index}`}
      className="carousel-item h-[600px] rounded-xl w-full flex items-end justify-between"
      style={{
        backgroundImage: `url(${cover_image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="p-10 bg-white h-[252px] rounded-xl m-2 w-[598px] flex flex-col justify-between">
        <div className="p-2 bg-blue-700 w-fit rounded-xl">
          <p className="text-white">{tags}</p>
        </div>
        <div>
          <h1>{title}</h1>
        </div>
        <div>
          <p>{formattedDate}</p>
        </div>
      </div>
      <div className="m-2 flex gap-2">
        <a href={`#${index - 1}`} className="btn btn-square">
          ❮
        </a>
        <a href={`#${index + 1}`} className="btn btn-square">
          ❯
        </a>
      </div>
    </div>
  );
};
