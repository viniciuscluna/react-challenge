import { describe, expect, test } from "vitest";
import { ConvertToLetterMatch } from "./periodicTable";
import { LetterMatch } from "./types";

describe("ConvertToLetterMatch", () => {
  test("returns array with expected periodic table element check for no occurrence", () => {
    const expectedValue: LetterMatch[] = [
      {
        char: "k",
        isInPeriodicTable: false,
      },
      { char: "i", isInPeriodicTable: false },
    ];
    expect(ConvertToLetterMatch("ki")).toStrictEqual(expectedValue);
  });

  test("returns array with expected periodic table element check for ccurrence", () => {
    const expectedValue: LetterMatch[] = [
      {
        char: "N",
        isInPeriodicTable: true,
      },
      { char: "a", isInPeriodicTable: true },
      {
        char: "v",
        isInPeriodicTable: false,
      },
      { char: "i", isInPeriodicTable: false },
      {
        char: "C",
        isInPeriodicTable: true,
      },
      { char: "l", isInPeriodicTable: true },
    ];
    expect(ConvertToLetterMatch("NaviCl")).toStrictEqual(expectedValue);
  });
});
