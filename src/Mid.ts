import {
  IntegerTypes,
  MidDeconstruct,
} from '../types'
import {
  calculateMinMax,
  getBit,
} from './utils/calculateType'
import * as Creation from './utils/creation'

export class Mid {
  private incrementLength: IntegerTypes = 'u8'
  private midLength: IntegerTypes = 'u16'
  private incrementMax = calculateMinMax(this.incrementLength)[1]

  private mid: number

  private inc: number
  private epoch: number

  constructor(epoch: number, mid = process.pid) {
    if (mid > calculateMinMax(this.midLength)[1]) {
      mid = Math.floor(Math.random() * 65535)
    }

    this.mid = mid
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
      + Creation.correctBitLength(Creation.toBin(this.mid), getBit(this.midLength))
      + Creation.correctBitLength(Creation.toBin(inc), getBit(this.incrementLength))

    const id = Creation.toBigint(bin)

    return id.toString()
  }
  public deconstruct(id: string): MidDeconstruct {
    const bin = Creation.toBin(Creation.string2Bigint(id))

    const incrementBits = getBit(this.incrementLength)
    const midBits = getBit(this.midLength)

    const increment = Creation.toInt(bin.substr(bin.length - incrementBits))
    const mid = Creation.toInt(bin.substr(bin.length - (incrementBits + midBits), midBits))
    const date = Creation.toInt(bin.substr(0, bin.length - (incrementBits + midBits)))

    return {
      date,
      mid,
      increment,
    }
  }
}
