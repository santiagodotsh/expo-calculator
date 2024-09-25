import { View } from 'react-native'
import { CustomText } from '@/components/custom-text'
import { CalculatorButton } from '@/components/calculator-button'
import { styles } from '@/styles/global'
import { Colors } from '@/constants/Colors'

export default function HomeScreen() {
  return (
    <View style={styles.calculatorContainer}>
      <View
        style={{
          paddingHorizontal: 30,
          paddingBottom: 20
        }}
      >
        <CustomText variant='main'>
          50 x 50
        </CustomText>

        <CustomText variant='sub'>
          2500
        </CustomText>
      </View>

      <View style={styles.row}>
        <CalculatorButton
          label='C'
          color={Colors.lightGray}
          onPress={() => console.log('C')}
          blackText
        />
        <CalculatorButton
          label='+/-'
          color={Colors.lightGray}
          onPress={() => console.log('+/-')}
          blackText
        />
        <CalculatorButton
          label='del'
          color={Colors.lightGray}
          onPress={() => console.log('del')}
          blackText
        />
        <CalculatorButton
          label='/'
          color={Colors.orange}
          onPress={() => console.log('/')}
        />
      </View>
    </View>
  )
}
