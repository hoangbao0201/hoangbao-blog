export const format = (num) =>
    // String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1,");
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
