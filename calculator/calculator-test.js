
it('should calculate the monthly rate correctly', function () {
  // ...
  const currentUIValues = {amount: 10000, years: 8, rate: 5.8};
  expect(calculateMonthlyPayment(currentUIValues)).toEqual('130.44');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const currentUIvalues = {amount: 10043, years: 8, rate: 5.8};
  expect(calculateMonthlyPayment(currentUIvalues)).toEqual('131.00');
});

it("should handle terribly high interest rates", function() {
  const currentUIvalues = {amount: 1000, years: 40, rate: 99};
  expect(calculateMonthlyPayment(values)).toEqual('82.50');
});

/// etc
