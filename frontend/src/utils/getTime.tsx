export function getTime() {
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    if (minutes < 10)
        return `${hours}:0${minutes}`
    else
        return `${hours}:${minutes}`;
}