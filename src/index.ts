import fs from 'fs'
import path from 'path'

export const version = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf-8')).version
export * from './Pr_Ipv4'
export * from './Mid'
export * as Util from './utils/creation'
