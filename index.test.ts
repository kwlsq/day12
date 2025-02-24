import { test, expect } from "vitest"
import { triangleArea,circleFormulas, findAngle, dateDiffInDays, initialUppercase } from "./index";

test("Triangle area", () => {
    expect(triangleArea(5, 3)).toEqual(15);
})


test("Circle Formula", () => {
    expect(circleFormulas(5).diameter).toEqual(10);
    expect(circleFormulas(5).circumference).toEqual(31.41592653589793);
    expect(circleFormulas(5).area).toEqual(78.53981633974483);
})

test("Find Angle", () => {
    expect(findAngle(80,65)).toEqual(35);
})

test("Get day difference", () => {
    expect(dateDiffInDays(new Date("2024-03-19"),new Date("2024-03-21"))).toEqual(2);
})

test("Get capitalized initial", () => {
    expect(initialUppercase("Jane Doe")).toEqual("JD");
})