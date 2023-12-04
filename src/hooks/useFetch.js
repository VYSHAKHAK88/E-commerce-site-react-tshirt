import { useEffect,useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
        setData([]);
      }
    };

    fetchUrl();
  }, [url]);

  return [data];
};

export default useFetch;