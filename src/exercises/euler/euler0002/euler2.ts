export function Euler2(n: number): number {
  let num1 = 1
  let num2 = 2
  let sum = num2
  let value = -1

  while (value < n) {
    value = num1 + num2
    if (value % 2 === 0) {
      sum += value
    }
    num1 = num2
    num2 = value
  }

  return sum
}
