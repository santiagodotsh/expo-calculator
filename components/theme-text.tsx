import { Text, type TextProps } from 'react-native'

interface Props extends TextProps {}

export function ThemeText({ children, ...rest }: Props) {
  return (
    <Text {...rest}>
      {children}
    </Text>
  )
}
