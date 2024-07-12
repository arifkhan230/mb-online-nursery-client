import Container from "@/components/Shared/Container";
import { categories } from "./utils";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination } from "swiper/modules";

const Category = () => {
  return (
    <div className="py-12 px-4">
      <Container>
        <h2 className="text-3xl font-heading font-semibold text-center mt-10 mb-16">
          Plant Categories
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {categories?.map((category) => (
            <SwiperSlide key={category?.title}>
              {" "}
              <div className="mb-8">
                <img
                  className="h-64 w-full object-cover"
                  src={category?.image}
                  alt=""
                />
                <h3 className="text-lg font-title font-semibold text-center">
                  {category?.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </div>
  );
};

export default Category;
