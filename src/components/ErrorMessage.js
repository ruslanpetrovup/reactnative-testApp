import { Text, View, StyleSheet } from "react-native";
import errorMessageStyle from "../styles/errorMessage";

const ErrorMessage = () => {
  return (
    <View>
      <Text style={styles.title}>Невозможно загрузить фото</Text>
    </View>
  );
};

const styles = StyleSheet.create(errorMessageStyle);
export default ErrorMessage;
