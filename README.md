# cc‑calculator

A **tiny command‑line calculator** written in modern JavaScript (Node.js) that:

- Parses an infix arithmetic expression (e.g. `3+4*2/(1‑5)^2`).
- Converts it to **postfix** (Reverse Polish Notation) using the **Shunting‑Yard algorithm**.
- Evaluates the postfix expression with a simple stack.
- Supports `+ – * / ^` and nested parentheses, with proper operator precedence and right‑associative exponentiation.

---

## 🚀 Quick start

```bash
# Clone the repo (if you haven't already)
git clone https://github.com/subhadrakala/cc-calculator.git
cd cc-calculator

# Install dependencies (none beyond Node's built‑ins)
npm install

# Run the calculator
node calculator.js "2*(3+4)^2"
# => 98
```

The calculator expects **one** argument – the arithmetic expression – wrapped in quotes so the shell does not interpret parentheses or special characters.

---

## 📚 How it works

1. **`postfix.js`** – Implements the Shunting‑Yard algorithm.
   - Operator precedence is stored in a `Map`.
   - Uses `Array.push()` / `Array.pop()` for the operator stack.
   - Returns a space‑separated postfix string.
2. **`calculator.js`** – CLI entry point.
   - Imports the default export from `postfix.js`.
   - Calls `calculate(postfixExpression)` which evaluates the postfix tokens with a stack.
   - Prints the result with `console.log(String(result))` to avoid Node's automatic yellow‑coloring of numbers.
3. **Tests** – Located in `calculator.test.js` and `postfix.test.js`.
   - Run them with `npm test` (which executes `node --test`).
   - All 9 tests currently pass.

---

## 🧪 Running the test suite

```bash
npm test
```

You should see something like:

```
✔ Testinf simple expression (170ms)
✔ Testing operator precedence * before + (163ms)
... (all pass)
```

---

## 📦 Project structure

```
cc-calculator/
├─ calculator.js          # CLI entry point
├─ postfix.js            # Shunting‑Yard implementation (default export)
├─ calculator.test.js   # End‑to‑end CLI tests (uses execAsync)
├─ postfix.test.js      # Unit tests for the postfix conversion
├─ package.json          # npm metadata (test command)
├─ .gitignore            # Ignoring .vscode folder
└─ README.md             # ✨ This file
```

---

## 🛠️ Extending the calculator

- **Add more operators** – Update the `precedence` map in `postfix.js` and the `operators` set in `calculator.js`.
- **Support unary minus** – Slightly modify the tokenisation logic to differentiate between subtraction and negation.
- **Expose `calculate`** – Export the `calculate` function if you want to unit‑test the evaluator directly.

---

## 📜 License

MIT – feel free to fork, tweak, and use it in your own projects!
