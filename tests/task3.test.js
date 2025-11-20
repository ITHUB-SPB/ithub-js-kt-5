import { test, assert, describe } from "vitest";
import { formatPhones } from "../src/task3";

describe("возвращает массив маскированных тел. номеров", () => {
  test.for([
    ['российский код', ['+79111112233', '+79111112244'], ['+7 (911) 111-22-33', '+7 (911) 111-22-44']],
    ['иностранные коды', ['+3752915550505', '+573204556000'], ['+375 (291) 555-05-05', '+57 (320) 455-60-00']]
  ])("[2] %s", ([_, initialPhones, maskedPhones], { annotate }) => {
    annotate(1);
    formatPhones(initialPhones)
    assert.deepEqual(initialPhones, maskedPhones);
  });
});
