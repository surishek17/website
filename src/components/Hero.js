import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import bannerImage1 from '../assets/banner.jpg';
import bannerImage2 from '../assets/banner2.jpg';
import bannerImage3 from '../assets/banner3.jpg';
import tileImage1 from '../assets/walltiles1.jpg';
import tileImage2 from '../assets/walltiles2.jpg';
import tileImage3 from '../assets/walltiles3.jpg';
import tileImage4 from '../assets/floortiles1.jpg';
import tileImage5 from '../assets/floortiles2.jpg';
import tileImage6 from '../assets/floortiles3.jpg';
import bathroomIcon from '../assets/bathroomicon.png';
import kitchenIcon from '../assets/kitchenicon.png';
import livingRoomIcon from '../assets/livingroomicon.png';
import outdoorIcon from '../assets/exterioricon.png';
import bedroomicon from '../assets/bedroomicon.png';
import commercialicon from '../assets/commercialicon.png';
import launch1 from '../assets/newlaunches1.jpg';
import launch2 from '../assets/newlaunches2.jpg';
import launch3 from '../assets/newlaunches3.jpg';
import launch4 from '../assets/newlaunches4.jpg';
import launch5 from '../assets/newlaunches5.jpg';
import launch6 from '../assets/newlaunches6.jpg';
import polishedImage from '../assets/polished.jpg';
import mattImage from '../assets/matt.jpg';
import metallicImage from '../assets/mettalic.jpg';
import carvingImage from '../assets/carving.jpg';
import glossImage from '../assets/Gloss.jpg';
import marbletechImage from '../assets/marbletech.jpg';
import rotomattImage from '../assets/rotomatt.jpg';
import superwhiteImage from '../assets/superwhite.jpg';
import plantImage from '../assets/kajaria-plant-img.jpg';

// Custom next arrow component
const NextArrow = (props) => {
  const {  onClick } = props;
  return (
    <div
    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full z-50 cursor-pointer"
    onClick={onClick}
    style={{ fontSize: '24px', display: 'block' }}
  >
      &rarr;
    </div>
  );
};

// Custom previous arrow component
const PrevArrow = (props) => {
  const {  onClick } = props;
  return (
    <div
    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full z-50 cursor-pointer"
    onClick={onClick}
    style={{ fontSize: '24px', display: 'block' }}
  >
      &larr;
    </div>
  );
};

