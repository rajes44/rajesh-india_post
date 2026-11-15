const test = require('node:test');
const assert = require('node:assert/strict');

test('health endpoint contract returns status ok', async () => {
  // Start the app separately with `npm run dev`, then run this smoke test.
  const response = await fetch('http://localhost:3000/api/health');
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { status: 'ok' });
});
