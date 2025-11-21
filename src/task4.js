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
    const [login, domainPart] = email.split('@');
    const firstDotIndex = domainPart.indexOf('.');
    const domain = domainPart.slice(0, firstDotIndex);
    const zone = domainPart.slice(firstDotIndex + 1);
    
    return {
        login: login,
        domain: domain,
        zone: zone,
    }
}
