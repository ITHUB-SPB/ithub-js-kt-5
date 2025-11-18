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
  
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return emailArray.reduce((acc, email) => {
        acc[email] = emailRegex.test(email.toLowerCase());
        return acc;
    }, {});
}