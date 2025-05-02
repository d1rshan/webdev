import { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch("/api/randomfact");

      const data = await res.text(); // because you're sending plain text
      // console.log(data);
      setData(data);
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Hello</h1>
      <h2>{data}</h2>
    </>
  );
};
export default App;
