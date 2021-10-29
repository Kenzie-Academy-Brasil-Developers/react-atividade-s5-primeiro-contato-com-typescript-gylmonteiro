import { ContainerCards } from "../styles/index";
interface User {
  name: string;
  hobby: string;
  age: number;
}

interface CardProps {
  users: User[];
}

const Card = ({ users }: CardProps) => {
  return (
    <ContainerCards>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <h3>{user.name}</h3>
            <h3>{user.hobby}</h3>
            <p>{user.age}</p>
          </li>
        ))}
      </ul>
    </ContainerCards>
  );
};

export default Card;
