const {
  ["req-one"]: requirement1,
  ["req-TWO"]: requirement2,
  ["req-3"]: requirement3
} = require("./src/libs");
const {
  ["req-FOUR"]: requirement4,
  req_five: requirement5
} = require("./src/libs2");

describe("Greeting Test", () => {
  describe("Requirement 1", () => {
    it("is a func", () => {
      expect(typeof requirement1).toEqual("function");
    });
  });

  describe("Requirement 2", () => {
    it("shows correct out put when in put is 'test'", () => {
      expect(requirement2("test")).toEqual("Hello, test.");
    });
  });

  describe("Requirement 3", () => {
    it("shows correct out put when in put is 'test'", () => {
      expect(requirement3("test")).toEqual("Hello, test.");
    });
  });

  describe("Requirement 4", () => {
    it("shows correct out put when in put is 'test'", () => {
      expect(requirement4("test")).toEqual("Hello, test.");
    });
  });

  describe("Requirement 5", () => {
    it("shows correct out put when in put is 'test'", () => {
      expect(requirement5("test")).toEqual("Hello, test.");
    });
  });
});
