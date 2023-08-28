export function Euler3(n: number): number {
  let m: number = 2

  while (n > 1) {
    if (n % m === 0) {
      n = n / m
    } else {
      m += 1
    }
  }

  return m
}
