import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="http://2.bp.blogspot.com/_gfhpICuIp60/TFKna1ASVNI/AAAAAAAAAPg/kVsrSwiZeJ8/s1600/motorbikes-VFR.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Dublin</h1>
          <h2>123 vehicles</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="http://2.bp.blogspot.com/-mTWWa-CDwtw/UdspNt8KYpI/AAAAAAAACSY/5g5wvTBuLEo/s1600/superbikemotorcyclewalljd8.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 vehicles</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="http://www.hdnicewallpapers.com/Walls/Big/Bikes/KTM_RC_200_Sport_Bike_HD_Wallpaper.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Austin</h1>
          <h2>532 vehicles</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
