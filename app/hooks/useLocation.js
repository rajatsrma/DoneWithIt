import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default useLocation = () => {
  const [location, setLocation] = useState();
  const getPermission = async () => {
    try {
      const result = await Location.requestPermissionsAsync();
      if (!result.granted) alert("Please give location permission");
      else {
        const {
          coords: { latitude, longitude },
        } = await Location.getLastKnownPositionAsync();
        setLocation({ latitude, longitude });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPermission();
  }, []);
  return location;
};
