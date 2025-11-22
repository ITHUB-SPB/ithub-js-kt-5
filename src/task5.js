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
    
    if (!match) {
        return infoString;
    }
    
    const [, dateTimeStr, name, bookTitle] = match;
    const date = new Date(dateTimeStr);
    
    const isRussian = /[а-яё]/i.test(name);
    
    if (isRussian) {
        // Русская локализация
        const formattedDate = date.toLocaleDateString('ru-RU');
        const formattedTime = date.toLocaleTimeString('ru-RU');
        
        const verb = name.endsWith('а') ? 'вернула' : 'вернул(а)';
        
        return `${name} ${verb} "${bookTitle}" ${formattedDate}, ${formattedTime}`;
    } else {
        // Английская локализация
        const formattedDate = date.toLocaleDateString('en-US');
        const formattedTime = date.toLocaleTimeString('en-US');
        
        return `${name} returned "${bookTitle}" at ${formattedDate}, ${formattedTime}`;
    }
}
