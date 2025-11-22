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
    const regex = /^\+?(\d{1,3})(\d{3})(\d{3})(\d{2})(\d{2})$/;

    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i].replace(/[^+\d]/g, ''); //оставляет + и цифры

        const match = phone.match(regex);
        if (match) {
            const countryCode = match[1];
            const areaCode = match[2];
            const group1 = match[3];
            const group2 = match[4];
            const group3 = match[5];

            // Формируем итоговую строку с правильным форматом
            phones[i] = `+${countryCode} (${areaCode}) ${group1}-${group2}-${group3}`;
        }
    }
}
