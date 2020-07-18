import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const requestFunc = async () => {
    setIsLoading(true);
    const response = await apiFunc();
    setIsLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  };
  return { data, error, isLoading, requestFunc };
};
