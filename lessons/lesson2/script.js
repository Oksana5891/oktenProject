// let is_sunny = confirm("Зараз сонячно?");
// let is_warm = confirm("Зараз тепло?");
//
// if (is_sunny && is_warm === true) {
//     console.log("Можна йти гуляти")
// } else if (is_sunny || is_warm === true) {
//     console.log("Вдягни футболку")
// } else {
//     console.log("It sucks")
// }

let day_of_week = prompt("Який сьогодні день тижня?");

if (day_of_week.match(/^(Понеділок|Вівторок|Середа|Четвер|П'ятниця)$/i)) {
    console.log("Робочий день");
} else if (day_of_week.match(/^(Субота|Неділя)$/i)) {
    console.log("Вихідний день")
} else {
    console.log("Не вірна назва")
}
