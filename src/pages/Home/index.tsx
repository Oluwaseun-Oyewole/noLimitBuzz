import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { appServices } from "../../services";
import { UsersResponse } from "../../services/types";

const Home = () => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef<HTMLDivElement | null>(null);
  const [usersData, setUsersData] = useState<UsersResponse[]>([]);
  const navigate = useNavigate();
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true);
      try {
        const users = await appServices.usersService(page);
        setUsersData((prevUsers) => [...prevUsers, ...users]);
        if (users?.length < 6) {
          setHasMore(false); // No more users to fetch
        }
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        return error;
      } finally {
        setIsLoading(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoading) {
          fetchUsers();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [hasMore, isLoading]);

  const goToUserDetails = (id: number) => {
    return navigate(`${id}`);
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-lg py-10">All Available Users</h1>
        <ul className="grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-5 items-center md:justify-center">
          {usersData.map((user, index) => (
            <li
              key={index}
              className="bg-gray-800 rounded-lg min-h-[220px] px-6 py-6"
            >
              <div className="text-sm flex flex-col gap-2">
                <h2>Name: {user?.name}</h2>
                <h2>Email: {user?.email}</h2>
                <h2>Phone: {user?.phone}</h2>
                <h2>Address: {user?.address?.city}</h2>
                <Link to="#">Website: {user?.website}</Link>
                <div className="!w-full pt-3">
                  <Button
                    variant="custom"
                    onClick={() => goToUserDetails(user?.id)}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div ref={observerRef} className="h-10"></div>
        {isLoading && page === 1 && <p>fetching users...</p>}
        {isLoading && page > 1 && <p>fetching more users...</p>}
        {!hasMore && <p></p>}
      </div>
    </div>
  );
};

export default Home;
