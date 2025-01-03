import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/";
import Loader from "../../components/Loading";
import { useUserDetailsFetcher } from "../../hooks/useDetailsFetcher";

const UserDetails = () => {
  const { isLoading, error, userData } = useUserDetailsFetcher();
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/users");
  };
  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="flex items-start justify-center w-screen flex-col gap-2 text-sm md:text-base pt-5">
      <h2>User ID : {userData?.id}</h2>
      <h2>Name: {userData?.name}</h2>
      <h2>Phone: {userData?.phone}</h2>
      <h2>Email: {userData?.email}</h2>

      <div>
        <h2>Address</h2>
        <div className="pl-5 text-sm py-2">
          <h2>City: {userData?.address?.city}</h2>{" "}
          <h2>Street: {userData?.address?.street}</h2>{" "}
          <h2>Zipcode: {userData?.address?.zipCode}</h2>{" "}
          <h2>Suite: {userData?.address?.suite}</h2>{" "}
          <div>
            <h2>Geo</h2>
            <div className="pl-5 text-sm py-2">
              <h2>Latitude: {userData?.address?.geo.lat}</h2>{" "}
              <h2>Longitude: {userData?.address?.geo.lng}</h2>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Company</h2>
        <div className="pl-5 text-sm py-2">
          <h2>Company name: {userData?.company.name}</h2>{" "}
          <h2>CatchPhrase: {userData?.company.catchPhrase}</h2>{" "}
        </div>
      </div>
      <Link to="#">
        Website: <span className="text-blue-300">{userData?.website}</span>
      </Link>

      <div className="w-3/4 md:w-2/5">
        <Button variant="custom" onClick={goBack}>
          Go back
        </Button>
      </div>
    </div>
  );
};

export default UserDetails;
