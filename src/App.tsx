import { useState } from "react";

function App() {
  interface CareerEntry {
    club: string;
    age: number | string;
  }

  const clubs: string[] = [
    "Arsenal",
    "Barcelona",
    "Real Madrid",
    "Liverpool",
    "Manchester City",
    "Atletico Madrid",
    "Manchester United",
    "Bayern Munich",
    "Borussia Dortmund",
    "Inter Milan",
    "Bayer Leverkusen",
    "Benfica",
    "Girona",
    "FC Porto",
  ];

  const ages: (number | string)[] = [
    "Academy",
    18,
    20,
    22,
    24,
    26,
    28,
    30,
    32,
    34,
    36,
    "Retire",
    "Manager",
  ];

  const getRandomClub = (): string => {
    return clubs[Math.floor(Math.random() * clubs.length)];
  };

  const [currentClub1, setCurrentClub1] = useState<string>(getRandomClub());
  const [currentClub2, setCurrentClub2] = useState<string>(getRandomClub());

  const [career, setCareer] = useState<CareerEntry[]>([]);
  const [careerOver, setCareerOver] = useState<string>("");

  const pushCareer = (club: string, updateClub: boolean): void => {
    const nextAge = ages[career.length];

    if (!nextAge) {
      console.log("Career Ended!");
      setCareerOver("Career Ended!");
      return;
    }

    setCareer([...career, { club, age: nextAge }]);

    if (updateClub) {
      setCurrentClub2(getRandomClub());
    } else {
      setCurrentClub1(getRandomClub());
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100vw",
        }}
      >
        <div>
          <h2>Your football career</h2>
          <h3 style={{ color: "red" }}>{careerOver}</h3>
          {career.map((entry, index) => (
            <h3 key={index}>
              {entry.age} : {entry.club}
            </h3>
          ))}
        </div>
        <div>
          <h2>Clubs</h2>
          <div>
            <button onClick={() => pushCareer(currentClub1, true)}>
              {currentClub1}
            </button>
          </div>
          <div>
            <button onClick={() => pushCareer(currentClub2, false)}>
              {currentClub2}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
