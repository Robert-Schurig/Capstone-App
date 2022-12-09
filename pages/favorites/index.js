// import {useContext} from "react";
// import Image from "next/legacy/image";
// import {ImageContext} from "../context/DataContext";

// export default function Favorites(favorite) {
//   const {} = useContext(ImageContext);
//   useEffect(() => {
//     if (favorite.length === 0) {
//       setFavImages([]);
//     } else {
//       fetch(
//         "https://api.europeana.eu/record/v2/search.json?media=true&profile=minimal&query=Painting&theme=art&reusability=open&qf=IMAGE_COLOUR:%22TRUE%22&rows=100&wskey=hanozzle"
//       )
//         .then(response => response.json())
//         .then(favImages => setFavImages(favImages));
//     }
//   }, [favorite]);

//   return (
//     <div>
//       {favorite.map(fav, index => {
//         return (
//           <article key={fav.id}>
//             <p>{fav.title}</p>
//             <Image
//               key={index}
//               src={fav.edmPreview[0]}
//               alt={fav.title[0]}
//               height={300}
//               width={500}
//             />
//           </article>
//         );
//       })}
//     </div>
//   );
// }
