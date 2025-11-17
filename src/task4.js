/**
 * @param {String} email - Адрес эл. почты
 * @returns {{ login: string, domain: string, zone: string }}
 *
 * @description Функция принимает на вход корректный адрес эл почты
 * и возвращает объект с логином, доменом и доменной зоной.
 *
 * @example
 * const result = splitEmail("example@gmail.com")
 * console.log(result) // { login: "example", domain: "gmail", zone: "com" }
 */

export function splitEmail(email) {
    const filteredEmail = email.match(/([\p{L}._]+)@([\p{L}]+)\.(.*)/iu)

    return {
        login: filteredEmail[1],
        domain: filteredEmail[2],
        zone: filteredEmail[3],
    }
}
