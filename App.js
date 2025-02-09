import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InshortTabs from "./components/InshortTabs"

export default function App() {
  return (
    <View style={{...styles.container, backgroundColor: "#282C35"}}>
      <InshortTabs/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
