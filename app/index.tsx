import { View } from 'react-native'
import { CustomText } from '@/components/custom-text'
import { styles } from '@/styles/global'

export default function HomeScreen() {
  return (
    <View style={styles.calculatorContainer}>
      <CustomText variant='main'>
        50 x 50
      </CustomText>

      <CustomText variant='sub'>
        2500
      </CustomText>
    </View>
  )
}
