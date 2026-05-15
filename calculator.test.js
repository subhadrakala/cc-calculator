import { test } from 'node:test';
import assert from 'node:assert/strict';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

test('Testinf simple expression', async () => {
    const { stdout } = await execAsync('node calculator.js 1+2');
    assert.strictEqual(stdout.trim(), "3");
});

test('Testing operator precedence * before +', async () => {
    const { stdout } = await execAsync("node calculator.js 3+4*2");
    assert.strictEqual(stdout.trim(), "11");
});

test('Testing operator precedence / before -', async () => {
    const { stdout } = await execAsync("node calculator.js 12/3-1");
    assert.strictEqual(stdout.trim(), "3");
});


test('Testing paranthesis', async () => {
    const { stdout } = await execAsync('node calculator.js "(3+4)*2"');
    assert.strictEqual(stdout.trim(), "14");
});

test('Testing nested paranthesis', async () => {
    const { stdout } = await execAsync('node calculator.js "2*(15-(3+2))"');
    assert.strictEqual(stdout.trim(), "20");
});

test('Testing parallel independent paranthesis', async () => {
    const { stdout } = await execAsync('node calculator.js "(1+2)*(3+4)"');
    assert.strictEqual(stdout.trim(), "21");
});

test('Testing exponents', async () => {
    const { stdout } = await execAsync("node calculator.js 2^3^2");
    assert.strictEqual(stdout.trim(), "512");
});

test('Testing exponents and paranthesis', async () => {
    const { stdout } = await execAsync('node calculator.js "(2^3)^2"');
    assert.strictEqual(stdout.trim(), "64");
});

test('Left-to-right precedence tie-breaker', async () => {
    const { stdout } = await execAsync("node calculator.js 5+4*3-2");
    assert.strictEqual(stdout.trim(), "15");
});
