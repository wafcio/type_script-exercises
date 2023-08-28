export function Euler1(num: number): number {
  let sum: number = 0

  for (let i = 3; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i
    }
  }

  return sum
}
