import { expect } from "chai";
import { sum, sub, mult, div } from "../src/main";
describe("Calc", () => {
  describe("Smoke test", () => {
    it("should exists method sum", () => {
      expect(sum).to.exist;
    });
    it("should exists method sub", () => {
      expect(sub).to.exist;
    });
    it("should exists method mult", () => {
      expect(mult).to.exist;
    });
    it("should exists method div", () => {
      expect(div).to.exist;
    });
  });

  describe("Sum", () => {
    it("should return 4 when sum(2,2)", () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });
  describe("Sub", () => {
    it("should return 0 when sub(2,2)", () => {
      expect(sub(2, 2)).to.be.equal(0);
    });
  });
  describe("Mult", () => {
    it("should return 4 when sum(2,2)", () => {
      expect(mult(2, 2)).to.be.equal(4);
    });
  });
  describe("Div", () => {
    it("should return 1 when div(2,2)", () => {
      expect(div(2, 2)).to.be.equal(1);
    });
    it("should return `Não é possível dividir por zero`", function () {
      expect(div(4, 0)).to.be.equal("Não é possível divisão por zero!");
    });
  });
});
