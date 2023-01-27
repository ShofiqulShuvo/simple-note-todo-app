

export const dateFormat = (dateString) => {

    const date = new Date(dateString).getDate()
    
    const dayNames =['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = dayNames[new Date(dateString).getDay()]

    const dayNamesSort =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayNameShort = dayNamesSort[new Date(dateString).getDay()]

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const month = monthNames[new Date(dateString).getMonth()]
    
    const year = new Date(dateString).getFullYear()


    return { date, dayName, dayNameShort, month, year}

}
