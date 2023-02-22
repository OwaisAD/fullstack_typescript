import { SetStateAction } from "react";

type Person = {
  id: number;
  name: string;
  age: number;
  occupation: string;
};

type LoadPeopleProps = {
  displayPeople: boolean;
  setDisplayPeople: React.Dispatch<React.SetStateAction<boolean>>;
  getData: () => Promise<void>;
  people: Person[];
};

const LoadPeople = ({ displayPeople, setDisplayPeople, getData, people }: LoadPeopleProps) => {
  const loadData = async () => {
    const data = await getData();
    setDisplayPeople(!displayPeople);
  };

  return (
    <div>
      <button
        onClick={() => {
          loadData();
          setDisplayPeople(!displayPeople);
        }}
      >
        Load list of people
      </button>

      {displayPeople && people?.length > 0 && (
        <>
          {people?.map((person: Person) => (
            <p key={person.id}>
              (id: {person.id}) Name: {person.name}, age: {person.age}, occupation:{" "}
              {person.occupation}
            </p>
          ))}
        </>
      )}
    </div>
  );
};

export default LoadPeople;
