export function toBin(int: bigint | number): string {
  return int.toString(2)
}
export function toBigint(bin: string): bigint {
  let total = 0n
  const binArr = bin
    .split("")
    .map(bit => parseInt(bit))
    .reverse()
  for (let index = 0; index < binArr.length; index++) {
    total += BigInt(binArr[index] * Math.pow(2, index))
  }

  return total
}
export function string2Bigint(id: string): bigint {
  return BigInt(id)
}
export function toInt(bin: string): number {
  return parseInt(bin, 2)
}
export function correctBitLength(bin: string, bits: number): string {
  let prefix = ""
  for (let index = 0; index < (bits - bin.length); index++) {
    prefix += "0"
  }

  return prefix + bin
}
