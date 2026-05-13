import { test } from 'node:test';
import assert from 'node:assert/strict';
import { postfix } from './postfix.js';

test('Testing simple expression', async () => {
    const output = postfix("100+25");
    assert.strictEqual(output, "100 25 +");
});

test('Testing operator precedence * before +', async () => {
    const output = postfix("3+4*2");
    assert.strictEqual(output, "3 4 2 * +");
});

test('Testing operator precedence / before -', async () => {
    const output = postfix("12/3-1");
    assert.strictEqual(output, "12 3 / 1 -");
});


test('Testing paranthesis', async () => {
    const output = postfix("(3+4)*2");
    assert.strictEqual(output, "3 4 + 2 *");
});

test('Testing nested paranthesis', async () => {
    const output = postfix("2*(15-(3+2))");
    assert.strictEqual(output, "2 15 3 2 + - *");
});

test('Testing parallel independent paranthesis', async () => {
    const output = postfix("(1+2)*(3+4)");
    assert.strictEqual(output, "1 2 + 3 4 + *");
});

test('Testing exponents', async () => {
    const output = postfix("2^3^2");
    assert.strictEqual(output, "2 3 2 ^ ^");
});

test('Testing exponents and paranthesis', async () => {
    const output = postfix("(2^3)^2");
    assert.strictEqual(output, "2 3 ^ 2 ^");
});


test('Left-to-right precedence tie-breaker', async () => {
    const output = postfix("5+4*3-2");
    assert.strictEqual(output, "5 4 3 * + 2 -");
});
