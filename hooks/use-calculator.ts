import {
  useEffect,
  useRef,
  useState
} from 'react'

enum Operator {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/'
}

export function useCalculator() {
  const [formula, setFormula] = useState<string>('0')

  const [number, setNumber] = useState<string>('0')
  const [prevNumber, setPrevNumber] = useState<string>('0')

  const lastOperator = useRef<Operator | null>(null)

  useEffect(() => {
    if (lastOperator.current) {
      const firstFormulaPart = formula.split(' ').at(0)

      setFormula(`${firstFormulaPart} ${lastOperator.current} ${number}`)
    } else {
      setFormula(number)
    }
  }, [number])

  useEffect(() => {
    const subResult = calculateSubResult()

    setPrevNumber(subResult.toString())
  }, [formula])

  const clean = () => {
    setFormula('0')
    setNumber('0')
    setPrevNumber('0')

    lastOperator.current = null
  }

  const toggleSign = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''))

      return
    }

    setNumber('-' + number)
  }

  const deleteLast = () => {
    let currentSign = ''
    let temporalNumber = number

    if (number.includes('-')) {
      currentSign = '-'
      temporalNumber = number.substring(1)
    }

    if (temporalNumber.length > 1) {
      setNumber(currentSign + temporalNumber.slice(0, -1))

      return
    }

    setNumber('0')
  }

  const setLastNumber = () => {
    calculateResult()
    
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1))
      setNumber('0')

      return
    }

    setPrevNumber(number)
    setNumber('0')
  }

  const divideOperation = () => {
    setLastNumber()

    lastOperator.current = Operator.DIVIDE
  }

  const multiplyOperation = () => {
    setLastNumber()

    lastOperator.current = Operator.MULTIPLY
  }

  const subtractOperation = () => {
    setLastNumber()

    lastOperator.current = Operator.SUBTRACT
  }

  const addOperation = () => {
    setLastNumber()

    lastOperator.current = Operator.ADD
  }

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ')

    const num1 = Number(firstValue)
    const num2 = Number(secondValue)

    if (isNaN(num2)) {
      return num1
    }

    switch (operation) {
      case Operator.ADD:
        return num1 + num2
      case Operator.SUBTRACT:
        return num1 - num2
      case Operator.MULTIPLY:
        return num1 * num2
      case Operator.DIVIDE:
        return num1 / num2
      default:
        throw new Error(`Operation ${operation} not implemented`)
    }
  }

  const calculateResult = () => {
    const subResult = calculateSubResult()

    setFormula(subResult.toString())

    lastOperator.current = null

    setPrevNumber('0')
  }

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') {
      return
    }

    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        setNumber(number + numberString)

        return
      }

      if (numberString === '0' && number.includes('.')) {
        setNumber(number + numberString)

        return
      }

      if (numberString !== '0' && !number.includes('.')) {
        setNumber(numberString)

        return
      }

      if (numberString === '0' && !number.includes('.')) {
        return
      }
    }

    setNumber(number + numberString)
  }

  return {
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
  }
}
