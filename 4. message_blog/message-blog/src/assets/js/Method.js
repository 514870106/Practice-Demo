export default function addDate() {
    var nowDate = new Date();
    let date = {
        year: nowDate.getFullYear(),
        month: nowDate.getMonth() + 1,
        date: nowDate.getDate(),
    }
    var systemDate = date.year + '-'  + date.month + '-' + date.date;
    return(systemDate);
}