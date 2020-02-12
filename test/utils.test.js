const utils = require('../app/bookshop_utils');

describe("utils.addVAT", () => {
  test("returns 36 when passed 30", () => {
    expect(utils.addVAT(30)).toBe(36);
  });

  test("returns 120 when passed 100", () => {
    expect(utils.addVAT(100)).toBe(120);
  });
  test("returns 118.8 when passed 99", () => {
    expect(utils.addVAT(99)).toBe(118.8);
  });
});


describe("utils.getFullName", () => {
  test("returns Haruki Murakami when passed Haruki and Murakami", () => {
    expect(utils.getFullName("Haruki", "Murakami")).toBe("Haruki Murakami");
  });
});

describe("utils.makeHalfPrice", () => {
  test("returns the pricewith a 50% discount", () => {
    expect(utils.makeHalfPrice(80)).toBe(40);
  });
});

describe("utils.countBooks", () => {
  test ("returns 2 when passed['Harry Potter', 'The invisible woman']",() => {
      expect(utils.countBooks(['Harry Potter', 'The invisible woman'])).toBe(



        4 |   describe("catalogueService.countBooks", () => {
          5 |     test("returns the number of books in the list", () => {
        > 6 |       expect(catalogueService.countBooks()).toBe(20);
            |                                             ^
          7 |     });
          8 |   });
          9 | });

