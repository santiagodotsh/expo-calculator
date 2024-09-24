import { Text, type TextProps } from 'react-native'
import { styles } from '@/styles/global'

interface Props extends TextProps {
  variant: 'main' | 'sub'
}

export function CustomText({
  children,
  variant,
  ...rest
}: Props) {
  return (
    <Text
      style={[
        {
          color: 'white',
          fontFamily: 'SpaceMono'
        },
        variant === 'main' && styles.mainResult,
        variant === 'sub' && styles.subResult
      ]}
      numberOfLines={1}
      adjustsFontSizeToFit
      {...rest}
    >
      {children}
    </Text>
  )
}
