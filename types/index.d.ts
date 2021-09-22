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
export interface MidDeconstruct {
  date: number
  mid: number
  increment: number
}

// Exports

declare const version: number

/**
 * ## Pr_Ipv4
 * `Pr_Ipv4` or rather "Private Ipv4" is a method that generates singularities by using the last two octets of the devices private ipv4 address.
 * ___
 * This singularity is structured like so...
 * ```
 * 
 *             912845639195298305
 *                     | to binary
 *                    \/
 *   ?                                  24      16      8       0
 *  |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|‾‾‾‾‾‾‾|‾‾‾‾‾‾‾|‾‾‾‾‾‾‾|
 *  110010101011000101000100010110111011000000000000101000000001
 * |___________________________________|_______|_______|_______|
 *                 Date                 octet 3 octet 4   Inc
 *                  | to decimal
 *                 \/
 *            54409840059
 *                | + 1577858400000 (Add epoch)
 *               \/
 *         1632268240059
 *              | Parse unix timestamp (ms)
 *             \/
 *  2021-09-21 11:50:40 PM GMT
 * ```
 * ___
 * #### Pros
 * - Scaling without a MITM.
 * - Horizontal scaling under the same router or switch.
 * - Smaller 18 chars.
 * 
 * #### Cons
 * - Multiple instances on the same machine will lead to collisions.
 * - Possible collisions with advanced networks configs EG: `10.0.1.12` & `192.168.1.12`.
 * - Possible collisions when not scaling under same router.
 * - Leaks private subnet and host.
 * 
 * ___
 * 
 * All in all this generation method is recommended if you are planning on running only one instance per machine
 * and you wish to scale across muliple different machines.
 *  
 * ___
 * 
 * #### Constructor
 * @param {number} epoch Epoch to subtract from current date.
 */
declare class Pr_Ipv4 {
  /**
   * ## Pr_Ipv4
   * `Pr_Ipv4` or rather "Private Ipv4" is a method that generates singularities by using the last two octets of the devices private ipv4 address.
   * ___
   * The singularity is structured like so...
   * ```
   * 
   *             912845639195298305
   *                     | to binary
   *                    \/
   *   ?                                  24      16      8       0
   *  |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|‾‾‾‾‾‾‾|‾‾‾‾‾‾‾|‾‾‾‾‾‾‾|
   *  110010101011000101000100010110111011000000000000101000000001
   * |___________________________________|_______|_______|_______|
   *                 Date                 octet 3 octet 4   Inc
   *                  | to decimal
   *                 \/
   *            54409840059
   *                | + 1577858400000 (Add epoch)
   *               \/
   *         1632268240059
   *              | Parse unix timestamp (ms)
   *             \/
   *  2021-09-21 11:50:40 PM GMT
   * ```
   * ___
   * #### Pros
   * - Scaling without a MITM.
   * - Horizontal scaling under the same router or switch.
   * - Smaller 18 chars.
   * 
   * #### Cons
   * - Multiple instances on the same machine will lead to collisions.
   * - Possible collisions with advanced networks configs EG: `10.0.1.12` & `192.168.1.12`.
   * - Possible collisions when not scaling under same router.
   * - Leaks private subnet and host.
   * 
   * ___
   * 
   * All in all this generation method is recommended if you are planning on running only one instance per machine
   * and you wish to scale across muliple different machines.
   *  
   * ___
   * 
   * #### Constructor
   * @param {number} epoch Epoch to subtract from current date.
   */
  constructor(epoch: number)
  /**
   * Generate singularity.
   */
  public generate(): string
  /**
   * Deconstruct a singularity and retrieve its contents.
   */
  public deconstruct(id: string): Pr_Ipv4Deconstruct
}

/**
   * ## Mid
   * `Mid` or rather "Machine Id" is a method that generates singularities by using a specified machine id or the pid if no machine id is given.
   * ___
   * The singularity is structured like so...
   * ```
   * 
   *             912845639195298305
   *                     | to binary
   *                    \/
   *   ?                                  24              8       0
   *  |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|‾‾‾‾‾‾‾|
   *  110010101011000101000100010110111011000000000000101000000001
   * |___________________________________|_______________|_______|
   *                 Date                   Machine Id     Inc
   *                  | to decimal
   *                 \/
   *            54409840059
   *                | + 1577858400000 (Add epoch)
   *               \/
   *         1632268240059
   *              | Parse unix timestamp (ms)
   *             \/
   *  2021-09-21 11:50:40 PM GMT
   * ```
   * ___
   * #### Pros
   * - Horizontal scaling anywhere.
   * - Up to 65535 machine ids available.
   * - Smaller 18 chars.
   * 
   * #### Cons
   * - MITM needed or static configs when scaling to ensure no machine ids overlap.
   * - Pid's can be the same on different machines (if no mid is provided).
   * ___
   * 
   * All in all this generation method is recommended for just about all use cases. It works best in most solutions.
   * The only downside if you will have to take measures to ensure no MID's are the same.
   *  
   * ___
   * 
   * #### Constructor
   * @param {number} epoch Epoch to subtract from current date.
   * @param {mid} mid Machine id. If none provided defaults to pid. If pid exceeds 65535 `Math#random()` is used.
   */
declare class Mid {
  /**
   * ## Mid
   * `Mid` or rather "Machine Id" is a method that generates singularities by using a specified machine id or the pid if no machine id is given.
   * ___
   * The singularity is structured like so...
   * ```
   * 
   *             912845639195298305
   *                     | to binary
   *                    \/
   *   ?                                  24              8       0
   *  |‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|‾‾‾‾‾‾‾|
   *  110010101011000101000100010110111011000000000000101000000001
   * |___________________________________|_______________|_______|
   *                 Date                   Machine Id     Inc
   *                  | to decimal
   *                 \/
   *            54409840059
   *                | + 1577858400000 (Add epoch)
   *               \/
   *         1632268240059
   *              | Parse unix timestamp (ms)
   *             \/
   *  2021-09-21 11:50:40 PM GMT
   * ```
   * ___
   * #### Pros
   * - Horizontal scaling anywhere.
   * - Up to 65535 machine ids available.
   * - Smaller 18 chars.
   * 
   * #### Cons
   * - MITM needed or static configs when scaling to ensure no machine ids overlap.
   * - Pid's can be the same on different machines (if no mid is provided).
   * ___
   * 
   * All in all this generation method is recommended for just about all use cases. It works best in most solutions.
   * The only downside if you will have to take measures to ensure no MID's are the same.
   *  
   * ___
   * 
   * #### Constructor
   * @param {number} epoch Epoch to subtract from current date.
   * @param {mid} mid Machine id. If none provided defaults to pid. If pid exceeds 65535 `Math#random()` is used.
   */
  constructor(epoch: number, mid?: number)
  /**
   * Generate singularity.
   */
  public generate(): string
  /**
   * Deconstruct a singularity and retrieve its contents.
   */
  public deconstruct(id: string): WidDeconstruct
}

declare namespace Util {
  /**
   * Convert bigint or integer to binary.
   */
  function toBin(int: bigint | number): string
  /**
   * Convert binary to bigint.
   */
  function toBigint(bin: string): bigint
  /**
   * Convert a stringified bigint back into a bigint.
   */
  function string2Bigint(id: string): bigint
  /**
   * Convert binary to an integer.
   */
  function toInt(bin: string): number
  /**
   * Correct binary length to specified bits by prepending 0's.
   */
  function correctBitLength(bin: string, bits: number): string
}
