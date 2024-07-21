import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { FontFamily } from '../../constants/FontFamily';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Everyone</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.dark.background,
  },
  text: {
    fontSize: 20,
    fontFamily: FontFamily.bold,
    color: Colors.dark.text,
  },
});
