import { Text, View } from 'react-native'
import { styles } from '@/styles/global'

export default function HomeScreen() {
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.mainResult}>
        50 x 50
      </Text>

      <Text style={styles.subResult}>
        2500
      </Text>
    </View>
  )
}
