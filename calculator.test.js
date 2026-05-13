import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

test('Testinf simple expression', async () => {
    const { stdout } = await execAsync('node calculator.js 1+2');
    assert.strictEqual(stdout, "3");
});