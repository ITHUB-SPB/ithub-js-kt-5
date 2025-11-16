import { describe, test, assert } from "vitest";
import { splitEmail } from "../src/task4";

describe("возвращает информацию по емэйлу", () => {
  test("[1] базовые случаи", ({ annotate }) => {
    annotate(1);

    const expected = {
      'admin@example.com': { login: 'admin', domain: 'example', zone: 'com' },
      'инфо@кремль.рф': { login: 'инфо', domain: 'кремль', zone: 'рф' },
      'orders@ozon.ru': { login: 'orders', domain: 'ozon', zone: 'ru' }
    }

    for (const email in expected) {
      assert.deepEqual(splitEmail(email), expected[email]);
    }
  });

  test("[1] комплексные доменные зоны", ({ annotate }) => {
    annotate(1);

    const expected = {
      'king@palace.co.uk': { login: 'king', domain: 'palace', zone: 'co.uk' },
      'contact@edu.gov.ru': { login: 'contact', domain: 'edu', zone: 'gov.ru' },
    }

    for (const email in expected) {
      assert.deepEqual(splitEmail(email), expected[email]);
    }
  });

  test("[1] комплексные логины", ({ annotate }) => {
    annotate(1);

    const expected = {
      'ivan.ivanov@booking.com': { login: 'ivan.ivanov', domain: 'booking', zone: 'com' },
      'иван.иванов@рыбалка.рф': { login: 'иван.иванов', domain: 'рыбалка', zone: 'рф' },
      'security_notifier@github.com': { login: 'security_notifier', domain: 'github', zone: 'com' }
    }

    for (const email in expected) {
      assert.deepEqual(splitEmail(email), expected[email]);
    }
  });

})