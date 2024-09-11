import moment from "moment";
import Link from "next/link";

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
            id={slide.id}
          />
        );
      })}
    </div>
  );
};

const CarouselSlide = (props) => {
  const { cover_image, title, published_at, tags, index, id } = props;
  const formattedDate = moment(published_at).format("LL");

  return (
    <>
      <div
        id={`${index}`}
        className="carousel-item h-[600px] rounded-xl w-full flex items-end justify-between"
        style={{
          backgroundImage: `url(${cover_image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <Link href={`blog/${id}`}>
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
        </Link>
        <div className="m-2 flex gap-2">
          <a href={`#${index - 1}`} className="btn btn-square">
            ❮
          </a>
          <a href={`#${index + 1}`} className="btn btn-square">
            ❯
          </a>
        </div>
      </div>
    </>
  );
};
