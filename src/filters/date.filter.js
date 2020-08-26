/**
 * Форматирование даты
 *
 * @param {*} value
 * @param {string} format - 'date' | 'time' | 'datetime'
 */

export default function dateFilter(value, format = 'date'){

    const options = {
        hour12: false
    }

    if (format.includes('date')){
        options.year = 'numeric'
        options.month = 'long';
        options.day = '2-digit';

    }

    if (format.includes('time')){
        options.hour = 'numeric'
        options.minute = 'numeric'
        options.second = 'numeric'
    }

    return new Intl.DateTimeFormat('ru-Ru', options).format(new Date(value));
}