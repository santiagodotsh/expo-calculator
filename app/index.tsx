import { View } from 'react-native'
import { CustomText } from '@/components/custom-text'
import { CalculatorButton } from '@/components/calculator-button'
import { styles } from '@/styles/global'
import { Colors } from '@/constants/Colors'
import { useCalculator } from '@/hooks/use-calculator'

export default function HomeScreen() {
  const {
    formula,
    number,
    prevNumber,

    clean,
    toggleSign,
    deleteLast,
    buildNumber,

    divideOperation,
    multiplyOperation,
    subtractOperation,
    addOperation,

    calculateResult
  } = useCalculator()

  return (
    <View style={styles.calculatorContainer}>
      <View
        style={{
          paddingHorizontal: 30,
          paddingBottom: 20
        }}
      >
        <CustomText variant='main'>
          {formula}
        </CustomText>

        <CustomText variant='sub'>
          {(formula !== prevNumber) && prevNumber}
        </CustomText>
      </View>

      <View style={styles.row}>
        <CalculatorButton
          label='C'
          color={Colors.lightGray}
          onPress={clean}
          blackText
        />
        <CalculatorButton
          label='+|-'
          color={Colors.lightGray}
          onPress={toggleSign}
          blackText
        />
        <CalculatorButton
          label='del'
          color={Colors.lightGray}
          onPress={deleteLast}
          blackText
        />
        <CalculatorButton
          label='/'
          color={Colors.orange}
          onPress={divideOperation}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton label='7' onPress={() => buildNumber('7')} />
        <CalculatorButton label='8' onPress={() => buildNumber('8')} />
        <CalculatorButton label='9' onPress={() => buildNumber('9')} />
        <CalculatorButton
          label='*'
          color={Colors.orange}
          onPress={multiplyOperation}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton label='4' onPress={() => buildNumber('4')} />
        <CalculatorButton label='5' onPress={() => buildNumber('5')} />
        <CalculatorButton label='6' onPress={() => buildNumber('6')} />
        <CalculatorButton
          label='-'
          color={Colors.orange}
          onPress={subtractOperation}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton label='1' onPress={() => buildNumber('1')} />
        <CalculatorButton label='2' onPress={() => buildNumber('2')} />
        <CalculatorButton label='3' onPress={() => buildNumber('3')} />
        <CalculatorButton
          label='+'
          color={Colors.orange}
          onPress={addOperation}
        />
      </View>

      <View style={styles.row}>
        <CalculatorButton
          label='0'
          onPress={() => buildNumber('0')}
          doubleSize
        />
        <CalculatorButton label='.' onPress={() => buildNumber('.')} />
        <CalculatorButton
          label='='
          color={Colors.orange}
          onPress={calculateResult}
        />
      </View>
    </View>
  )
}
