import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { appServices } from "../services";
import { UsersResponse } from "../services/types";

export const useUserDetailsFetcher = () => {
  const [userData, setUserData] = useState<UsersResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    const controller = new AbortController();
    let isMounted = true;
    const fetchUsers = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const user = await appServices.userDetailsService(
          params.id!,
          controller.signal
        );
        if (isMounted) setUserData(user);
      } catch (err) {
        return err;
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
    // Cleanup function to abort fetch on component unmount
    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return { isLoading, error, userData };
};
