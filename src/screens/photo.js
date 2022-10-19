import { View, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import photoStyle from "../styles/photo";

const Photo = () => {
  const route = useRoute();
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: route.params.url }} />
    </View>
  );
};
const styles = StyleSheet.create(photoStyle);
export default Photo;
