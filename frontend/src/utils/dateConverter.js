const dateConvert = (date) => {
    return new Date(date).toLocaleDateString("en", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

export default dateConvert;