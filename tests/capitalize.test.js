// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код функции / тестов, запуская проверки заново

import { capitalize } from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

assert.equal(capitalize('hello'), 'Hello')  

assert.equal(capitalize(''), '')

