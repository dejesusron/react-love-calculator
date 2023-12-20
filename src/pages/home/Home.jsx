import { useState, useEffect } from "react";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [yourName, setYourName] = useState("");
  const [crushName, setCrushName] = useState("");
  const [lovePercentage, setLovePercentage] = useState([]);
  const [result, setResult] = useState("");

  const url = `https://love-calculator.p.rapidapi.com/getPercentage?sname=${yourName}&fname=${crushName}`;

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6d7f42b679msh7ee45aa380784d1p168352jsnc353586cd32c',
      'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      setLoading(false);
      setResult(data.result);
      setLovePercentage(data.percentage);
    } catch (err) {
      setLoading(false); 
      console.error(err);
    }
  }

  return (
    <div className="h-[100vh] w-full bg-[#fff] pt-40">
      <div className="container mx-auto px-4">
        <div className="w-100% h-[auto] border border-[#333] px-4 py-6 md:w-[400px] md:mx-auto">
          <h1 className="text-2xl text-center mb-10 font-semibold">Love Match</h1>
          <form className="flex flex-col gap-y-4 mb-8" onSubmit={handleSubmit}>
            <input 
              className="p-4 border border-[#333]" 
              type="text" 
              placeholder="Your name" 
              onChange={(e) => setYourName(e.target.value)}
              value={yourName}
              required
            />
            <input 
              className="p-4 border border-[#333]" 
              type="text" 
              placeholder="Crush name" 
              onChange={(e) => setCrushName(e.target.value)}
              value={crushName}
              required
            />
            <button className="p-4 border border-[#333] bg-[#333] text-[#fff] hover:opacity-[0.7] transition" type="submit">Match</button>
          </form>
          {
            loading 
            ? <p className="text-center ">Loading...</p> 
            : <div className="pl-2">
                <p className="font-normal">Percentage: {lovePercentage}</p>
                <p className="font-normal">Advice: {result}</p>
              </div>
          }
          
        </div>
      </div>
    </div>
  );
};

export default Home;