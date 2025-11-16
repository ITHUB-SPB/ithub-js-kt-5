import { describe, test, assert } from "vitest";
import { formattedReturn } from "../src/task5";

describe("возвращает строку о возврате согласно локали", () => {
  test.for([
    ["[2025-11-20T03:28:40] Joseph Mitchem <Wildlife of Australia>", 'Joseph Mitchem returned "Wildlife of Australia" at 11/20/2025, 3:28:40 AM'],
    ["[2020-05-15T13:00:00] Joseph Mitchem <Game of Thrones>", 'Joseph Mitchem returned "Game of Thrones" at 5/15/2020, 1:00:00 PM'],
    ["[2000-01-10T10:30:00] Charles Dunmore <Creatures>", 'Charles Dunmore returned "Creatures" at 1/10/2000, 10:30:00 AM']
  ])("[0.5] английская локаль", ([input, expected], { annotate }) => {
    annotate(0.5);
    assert.deepEqual(formattedReturn(input), expected);
  });

  test.for([
    ["[2025-11-20T12:12:14] Михаил Ландау <Уроки пения>", 'Михаил Ландау вернул(а) "Уроки пения" 20.11.2025, 12:12:14'],
    ["[2020-05-15T13:00:00] Иван Иванов <Game of Thrones>", 'Иван Иванов вернул(а) "Game of Thrones" 15.05.2020, 13:00:00'],
    ["[2000-01-10T10:30:00] Марианна Рыбакова <Creatures>", 'Марианна Рыбакова вернул(а) "Creatures" 10.01.2000, 10:30:00']
  ])("[0.5] российская локаль", ([input, expected], { annotate }) => {
    annotate(0.5);
    assert.deepEqual(formattedReturn(input), expected);
  });

});