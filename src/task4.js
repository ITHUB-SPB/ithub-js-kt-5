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
    const regexEmail = /^[^@]+@[^@]+\.[^@]+$/
    
    return
}
