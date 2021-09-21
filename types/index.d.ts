export type DataType = (
  "s" |
  "u"
)
export type DataBits = (
  1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64
)
export type IntegerTypes = `${DataType}${DataBits}`

export interface Pr_Ipv4Deconstruct {
  date: number
  third_octet: number
  fourth_octet: number
  increment: number
}

declare const version: number
declare class Pr_Ipv4 {
  constructor(epoch: number)
  public generate(): string
  public deconstruct(id: string): Pr_Ipv4Deconstruct
}
