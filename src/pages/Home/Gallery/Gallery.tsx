const Gallery = () => {
  return (
    <div className="px-4">
      <h2 className="text-3xl font-heading font-semibold text-center mt-10 mb-16">
        Gallery
      </h2>
      <div className="md:max-h-[1200px] max-h-[800px] grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* column-1 */}
        <div className="grid grid-rows-11 gap-4 md:max-h-[1200px] max-h-[800px]">
          <div className="row-span-4">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://www.thespruce.com/thmb/ZjrzPu2EvIi-6yzol0rcUPKx0Bg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/growing-pilea-peperomioides-5090425-5-64b7b494b8044485bf13cd2978614b14.jpg"
              alt=""
            />
          </div>
          <div className="row-span-5 ">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://www.epicgardening.com/wp-content/uploads/2023/09/Dendrobium-orchid-on-window-sill.jpeg"
              alt=""
            />
          </div>
          <div className="row-span-2">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://bloomifique.com/wp-content/uploads/2018/08/anthurium-niet-bloeit-tips-plant-planten-blomen-verzorging-verzorgingstips-e1533910708618.jpg"
              alt=""
            />
          </div>
        </div>
        {/* column-2 */}
        <div className="grid grid-rows-11 gap-4 md:max-h-[1200px] max-h-[800px]">
          <div className="row-span-5">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://www.almanac.com/sites/default/files/users/The%20Editors/aloe-vera-white-pot_sunwand24-ss_rsz_full_width.jpg"
              alt=""
            />
          </div>
          <div className="row-span-2">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://www.mydomaine.com/thmb/N3StDx3PyGbF0Pwafv-P9-qiNZU=/900x0/filters:no_upscale():strip_icc()/1566417254329_20190821-1566417255317-b9314f1d9f7a4668a466c5ffb1913a8f.jpg"
              alt=""
            />
          </div>
          <div className="row-span-4">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://nurserylive.com/cdn/shop/products/nurserylive-g-plants-rose-dark-pink-plant-in-grower-round-black-pot-922015_600x600.jpg?v=1679751054"
              alt=""
            />
          </div>
        </div>
        {/* column-3 */}
        <div className="grid grid-rows-11 gap-4 md:max-h-[1200px] max-h-[800px]">
          <div className="row-span-4">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://www.thespruce.com/thmb/ZjrzPu2EvIi-6yzol0rcUPKx0Bg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/growing-pilea-peperomioides-5090425-5-64b7b494b8044485bf13cd2978614b14.jpg"
              alt=""
            />
          </div>
          <div className="row-span-5">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://www.epicgardening.com/wp-content/uploads/2023/09/Dendrobium-orchid-on-window-sill.jpeg"
              alt=""
            />
          </div>
          <div className="row-span-2">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://bloomifique.com/wp-content/uploads/2018/08/anthurium-niet-bloeit-tips-plant-planten-blomen-verzorging-verzorgingstips-e1533910708618.jpg"
              alt=""
            />
          </div>
        </div>
        {/* column-4 */}
        <div className="grid grid-rows-11 gap-4 md:max-h-[1200px] max-h-[800px]">
          <div className="row-span-5">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://www.almanac.com/sites/default/files/users/The%20Editors/aloe-vera-white-pot_sunwand24-ss_rsz_full_width.jpg"
              alt=""
            />
          </div>
          <div className="row-span-6">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://www.mydomaine.com/thmb/N3StDx3PyGbF0Pwafv-P9-qiNZU=/900x0/filters:no_upscale():strip_icc()/1566417254329_20190821-1566417255317-b9314f1d9f7a4668a466c5ffb1913a8f.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
