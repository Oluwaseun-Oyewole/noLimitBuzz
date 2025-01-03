import { useLoaderData } from "react-router-dom";
import { UsersResponse } from "../../services/types";

const Home = () => {
  const users: UsersResponse[] = useLoaderData();

  return (
    <div className="bg-gray-900 h-screen w-screen text-white">
      <ul>
        {users?.map((user, index) => {
          return (
            <li key={index}>
              <h2>{user?.name}</h2>
              <button>View Details</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
