export function timeToMinutes(hour, minute) {
    return ( hour * 60 ) + minute;
}

export function formatTimeToMinutes(time) {
    let [hours, minutes] = time.split(":").map(t => parseInt(t));
    return hours*60 + minutes;
}

export function timeToFormat(time) {
    const hour = time.split(":")[0];
    const minute = time.split(":")[1];

    const processedHour = hour.length > 1 ? hour : `0${hour}`;
    const processedMinute = minute.length > 1 ? minute : `0${minute}`;

    return `${processedHour}:${processedMinute}`
}

export function minutesToTime(val) {
    const minutes = val % 60;
    const hours = (val - minutes)/60;
    return timeToFormat(`${hours}:${minutes}`);
}

export function calculateMinutes(time, val = -30) {
    const [hours, minutes] = time.split(":").map(t => parseInt(t));
    const timeInMinutes = (hours*60 + minutes) + val;
    return minutesToTime(timeInMinutes);
}

export function getTimes(start, end) {
    let [startHour, startMinute] = start.split(":").map(time => parseInt(time));
    let [endHour, endMinute] = end.split(":").map(time => parseInt(time));
    let times = [];

    while(timeToMinutes(startHour, startMinute) <= (timeToMinutes(endHour, endMinute) - 30)) {
        const edgeStart = timeToFormat(`${startHour}:${startMinute}`);
        const edgeEnd = calculateMinutes(`${startHour}:${startMinute}`, +30);
        times.push({
            start: edgeStart,
            end: edgeEnd
        });

        if (!!startMinute) {
            startHour++;
            startMinute = 0;
        }
        else {
            startMinute += 30;
        }
    }

    return times;
}