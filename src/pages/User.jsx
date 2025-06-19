import { useParams } from "react-router";

export default function User() {
  const { userId } = useParams();
  console.log(userId);

  const users = [
    {
      id: 1,
      name: "A",
    },
    {
      id: 2,
      name: "B",
    },
    {
      id: 3,
      name: "C",
    },
  ];

  const foundUser = users.find((el) => el.id === +userId);

  return <div>User {foundUser.name}</div>;
}
