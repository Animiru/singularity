import {
  DataType,
  DataBits,
  IntegerTypes,
} from '../../types'

export function calculateMinMax(iType: IntegerTypes): [number, number] {
  const type = iType.substr(0, 1) as DataType
  const bits = parseInt(iType.substr(1)) as DataBits

  const max = getMaxFromBit(bits)
  if (type === 'u') return [0, max]
  
  const half = Math.floor(max / 2)

  return [(half + 1) * -1, half]
}
export function getMaxFromBit(bits: number): number {
  return (2 ** bits) - 1
}
export function getBit(iType: IntegerTypes): DataBits {
  return parseInt(iType.substr(1)) as DataBits
}
