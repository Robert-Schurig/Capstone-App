import {useState, useEffect} from "react";
import Image from "next/image";

export default function Artworks() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      "https://api.europeana.eu/record/v2/search.json?media=true&profile=minimal&query=Painting&theme=art&reusability=open&qf=IMAGE_COLOUR:%22TRUE%22&rows=100&wskey=hanozzle"
    )
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;
  console.log(data.items[10].edmPreview[0]);
  return (
    <>
      {/* {data.items.map(item => {
        return ( */}
      <div>
        <Image
          alt={data.items[1].title}
          src={data.items[1].edmPreview[0]}
          width={800}
          height={500}
        />
      </div>
      {/* );
      })} */}
    </>
  );
}
