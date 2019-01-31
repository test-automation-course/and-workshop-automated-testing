const greeting = require("./src/index");

describe("Greeting Test", () => {
  describe("Requirement 1", () => {
    it("is a func", () => {
      expect(typeof greeting).toEqual("function");
    });
  });

  describe("Requirement 2", () => {
    it("shows correct out put when in put is 'test'", () => {
      expect(greeting("test")).toEqual("Hello, test.");
    });
  });

  describe("Requirement 3", () => {
    it("shows correct out put when in put is 'test'", () => {
      expect(greeting("test")).toEqual("Hello, test.");
    });
  });

  describe("Requirement 4", () => {
    it("shows correct out put when in put is 'test'", () => {
      expect(greeting("test")).toEqual("Hello, test.");
    });
  });

  describe("Requirement 5", () => {
    it("shows correct out put when in put is 'test'", () => {
      expect(greeting("test")).toEqual("Hello, test.");
    });
  });
});
