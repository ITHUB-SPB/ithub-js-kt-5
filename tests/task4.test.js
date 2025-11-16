import { describe, test, assert } from "vitest";
import { splitEmail } from "../src/task4";

describe("возвращает информацию по емэйлу", () => {
  test.for([
    ['admin@example.com', 'admin', 'example', 'com'],
    ['инфо@кремль.рф', 'инфо', 'кремль', 'рф'],
  ])("[1] базовые случаи: %s", ([email, login, domain, zone], { annotate }) => {
    annotate(0.5);
    assert.deepEqual(splitEmail(email), { login, domain, zone });
  });

  test.for([
    ['king@palace.co.uk', 'king', 'palace', 'co.uk'],
    ['contact@edu.gov.ru', 'contact', 'edu', 'gov.ru']
  ])("[1] комплексные доменные зоны: %s", ([email, login, domain, zone], { annotate }) => {
    annotate(0.5);
    assert.deepEqual(splitEmail(email), { login, domain, zone });
  });

  test.for([
    ['security_notifier@github.com', 'security_notifier', 'github', 'com'],
    ['иван.иванов@рыбалка.рф', 'иван.иванов', 'рыбалка', 'рф']
  ])("[1] комплексные логины: %s", ({ annotate }) => {
    annotate(0.5);
    assert.deepEqual(splitEmail(email), { login, domain, zone });
  });
})