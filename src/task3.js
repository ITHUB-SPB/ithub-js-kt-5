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
    for (const phone in phones) {
        phones[phone] = phones[phone].replace(
            /(\+\d{1,3})(\d{3,})(\d{3,})(\d{2,})(\d{2,})/,
            '$1 ($2) $3-$4-$5',
        )
    }
}
