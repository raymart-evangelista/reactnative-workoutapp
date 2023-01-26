import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appearance } from 'react-native';
import MainScreen from './MainLoggedIn';
import { useColorScheme } from 'react-native';
import { lightStyles, darkStyles } from './globalStyles';

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
      <MainScreen theme={themeStyles} />
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


