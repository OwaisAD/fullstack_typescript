type PersonProps = {
  name: string;
  age: number;
  email: string;
};

const Person = ({ name, age, email }: PersonProps) => {
  return (
    <p>
      Name: {name}, age: {age}, email: {email}
    </p>
  );
};

export default Person;
