
export const formatDate = (isoString) => {
    const date = new Date(isoString);
    const options = {
        timeZone: 'Europe/London',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    };
    return date.toLocaleString('en-GB', options);
};
