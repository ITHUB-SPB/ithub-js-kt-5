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
    return emailArray.reduce((acc, x) => {
        /* from: https://github.com/colinhacks/zod/blob/50bba5462546401939920a6566a81c0d9c8ef7e1/packages/zod/src/v4/core/regexes.ts#L37 */
        acc[x] = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/.test(x)
        return acc
    }, {})
}
