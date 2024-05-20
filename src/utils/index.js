//Thu May 09 2024 00:00:00 GMT+0300 (GMT+03:00) to 2024-05-09
export const parseDate = (date) => {
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
    const month = date.getMonth() < 9 ? '0' + parseInt(date.getMonth() + 1) : date.getMonth() + 1
    const year = date.getFullYear()

    return year + '-' + month + '-' + day
}

export const parseDateToTime = (date) => {
    const hour = date.getHours() < 10 ? ('0' + date.getHours()) : date.getHours()
    const minute = date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()
    return hour + ':' + minute
}