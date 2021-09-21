import {
  IntegerTypes,
  Pr_Ipv4Deconstruct,
} from '../types'
import { getPrivate } from './utils/ipv4'
import {
  calculateMinMax,
  getBit,
} from './utils/calculateType'
import * as Creation from './utils/creation'

export class Pr_Ipv4 {
  private incrementLength: IntegerTypes = 'u8'
  private thridOctetLength: IntegerTypes = 'u8'
  private fourthOctetLength: IntegerTypes = 'u8'
  private incrementMax = calculateMinMax(this.incrementLength)[1]

  private privateIp: string
  private thridOctet: string
  private fourthOctet: string

  private inc: number
  private epoch: number

  constructor(epoch: number) {
    this.privateIp = getPrivate()
    this.thridOctet = this.privateIp.split(".")[2]
    this.fourthOctet = this.privateIp.split(".")[3]
    this.inc = 0
    this.epoch = epoch
  }

  private increment(): number {
    if (this.inc >= this.incrementMax) {
      this.inc = 0
    } else {
      this.inc += 1
    }

    return this.inc
  }
  public generate(): string {
    const date = Date.now()
    const inc = this.increment()

    const bin = Creation.toBin(date - this.epoch)
      + Creation.correctBitLength(Creation.toBin(parseInt(this.thridOctet)), getBit(this.thridOctetLength))
      + Creation.correctBitLength(Creation.toBin(parseInt(this.fourthOctet)), getBit(this.fourthOctetLength))
      + Creation.correctBitLength(Creation.toBin(inc), getBit(this.incrementLength))

    const id = Creation.toBigint(bin)

    return id.toString()
  }
  public deconstruct(id: string): Pr_Ipv4Deconstruct {
    const bin = Creation.toBin(Creation.string2Bigint(id))

    const incrementBits = getBit(this.incrementLength)
    const thirdOctetBits = getBit(this.thridOctetLength)
    const fourthOctetBits = getBit(this.fourthOctetLength)

    const increment = Creation.toInt(bin.substr(bin.length - incrementBits))
    const fourth_octet = Creation.toInt(bin.substr(bin.length - (incrementBits + fourthOctetBits), fourthOctetBits))
    const third_octet = Creation.toInt(bin.substr(bin.length - (incrementBits + fourthOctetBits + thirdOctetBits), thirdOctetBits))
    const date = Creation.toInt(bin.substr(0, bin.length - (incrementBits + thirdOctetBits + fourthOctetBits)))
  
    return {
      date,
      third_octet,
      fourth_octet,
      increment,
    }
  }
}
