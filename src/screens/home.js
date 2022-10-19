import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import PhotoList from "../components/PhotoList";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "../store/reducer/photoReducer";
import ErrorMessage from "../components/ErrorMessage";

const Home = () => {
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photo.value);
  const statusPhoto = useSelector((state) => state.photo.status);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return (
    <View>
      {statusPhoto !== "error" ? (
        <PhotoList photos={photos} />
      ) : (
        <ErrorMessage />
      )}
    </View>
  );
};

export default Home;
