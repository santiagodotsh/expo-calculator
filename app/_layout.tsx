import { View } from 'react-native'
import { Slot } from 'expo-router'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { styles } from '@/styles/global'

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf')
  })

  if (!loaded) {
    return null
  }

  return (
    <View style={styles.background}>
      <Slot />

      <StatusBar style='light' />
    </View>
  )
}
