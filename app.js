let clock = () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let period = "";

    if (hours == 0) {
        hours = 12;
        period = "am";
    } else if (hours < 12) {
        period = "am";
    } else if (hours == 12) {
        period = "pm";
    } else if (hours > 12) {
        hours = hours - 12;
        period = "pm";
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = `${hours}:${minutes}`
    console.log(time)

    document.getElementById("time").innerText = time + period;
    setTimeout(clock, 1000);

}
clock();

let changeTextColor = () => {
    document.getElementById("fullpage").style.color = event.target.value;
}

txtcolor.addEventListener('input', function () {
    let newtxtcolor = event.target.value
    console.log(event.target.value)
    changeTextColor(newtxtcolor);
})

let changeBgColor = () => {
    document.getElementById("fullpage").style.backgroundColor = event.target.value;
}

bgcolor.addEventListener('input', function () {
    let newbgcolor = event.target.value
    console.log(event.target.value)
    changeBgColor(newbgcolor);
})
