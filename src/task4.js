/**
 * @param {String[]} emailArray - Массив строк
 * @returns {{ [email: string]: boolean }}
 *
 * @description Функция принимает на вход массив строк, потенциально
 * являющихся адресами эл. почты и возвращает объект с информацией о
 * валидности каждого из них. Критерии правильной почты возьмите из
 * исходного кода (не устанавливая ее, а скопировав нужную строку!)
 * любой из популярных библиотек для валидации (zod, valibot).
 *
 * @example
 * const emails = ['top@dot.com', 'abra@gmailcom', 'pot.mail.ru', 'grek@pro.pro']
 * { top@dot.com: true, abra@gmailcom: false , pot.mail.ru: false , grek@pro.pro: true }
 */


export function validateEmails(emailArray) {
    const emailRegex = /^\w+@\w+\.\w+$/i          //любой регистр
    return emailArray.reduce((acc, email) => {
        acc[email] = emailRegex.test(email)
        return acc
    }, {})
}


// export function validateEmails(emailArray) {
//     const emailRegex = /^\w+@\w+\.\w+$/

//     // Используем метод map для проверки каждой электронной почты
//     const resultEntries = emailArray.map(email => ([email, emailRegex.test(email)]))
    
//     // Преобразуем массив пар ключ-значение в объект
//     return Object.fromEntries(resultEntries);
// }
