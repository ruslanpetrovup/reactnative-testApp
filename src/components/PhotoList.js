import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import photoListStyle from "../styles/photoList";
import { useSelector } from "react-redux";

const PhotoList = ({ photos }) => {
  const statusLoading = useSelector((state) => state.photo.status);
  const navigation = useNavigation();

  return (
    <ScrollView>
      {statusLoading === "loading" ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <View style={styles.list}>
          {photos.map((num) => (
            <View key={num.id} style={styles.item}>
              <Pressable
                onPress={() => {
                  navigation.navigate("photo", { url: num.urls.full });
                }}
              >
                <Image style={styles.image} source={{ uri: num.urls.full }} />
                <Text style={styles.title}>Title: {num.user.first_name}</Text>
                <Text style={styles.author}>Author: {num.user.first_name}</Text>
              </Pressable>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};
const styles = StyleSheet.create(photoListStyle);
export default PhotoList;
