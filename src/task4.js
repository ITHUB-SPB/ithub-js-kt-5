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
    const regex = /^([^@]+)@([^.]+)\.(.+)$/;
    const match = email.match(regex);
    
    return {
        login: match[1],
        domain: match[2],
        zone: match[3],
    }
}
