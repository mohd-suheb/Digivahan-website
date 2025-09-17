import React from 'react';
import frame1 from "../assets/Frame 7.png";
import frame2 from "../assets/Frame 8.png";
import frame3 from "../assets/Frame 9.png";

const News = () => {
  const newsData = [
    {
      img: frame1,
      title: [
        "London to Istanbul by train: This",
        "10-day rail adventure is a slow",
        "traveller’s dream"
      ],
      author: "Ginny Dennis",
      date: "Feb 4 2023",
      content: [
        "Romantic cross-European train journeys have long been associated with the Orient Express. But you no longer need to fork out thousands to make this fabled journey.",
        "From Byway to Tailor Made Rail, companies are cropping up to meet renewed demand for long distance train travel.",
        "An epic trip with the latter takes you all the way..."
      ]
    },
    {
      img: frame2,
      title: [
        "More Airports to Use Greener",
        "‘Glide’ Approach to Landing"
      ],
      author: "Ginny Dennis",
      date: "Feb 4 2023",
      content: [
        "Eleven more U.S. airports plan to adopt a new way of landing planes that reduces both emissions and noise — all by having incoming planes turn off their engines and glide down to the tarmac like a paraglider.",
        "The Federal Aviation Administration announced Monday that planes heading to Orlando, Fla.; Kansas City, Mo.; Omaha, Neb.; Nebraska's Offutt Air Force Base; Reno, Nev.; and six airports in South Florida soon would make idle descents to..."
      ]
    },
    {
      img: frame3,
      title: [
        "London to Istanbul by train: This",
        "10-day rail adventure is a slow",
        "traveller’s dream"
      ],
      author: "Ginny Dennis",
      date: "Feb 4 2023",
      content: [
        "Total Federal Aviation Administration the train by 2.5 liter that planes heading per percent to Orlando, in the City, Mo.; Omaha, Neb.; planes Nebraska's vast geographical Base; Reno, planes heading Nev. Russia and Florida soon would make moldava.",
        "But people Aviation Administration continue western drink planes heading per percent to drink the City, Mo.; Omaha, Neb.; planes Nebraska's vast consumption nine omla in the European..."
      ]
    }
  ];

  return (
    <div className="bg-white py-6 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-8 justify-center">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col w-full md:w-[32%] bg-gray-50 rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.img}
              alt={`News ${index + 1}`}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 flex flex-col gap-2">
              <div className="text-xl font-bold text-black">
                {item.title.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                <p>By {item.author}</p>
                <p>{item.date}</p>
              </div>
              <div className="border-t border-gray-300 my-2"></div>
              {item.content.map((para, idx) => (
                <p key={idx} className="text-green-800 text-sm leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
