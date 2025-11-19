// import { useState, useEffect } from "react";

// const News = () => {
//   const [newsData, setNewsData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await fetch("api/news");
//         const data = await res.json();

//         let articles = [];
//         if (Array.isArray(data)){
//             articles = data;
//         }
           
//         else if (data?.articles){
//                articles = data.articles;
//         }
          

//         // Sort latest news top
//         articles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

//         setNewsData(articles);
//       } catch (error) {
//         console.error("Fetching error:", error);
//         setNewsData([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   if (loading)
//     return (
//       <div className="text-xl text-center text-blue-300 mt-10">
//         Loading news...
//       </div>
//     );

//   if (!newsData.length)
//     return (
//       <div className="text-center text-gray-500 mt-10">No news available.</div>
//     );


//   const firstTwo = newsData.slice(0, 2);
//   const restNews = newsData.slice(2);

//   return (
//     <div className="bg-white py-6 px-4 md:px-8">
//       <div className="max-w-7xl mx-auto flex flex-col gap-8">

//         {/* First row: 2 big cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
//           {firstTwo.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col bg-gray-50 rounded-lg shadow-md overflow-hidden"
//             >
//               <img
//                 src={item.urlToImage || "https://via.placeholder.com/700x400?text=No+Image"}
//                 alt={item.title || "News image"}
//                 className="w-full h-80 object-cover"
//               />
//               <div className="p-4 flex flex-col gap-2">
//                 <div className="text-2xl font-bold text-black">{item.title || "No title"}</div>
//                 <div className="flex justify-between text-gray-500 text-sm">
//                   <p>By {item.author || "Unknown"}</p>
//                   <p>
//                     {item.publishedAt  ? new Date(item.publishedAt).toLocaleDateString()  : "Unknown date"}
                     
                     
//                   </p>
//                 </div>
//                 <div className="border-t border-gray-300 my-2"></div>
//                 <p className="text-green-800 text-sm leading-relaxed">
//                   {item.description || item.content || "No description available."}
//                 </p>
//                 {item.url && (
//                   <a
//                     href={item.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline mt-2"
//                   >
//                     Read more
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Next rows: 3 smaller cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
//           {restNews.map((item, index) => (
//             <div
//               key={index}
//               className="flex flex-col bg-gray-50 rounded-lg shadow-md overflow-hidden"
//             >
//               <img
//                 src={item.urlToImage || "https://via.placeholder.com/400x250?text=No+Image"}
//                 alt={item.title || "News image"}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-4 flex flex-col gap-2">
//                 <div className="text-xl font-bold text-black">{item.title || "No title"}</div>
//                 <div className="flex justify-between text-gray-500 text-sm">
//                   <p>By {item.author || "Unknown"}</p>
//                   <p>
//                     {item.publishedAt
//                       ? new Date(item.publishedAt).toLocaleDateString()
//                       : "Unknown date"}
//                   </p>
//                 </div>
//                 <div className="border-t border-gray-300 my-2"></div>
//                 <p className="text-green-800 text-sm leading-relaxed">
//                   {item.description || item.content || "No description available."}
//                 </p>
//                 {item.url && (
//                   <a
//                     href={item.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-600 hover:underline mt-2"
//                   >
//                     Read more
//                   </a>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default News;

import React from "react";
// import imggreen from "../assets/WhatsApp Image 2025-10-27 at 18.24.06.jpeg";

const News = () => {
  return (
    // <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 py-8">
    //   <img
    //     src={imggreen}
    //     alt="Green Image"
    //     className="w-full max-w-[650px] h-auto sm:h-64 md:h-72 lg:h-80 object-cover rounded-2xl shadow-xl mb-8"
    //   />
    //   <div className="border-b-4 border-green-500 w-3/4 sm:w-2/3 md:w-1/2 mb-6"></div>
    //   <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-green-600 mb-6">
    //     404 Error — Page Not Found
    //   </h2>
    //   <h1 className="text-base sm:text-lg md:text-xl font-semibold text-gray-700 leading-relaxed">
    //     This page is under maintenance. <br className="hidden sm:block" />
    //     Please visit again after some time.
    //   </h1>
    // </div>
    <></> // empty fragment so nothing renders
  );
};

export default News;




