/**
 * @param {String[]} phones - Неформатированные тел. номера
 * @returns {undefined}
 *
 * @description Функция принимает на вход массив телефонных номеров и
 * модифицирует их на месте, превращая к виду `+код (ххх) ххх-хх-хх`
 *
 * @example
 * const phones = ['+79111112233','+79111112244','+79111112266']
 * formatPhones(phones)
 * console.log(phones) // ['+7 (911) 111-22-33', '+7 (911) 111-22-44', '+7 (911) 111-22-66']
 */
export function formatPhones(phones) {
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        
        let codeLength = 2; 
        if (phone.startsWith('+375') || phone.startsWith('+998')) {
            codeLength = 4; 
        } else if (phone.startsWith('+57')) {
            codeLength = 3; 
        }
        
        const code = phone.slice(0, codeLength);
        const area = phone.slice(codeLength, codeLength + 3);
        const part1 = phone.slice(codeLength + 3, codeLength + 6);
        const part2 = phone.slice(codeLength + 6, codeLength + 8);
        const part3 = phone.slice(codeLength + 8, codeLength + 10);
        
        phones[i] = `${code} (${area}) ${part1}-${part2}-${part3}`;
    }
}
