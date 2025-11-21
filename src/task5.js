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
    // Извлекаем дату, имя и книгу
    const dateMatch = infoString.match(/\[(.*?)\]/);
    const nameMatch = infoString.match(/\] (.*?) </);
    const bookMatch = infoString.match(/<(.*?)>/);
    
    const dateStr = dateMatch[1];
    const name = nameMatch[1];
    const book = bookMatch[1];
    
    const date = new Date(dateStr);
    
    const isCyrillic = /[а-яА-ЯЁё]/.test(name);
    
    if (isCyrillic) {

        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        const formattedDate = `${day}.${month}.${year}, ${hours}:${minutes}:${seconds}`;
        return `${name} вернул(а) "${book}" ${formattedDate}`;
    } else {

        const month = date.getMonth() + 1;
        const day = date.getDate();
        const year = date.getFullYear();
        let hours = date.getHours();
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        
        const formattedDate = `${month}/${day}/${year}, ${hours}:${minutes}:${seconds} ${ampm}`;
        return `${name} returned "${book}" at ${formattedDate}`;
    }
}