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
    const match = infoString.match(/\[([^\]]+)\] ([^<]+) <([^>]+)>/);
    if (!match) return '';
    
    const [, dateTime, name, book] = match;
    
    
    const isRussian = /[а-яА-Я]/.test(name);
    
    const date = new Date(dateTime);
    
    if (isRussian) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');
        return `${name.trim()} вернул(а) "${book}" ${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
    } else {
        const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        };
        
        const formattedDate = date.toLocaleString('en-US', options);
        return `${name.trim()} returned "${book}" at ${formattedDate}`;
    }
}
