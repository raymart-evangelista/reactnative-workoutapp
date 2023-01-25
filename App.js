import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appearance } from 'react-native';
import MainScreen from './MainScreen';
import { useColorScheme } from 'react-native';

export default function App() {
  const [colorScheme, setColorScheme] = useState(Appearance.getColorScheme())
  // const [colorScheme, setColorScheme] = useColorScheme()
  const themeStyles = colorScheme === 'dark' ? darkStyles : lightStyles

  useEffect(() => {
    const themeSubscription = Appearance.addChangeListener(({ colorScheme }) => {
      setColorScheme(colorScheme)
    }) 

    return () => themeSubscription.remove()
  }, [])

  console.log(colorScheme)

  return (
    <View style={themeStyles.container}>
      <MainScreen />
      <StatusBar />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const mainColor = '#6a51ae';
const mainTextColor = '#ffffff';
const secondaryColor = '#f9a825';

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: mainColor,
    marginBottom: 10,
  },
});
const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: mainTextColor,
    marginBottom: 10,
  },
});
