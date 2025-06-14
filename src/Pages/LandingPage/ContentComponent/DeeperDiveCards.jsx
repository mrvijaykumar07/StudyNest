import React from "react";
import onlinebooks from "../../../assets/images/home/onlinebooks.jpg";
import physicalbooks from "../../../assets/images/home/physicalbooks.jpg";
import saftyImage from "../../../assets/images/home/deeper-improve-safety.webp";
import books from "../../../assets/images/home/books.jpg";


const cardData = [
  {
    title: "Free books avialable ",
    imgSrc:books,
    link: "https://city-central-library-1088202356152.asia-south1.run.app/",
  },
  {
    title: "Buy or Rent Physical books",
    imgSrc:physicalbooks,
    link: "/onlinevsofflinetraining",
  },
  {
    title: "Explore our growing course ",
    imgSrc: saftyImage,
    link: "/resources",
  },
  {
    title: "Buy Online books",
    imgSrc: onlinebooks,
    link: "/solutions",
  },
];

const DeeperDiveCards = () => {
  return (
    <section id="homeDeeperDive" className="py-4 w-full md:px-24">
      <div className="container mx-auto px-4">
        <h2 className="md:text-2xl text-xl font-bold text-center mb-10 text-gray-700">
          Explore Free Books, Courses & Library Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-7">
          {cardData.map((card, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
              <a href={card.link}>
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-40  bg-black"
                />
              </a>
              <div className="flex flex-col justify-between p-4 flex-grow">

                <a href={card.link} className="text-blue-600 font-medium mt-2 hover:underline">
                 <p className=" font-semibold text-gray-800 flex-grow">{card.title}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeeperDiveCards;
