// src/validateSarif.ts
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { loadSchema } from './utils';

export function validateSarif(sarifContent: any): void {
  const schema = loadSchema();
  const ajv = new Ajv({ allErrors: true });
  addFormats(ajv); // Add support for formats like "uri"
  const validate = ajv.compile(schema);
  if (!validate(sarifContent)) {
    if (validate.errors?.[0]?.message?.includes('must be array')) {
      throw new Error('Invalid SARIF file: The runs or results property must be an array.');
    } else {
      throw new Error('Invalid SARIF file: ' + (validate.errors?.[0]?.message || 'Unknown error'));
    }
  }
  console.log('✅: Successfully Validated Input against OASIS Schema.');
}