const Hero = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [currentGridIndex, setCurrentGridIndex] = useState(0);
  // State to keep track of the selected tab
  const [selectedTab, setSelectedTab] = useState('Polished');


   // Content for each finish type
   const finishes = {
    Polished: {
      description: 'A spectacular mirror-like effect is what you get in this superior finish. The highly polished look is achieved with a thicker coat of glaze, enhancing image sharpness and giving you a rich and true color experience.',
      image: polishedImage, 
    },
    Matt: {
      description: 'Matt finishes offer a softer, more subtle aesthetic with a smooth texture that reduces glare.',
      image: mattImage, 
    },
    Metallic: {
      description: 'Metallic finishes bring a unique shine and sparkle, ideal for modern, luxurious spaces.',
      image: metallicImage, 
    },
    Marbletech: {
      description: 'Marbletech finishes mimic the appearance of real marble with intricate veining and a natural sheen.',
      image: marbletechImage, 
    },
    GlossMatt: {
      description: 'A balanced combination of gloss and matt finishes, providing a unique texture and visual interest.',
      image: glossImage, 
    },
    Carving: {
      description: 'Carving finishes add depth and dimension to surfaces with intricate, engraved patterns.',
      image: carvingImage, 
    },
    Superwhite: {
      description: 'Superwhite finishes are pristine and bright, offering a clean and modern look for any space.',
      image: superwhiteImage, 
    },
    Rotomatt: {
      description: 'Rotomatt finishes are a sophisticated, matte finish with enhanced durability and elegance.',
      image: rotomattImage, 
    },
  };

  // Banner carousel images
  const bannerImages = [bannerImage1, bannerImage2, bannerImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [bannerImages.length]);

  // Tile images for the left-side slider
  const tileImages = [tileImage1, tileImage2, tileImage3];

  // Tile images for the left-side slider
  const tileImage = [tileImage4, tileImage5, tileImage6];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,  // Show 3 images at a time
    slidesToScroll: 3,
    nextArrow: <NextArrow />,  // Use custom next arrow
    prevArrow: <PrevArrow />,  // Use custom prev arrow
  };
  // Tile grid data for wall tiles section
  const gridSlides = [
    [
      { icon: bathroomIcon, title: 'Bathroom Wall Tiles', link: '#' },
      { icon: kitchenIcon, title: 'Kitchen Wall Tiles', link: '#' },
      { icon: livingRoomIcon, title: 'Living Room Wall Tiles', link: '#' },
      { icon: outdoorIcon, title: 'Outdoor Wall Tiles', link: '#' },
    ],
    [
      { icon: bedroomicon, title: 'Bedroom Wall Tiles', link: '#' },
      { icon: commercialicon, title: 'Balcony Wall Tiles', link: '#' },
      { icon: null, title: '', link: '' },
      { icon: null, title: '', link: '' },
    ],
  ];

  // Tile grid data for floor tiles section
  const gridSlide = [
    [
      { icon: livingRoomIcon, title: 'Living Room Floor Tiles', link: '#' },
      { icon: bedroomicon, title: 'Bedroom Floor Tiles', link: '#' },
      { icon: commercialicon, title: 'Commercial Spaces', link: '#' },
      { icon: outdoorIcon, title: 'Outdoor Floor Tiles', link: '#' },
    ],
    [
      { icon: kitchenIcon, title: 'Kitchen Floor Tiles', link: '#' },
      { icon: bathroomIcon, title: 'Bathroom Floor Tiles', link: '#' },
      { icon: null, title: '', link: '' },
      { icon: null, title: '', link: '' },
    ],
  ];

  // Navigation functions for the banner carousel
  const goToNextBanner = () => {
    setCurrentBannerIndex((currentBannerIndex + 1) % bannerImages.length);
  };

  const goToPrevBanner = () => {
    setCurrentBannerIndex((currentBannerIndex - 1 + bannerImages.length) % bannerImages.length);
  };

  // Navigation functions for wall tiles grid
  const goToNextGrid = () => {
    setCurrentGridIndex((currentGridIndex + 1) % gridSlides.length);
  };

  const goToPrevGrid = () => {
    setCurrentGridIndex((currentGridIndex - 1 + gridSlides.length) % gridSlides.length);
  };

  return (
    <div>

      {/* Hero Section: Banner Carousel */}
      <section className="pt-16 relative w-full">
        <div className="relative w-full overflow-hidden pt-16 h-screen">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBannerIndex === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={image} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
          <button onClick={goToPrevBanner} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
            &#10094;
          </button>
          <button onClick={goToNextBanner} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full">
            &#10095;
          </button>
        </div>
      </section>

      {/* Wall Tiles Section */}
      <section className="bg-gray-100 py-16 px-8 mb-6">
        <div className="flex flex-col md:flex-row">
          {/* Left Side: Wall Tiles Information and Image Slider */}
          <div className="w-full md:w-1/2 relative">
            <h3 className="text-gray-600 text-sm uppercase mb-2 text-xl">Soni Brings To You Premium Tiles</h3>
            <h2 className="text-3xl font-semibold mb-4 text-2xl">Explore Our Wall Tiles</h2>
            <p className="text-gray-400 mb-6 text-xl">
              Soni brings to you premium wall tiles that are detailed with perfection. Each tile is made using state of the art technology making them strong, durable, & easy to maintain.
            </p>

            {/* Left Side: Image Slider */}
            <div className="relative w-full h-72 md:h-96 overflow-hidden">
              {tileImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBannerIndex === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img src={image} alt={`Tile ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <button className="bg-green-600 text-white mt-6 px-6 py-3 rounded hover:bg-green-700 text-xl">Explore All</button>
          </div>

          {/* Right Side: Grid Tile Slider */}
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0 md:pl-12">
            <div className="grid grid-cols-2 h-full">
              {gridSlides[currentGridIndex].map((tile, index) => (
                <div key={index} className="border p-4 flex flex-col items-center ${!tile.icon ? 'opacity-0' : ''}">
                  {tile.icon && (
                    <>

                      <img src={tile.icon} alt={tile.title} className="w-12 h-12 mb-4" />
                      <h3 className="text-xl font-semibold">{tile.title}</h3>
                      <a href={tile.link} className="text-green-600 hover:underline mt-2 text-xl">Explore Now</a>
                    </>
                  )}
                </div>
              ))}
            </div>
            <button onClick={goToPrevGrid} className="absolute left-2 top-1/2 bg-gray-700 text-white p-2 rounded-full z-10">&#10094;</button>
            <button onClick={goToNextGrid} className="absolute right-2 top-1/2 bg-gray-700 text-white p-2 rounded-full z-10">&#10095;</button>
          </div>
        </div>
      </section>

      {/* Floor Tiles Section */}
      <section className="bg-white py-16 px-8">
        <div className="flex flex-col md:flex-row">

          {/* Left Side: Grid Tile Slider */}
          <div className="w-full md:w-1/2 relative mt-8 md:mt-0 md:pl-12 mr-20 bg-gray-100">
            <div className="grid grid-cols-2 h-full">
              {gridSlide[currentGridIndex].map((tile, index) => (
                <div key={index} className="border p-4 flex flex-col items-center ${!tile.icon ? 'opacity-0' : ''}`}">
                  {tile.icon && (
                    <>

                      <img src={tile.icon} alt={tile.title} className="w-12 h-12 mb-4" />
                      <h3 className="text-xl font-semibold">{tile.title}</h3>
                      <a href={tile.link} className="text-green-600 hover:underline mt-2 text-xl">Explore Now</a>
                    </>
                  )}
                </div>
              ))}
            </div>
            <button onClick={goToPrevGrid} className="absolute left-2 top-1/2 bg-gray-700 text-white p-2 rounded-full z-10">&#10094;</button>
            <button onClick={goToNextGrid} className="absolute right-2 top-1/2 bg-gray-700 text-white p-2 rounded-full z-10">&#10095;</button>
          </div>

          {/* Right Side: Floor Tiles Information and Image Slider */}
          <div className="w-full md:w-1/2 relative">
            <h3 className="text-gray-600 text-sm uppercase mb-2 text-xl">Soni Brings To You Premium Tiles</h3>
            <h2 className="text-3xl font-semibold mb-4 text-2xl">Explore Our Floor Tiles</h2>
            <p className="text-gray-400 mb-6 text-xl">
              Soni brings to you premium wall tiles that are detailed with perfection. Each tile is made using state of the art technology making them strong, durable, & easy to maintain.
            </p>

            {/* Left Side: Image Slider */}
            <div className="relative w-full h-72 md:h-96 overflow-hidden">
              {tileImage.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentBannerIndex === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img src={image} alt={`Tile ${index + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            <button className="bg-green-600 text-white mt-6 px-6 py-3 rounded hover:bg-green-700 text-xl mt-8">Explore All</button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 mt-12">
      <div className="container mx-auto px-4 ">
        <h2 className="text-xl text-green-600 font-medium">
          Our Mesmerizing Range of Designer Tiles
        </h2>
        <h2 className="text-4xl font-normal mb-8 mt-2">Trending Products</h2>

        {/* Carousel */}
        <Slider {...settings}>
          <div className="relative">
            <img
              src={launch1}
              alt="Trending Product 1"
              className="w-full h-auto object-cover"
            />
            <div className="text-left mt-4">
              <h3 className="text-xl font-bold">The Ultima - 120x240cm</h3>
              <p className="text-gray-400 text-lg">
              The Ultima, an extra-large Vitrified Slabs by Soni, is bigger than your dreams. While their large size exuberates the grandeur of real marble, their stunning looks charm connoisseurs across the globe.
              </p>
              <a href="#" className="text-green-600 mt-2 inline-block text-lg">Explore Now</a>
            </div>
          </div>
          <div className="relative">
            <img
              src={launch2}
              alt="Trending Product 2"
              className="w-full h-auto object-cover"
            />
            <div className="text-left mt-4">
              <h3 className="text-xl font-bold">DuRock - 40x40 cm</h3>
              <p className="text-gray-400 text-lg">
              Soni DuRock - Outdoor Ceramic Floor Tiles can be safely used in all internal and external spaces that are exposed to high load and pedestrian traffic.
              </p>
              <a href="#" className="text-green-600 mt-2 inline-block text-lg">Explore Now</a>
            </div>
          </div>
          <div className="relative">
            <img
              src={launch3}
              alt="Trending Product 3"
              className="w-full h-auto object-cover"
            />
            <div className="text-left mt-4">
              <h3 className="text-xl font-bold">Step Stone</h3>
              <p className="text-gray-400 text-lg">
              Ready to Install Vitrified Steps: Stairs and staircases are not defined by their functionality alone. These practical units are also interesting from a design perspective.
              </p>
              <a href="#" className="text-green-600 mt-2 inline-block text-lg">Explore Now</a>
            </div>
          </div>
          <div className="relative">
            <img
              src={launch4}
              alt="Trending Product 4"
              className="w-full h-auto object-cover"
            />
             <div className="text-left mt-4">
              <h3 className="text-xl font-bold">The Ultima - 4DX</h3>
              <p className="text-gray-400 text-lg">
                The 4DX Series by Soni Eternity is not just a product line; it's a statement of progressive thinking and exceptional design.
              </p>
              <a href="#" className="text-green-600 mt-2 inline-block text-lg">Explore Now</a>
            </div>
          </div>
          <div className="relative">
            <img
              src={launch5}
              alt="Trending Product 5"
              className="w-full h-auto object-cover"
            />
             <div className="text-left mt-4">
              <h3 className="text-xl font-bold">Gres Tough</h3>
              <p className="text-gray-400 text-lg">
                The Gres Tough Tiles Collection reproduces the extraordinarily elegant details and natural irregularities of Italian Marble, rich in veining, streaks, marbling and knots.
              </p>
              <a href="#" className="text-green-600 mt-2 inline-block text-lg">Explore Now</a>
            </div>
          </div>
          <div className="relative">
            <img
              src={launch6}
              alt="Trending Product 6"
              className="w-full h-auto object-cover"
            />
             <div className="text-left mt-4">
              <h3 className="text-xl font-bold">Vitronite</h3>
              <p className="text-gray-400 text-lg">
                New Age Modern Counter Tops: The incredible range of slabs are designed for modern application and to create a chic and urban aura for a space.
              </p>
              <a href="#" className="text-green-600 mt-2 inline-block text-lg">Explore Now</a>
            </div>
          </div>

          
        </Slider>

           
      </div>
    </section>

    <section className="py-12 relative">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-4xl font-medium mb-14">Know About Finishes</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side (Tabs) with Clear Partition */}
          <div className="grid grid-cols-2 gap-4">
            {/* First Column */}
            <div className="space-y-14 border-r-2 border-gray-300 pr-6 text-xl">
              {['Polished', 'GlossMatt', 'Carving', 'Superwhite'].map((finish) => (
                <button
                  key={finish}
                  className={`pb-2 w-full text-left ${
                    selectedTab === finish
                      ? 'text-green-600 font-bold border-b-2 border-green-600'
                      : ''
                  }`}
                  onClick={() => setSelectedTab(finish)}
                >
                  {finish}
                </button>
              ))}
            </div>

            {/* Second Column */}
            <div className="space-y-14 pl-6 text-xl">
              {['Matt', 'Metallic', 'Marbletech', 'Rotomatt'].map((finish) => (
                <button
                  key={finish}
                  className={`pb-2 w-full text-left ${
                    selectedTab === finish
                      ? 'text-green-600 font-bold border-b-2 border-green-600'
                      : ''
                  }`}
                  onClick={() => setSelectedTab(finish)}
                >
                  {finish}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side (Image) */}
          <div>
            <img
              src={finishes[selectedTab].image}
              alt={selectedTab}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Tab Description */}
        <div className="mt-6">
          <p className="text-gray-700 text-xl">{finishes[selectedTab].description}</p>
        </div>
      </div>
    </section>


    <section className="relative h-96 flex items-center justify-center text-center text-white">
        {/* Background Map Image */}
        <div
          className="absolute inset-0 bg-cover bg-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1195.7364997141424!2d77.22907252751423!3d28.647832973609415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd2ef8cd7303%3A0xc67465c390caa361!2sLal%20darwaja%2C%20Sita%20Ram%20bazar!5e0!3m2!1sen!2sin!4v1729593702204!5m2!1sen!2sin" width="1680" height="380" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        
        {/* Overlay with Content */}
        <div className="relative z-10 bg-gray bg-opacity-50 py-12 px-4">
          <p className="text-base uppercase tracking-wide">We work with thousands of retailers across India</p>
          <h2 className="text-5xl font-bold my-4">Where to Buy</h2>
          <button className="bg-green-600 text-white px-12 py-3 rounded-lg text-xl font-semibold">
            Find a Dealer
          </button>
        </div>

        {/* Ensure background overlay covers the entire section */}
        <div className="absolute inset-0 bg-black opacity-40" />
      </section>


       {/* About Section */}
       <section className="flex flex-col md:flex-row items-center justify-center md:justify-between py-12 px-6 md:px-24 bg-gray-100 mt-6">
        {/* Image on the left */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img
            src={plantImage}  
            alt="Manufacturing Plant "
            className="w-full h-auto"
          />
        </div>
        {/* Content on the right */}
        <div className="md:w-1/2 text-left md:pl-12">
          <h2 className="text-4xl font-normal mb-4">About Soni</h2>
          <p className="text-lg mb-4">
            Soni, the largest manufacturer of ceramic and vitrified tiles in India. It has an annual aggregate capacity of 93.10 mn. sq. meters, distributed across nine plants – Sikandrabad in Uttar Pradesh, Gailpur & Malootana in Rajasthan, Srikalahasti in Andhra Pradesh, Balanagar in Telangana, three plants in Gujarat and one plant in Nepal. Equipped with cutting-edge technology, we strive to deliver quality products and services to our customers. Our team of experts works around the clock to ensure that the quality of our product is never compromised.
          </p>
          <p className="text-lg mb-6">
            In order to cater to the specific needs of our customers, we produce various categories of tiles, including kitchen tiles, bathroom tiles, wall tiles, floor tiles, and exterior wall tiles. We aim at producing tiles that complement the distinctive style of our customers and cater to the vast needs of the Indian audience. All of our tiles are crafted with intense care using state-of-the-art technology to ensure that we live up to the expectations of our buyers. The choicest of materials are used to produce our magnificent range of products.
          </p>
          <button className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300">
            Know More
          </button>
        </div>
      </section>


      <section className="bg-black text-white py-16 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left side: Heading section */}
          <div className="mb-8 lg:mb-0 text-left">
            <h3 className="text-medium tracking-widest text-gray-400 mb-2 uppercase">Explore our wide range of catalogue</h3>
            <h2 className="text-4xl font-normal mb-4">Download Catalogue</h2>
          </div>

          {/* Right side: Text and button */}
          <div className="text-left">
            <p className="text-gray-300 mb-8 text-2xl">If you'd like to view our latest product catalogue you can download it here. </p>
            <a
              href="/path-to-catalogue.pdf" 
              className="bg-white text-black text-xl font-medium py-3 px-8 rounded hover:bg-green-600 inline-block"
            >
              Download Catalogue
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 text-gray-800 py-16 pl-0">
        <div className="w-full ">
          <h2 className="text-4xl font-normal mb-4 ml-6">Designer Wall Tiles India for Bathroom & Kitchen</h2>
          <p className="text-gray-500 mb-6 ml-6 text-xl">
            Our mesmerizing range of designer bathroom & kitchen floor and wall tiles have a luxurious appeal and seem to have been
            struck with afflatus. The premier collection is a showstopper and has the ability to make any dimension look grand. Every 
            single piece of tile from our range of designer bathroom & kitchen floor and wall tiles has a compelling aura. The matt finish 
            tiles for kitchen from our collection fit perfectly with modern day designs while our rustic kitchen wall tiles blend easily 
            with every surrounding.
          </p>
          <a href="#" className="text-green-600 hover:underline ml-6 text-xl">Read more</a>
        </div>
      </section>
    </div>
  );
};

export default Hero;
