import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getBannerList } from "../store/quanLyPhim/thunkAction";
import Slider from "react-slick";

const MovieBanner = () => {
  const {bannerList} = useSelector((state)=>state.quanLyPhim)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBannerList())
  }, [dispatch])

  const sliderBanner = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // useEffect(() => {
  //   (async () => {
  //     const res = await quanLyPhimServices.getBannerList();
  //     console.log(res.data.content);
  //     setBannerList(res.data.content);
  //     console.log(bannerList);
  //   })();
  // }, []);

  return (
<Slider {...sliderBanner} className='text-center'>
    {bannerList?.map((movie) => {
      console.log(movie.hinhAnh);
      return (
        <img src={movie.hinhAnh} key={movie.maBanner} className="h-[500px] object-cover img-fluid" alt="banner.jpg"/>
   
      )
    })}
    </Slider>
  );
};

export default MovieBanner;