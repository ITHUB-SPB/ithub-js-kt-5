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
    // Регулярное выражение для разбора email
    const regex = /^(.+)@([^.]+)(..+)$/;
    const match = email.match(regex);

        const login = match[1]; // Логин
        const domain = match[2]; // Домен
        const zone = match[3].substring(1); // Доменная зона (без точки)

        return { login, domain, zone };
    
}