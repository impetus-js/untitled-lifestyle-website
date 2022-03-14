import { resolve, join } from 'path'
import * as fs from 'fs'
import * as yaml from 'js-yaml'
import * as TJS from 'typescript-json-schema'

// optionally pass argument to schema generator
const settings: TJS.PartialArgs = {
  required: true,
}

// optionally pass ts compiler options
const compilerOptions: TJS.CompilerOptions = {
  strictNullChecks: true,
}

const program = TJS.getProgramFromFiles([resolve('src/schema/index.ts')], compilerOptions)
const schema = TJS.generateSchema(program, 'Recipe', settings)
const output = yaml.dump(schema)

fs.writeFileSync(join('.', '__recipe-schema.yaml'), output, 'utf8')
fs.writeFileSync(join('.', '__recipe-schema.json'), JSON.stringify(schema, null, '  '), 'utf8')
