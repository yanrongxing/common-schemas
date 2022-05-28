import { generateValidator, JSONSchema, ValidateFunction } from '../validation'

export enum PropsCategory {
  DIAMOND = 'diamond',
  BOX = 'box',
  FRAGMENTS = 'fragments',
  VIBRANIUM = 'vibranium'
}

export namespace PropsCategory {
  export const schema: JSONSchema<PropsCategory> = {
    type: 'string',
    enum: Object.values(PropsCategory)
  }

  export const validate: ValidateFunction<PropsCategory> =
    generateValidator(schema)
}
