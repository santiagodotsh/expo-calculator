import { Pressable, Text } from 'react-native'
import { styles } from '@/styles/global'

interface Props {
  label: string
  color?: string
  blackText?: boolean
  onPress: () => void
}

export function CalculatorButton({
  label,
  color = styles.button.backgroundColor,
  blackText = false,
  onPress
}: Props) {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        backgroundColor: color,
        opacity: pressed ? 0.7 : 1
      })}
      onPress={onPress}
    >
      <Text
        style={{
          ...styles.buttonText,
          color: blackText ? 'black' : styles.buttonText.color,
        }}
      >
        {label}
      </Text>
    </Pressable>
  )
}
