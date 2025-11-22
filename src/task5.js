/**
 * @param {String} infoString - Строка с информацией о возврате
 * @returns {String} Форматированная с учетом локали строка
 *
 * @description Функция, принимающая на вход строку с информацией
 * о возврате книги в одном из указанных форматов и возвращающую
 * строку, отформатированную с учетом локали (en либо ru в
 * зависимости от имени клиента).
 *
 * @example
 * formattedReturn("[2025-11-20T03:28:40] Joseph Mitchem <Wildlife of Australia>")
 * // Joseph Mitchem returned "Wildlife of Australia" at 11/20/2025, 3:28:40 AM
 *
 * formattedReturn("[2025-11-20T12:12:14] Михаил Ландау <Уроки пения>")
 * // Михаил Ландау вернул(а) "Уроки пения" 20.11.2025, 12:12:14
 */
export function formattedReturn(infoString) {
    const regex = /\[(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})\]\s+(.+?)\s+<(.+)>/;

    const match = infoString.match(regex);

    if (!match) return '';
    const [, datetime, name, book] = match; //извлекает

    const isRussian = /[а-яё]/i.test(name);

    const date = new Date(datetime);
    
    if (isRussian) {
        const day = date.getDate().toString().padStart(2, '0');

        const month = (date.getMonth() + 1).toString().padStart(2, '0');

        const year = date.getFullYear();

        const hours = date.getHours().toString().padStart(2, '0'); 

        const minutes = date.getMinutes().toString().padStart(2, '0');

        const seconds = date.getSeconds().toString().padStart(2, '0'); //извл 1-31,0-11,####,0-23,0-59,0-59

        return `${name} вернул(а) "${book}" ${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
    } else {
        const month = date.getMonth() + 1;

        const day = date.getDate();

        const year = date.getFullYear();

        let hours = date.getHours();

        const minutes = date.getMinutes().toString().padStart(2, '0');

        const seconds = date.getSeconds().toString().padStart(2, '0'); //извл 1-12, 1-31, ####, 0-23, 0-59, 0-59
        
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12;

        return `${name} returned "${book}" at ${month}/${day}/${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
    }
}
