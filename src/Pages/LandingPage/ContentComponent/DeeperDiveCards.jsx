import React from "react";
import trainingImage from "../../../assets/images/home/deeper-using-online-training.webp";
import costCompareImage from "../../../assets/images/home/deeper-comparing-costs.webp";
import saftyImage from "../../../assets/images/home/deeper-improve-safety.webp";
import catalogImage from "../../../assets/images/home/deeper-explore-catalog.webp";

const cardData = [
  {
    title: "See how fleets are using online training today",
    imgSrc: trainingImage,
    link: "/solutions",
  },
  {
    title: "Compare costs of online vs traditional training",
    imgSrc: costCompareImage,
    link: "/onlinevsofflinetraining",
  },
  {
    title: "Explore our growing course library",
    imgSrc: saftyImage,
    link: "/resources",
  },
  {
    title: "Learn how admins manage training easily",
    imgSrc: catalogImage,
    link: "/solutions",
  },
];

const DeeperDiveCards = () => {
  return (
    <section id="homeDeeperDive" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">
          Take a deeper dive
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-7">
          {cardData.map((card, index) => (
            <div key={index} className="bg-gray-100 rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
              <a href={card.link}>
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-40 object-cover"
                />
              </a>
              <div className="flex flex-col justify-between p-4 flex-grow">
                <p className="text-lg font-semibold text-gray-800 flex-grow">{card.title}</p>
                <a href={card.link} className="text-blue-600 font-medium mt-2 hover:underline">
                  Read more
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
