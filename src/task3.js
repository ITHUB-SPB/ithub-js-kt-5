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
        const phone = phones[i]
        
        const cleanPhone = phone.replace(/[^\d+]/g, '')
        
        const plusIndex = cleanPhone.indexOf('+');
        const digits = cleanPhone.slice(plusIndex + 1)
        
        let codeLength = 1;
        if (digits.startsWith('375')) codeLength = 3
        else if (digits.startsWith('57') || digits.startsWith('37')) codeLength = 2
        
        const countryCode = '+' + digits.slice(0, codeLength)
        const PartOfNum = digits.slice(codeLength)
        
        const group1 = PartOfNum.slice(0, 3)
        const group2 = PartOfNum.slice(3, 6)
        const group3 = PartOfNum.slice(6, 8)
        const group4 = PartOfNum.slice(8, 10)
        
        phones[i] = `${countryCode} (${group1}) ${group2}-${group3}-${group4}`
    }
}
