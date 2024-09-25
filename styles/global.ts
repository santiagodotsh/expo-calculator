import { StyleSheet } from 'react-native'
import { Colors } from '@/constants/Colors'

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20
  },
  mainResult: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    fontWeight: '400'
  },
  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: '300'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 25,
    fontWeight: '300',
    color: Colors.textPrimary,
    fontFamily: 'SpaceMono'
  }
})
