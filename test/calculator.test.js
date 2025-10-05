import calculateTax from '../calculator.js';
import assert from 'assert';
import { describe, it } from 'mocha';

describe("calculateTax", () => {

  // Test 1: No tax for earnings below 12,000
  it("should return 0 for earnings below 12,000", () => {
    assert.strictEqual(calculateTax(0), 0);
    assert.strictEqual(calculateTax(5000), 0);
    assert.strictEqual(calculateTax(11999), 0);
  });

  // Test 2: 20% tax for earnings between 12,000 and 36,000
  it("should return 20% of earnings for income between 12,000 and 36,000", () => {
    assert.strictEqual(calculateTax(12000), 2400); // 0.2 * 12000
    assert.strictEqual(calculateTax(20000), 4000); // 0.2 * 20000
    assert.strictEqual(calculateTax(35999), 7199.8); // 0.2 * 35999
  });

//   // Test 3: 40% tax for earnings above 36,000
//   it("should return 40% of earnings for income above 36,000", () => {
//     assert.strictEqual(calculateTax(37000), 14800); // 0.4 * 37000
//     assert.strictEqual(calculateTax(50000), 20000);   // 0.4 * 50000
//   });

});
