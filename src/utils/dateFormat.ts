export const dateFormat = (date: Date): string => {
    return date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate() + '.' + (date.getMonth()+ 1) + '.' + date.getFullYear();
}







