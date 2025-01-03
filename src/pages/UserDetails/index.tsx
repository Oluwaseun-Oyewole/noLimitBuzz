import Loader from "../../components/Loading";
import { useFetcher } from "../../hooks/useFetch";

const UserDetails = () => {
  const { isLoading, error, userData } = useFetcher();
  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="h-screen w-screen bg-gray-900 text-white flex items-center justify-center">
      <div>
        <h2>Name: {userData?.name}</h2>
        <h1>Phone: {userData?.phone}</h1>
        <h1>Email: {userData?.email}</h1>
      </div>
    </div>
  );
};

export default UserDetails;
