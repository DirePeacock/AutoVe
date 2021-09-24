import fs from 'fs';
import input from './input.json';
import { normalize } from '../../src';
import path from 'path';
import actorsSchema from './schema';
// https://github.com/paularmstrong/normalizr/tree/master/examples/relationships
// https://www.youtube.com/watch?v=fAX7xyIlQjs
const normalizedData = normalize(input, actorsSchema);
const output = JSON.stringify(normalizedData, null, 2);
fs.writeFileSync(path.resolve(__dirname, './output.json'), output);