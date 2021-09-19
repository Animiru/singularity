import fs from 'fs'
import path from 'path'

export const version = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf-8')).version
