function clock() {
    let date = new Date();
    let nHours = date.getHours();
    let nMinutes = date.getMinutes();
    let sPeriod = "";

    if (nHours === 0) {
        nHours = 12;
        sPeriod = "AM";
    } else if (nHours < 12) {
        sPeriod = "AM";
    } else if (nHours == 12) {
        sPeriod = "PM";
    } else if (nHours > 12) {
        nHours = nHours - 12;
        sPeriod = "PM";
    }

    if (nMinutes < 10) {
        nMinutes = "0" + nMinutes;
    }

    let sTime = `${nHours}:${nMinutes}`;
    // console.log(sTime);

    document.querySelector("#time").innerText = sTime;
    document.querySelector("#ampm").innerText = sPeriod;
    setTimeout(clock, 1000);
}

function changeTextColor(event) {
    document.querySelector("#fullpage").style.color = event.target.value;
}

function changeBgColor(event) {
    document.querySelector("#fullpage").style.backgroundColor = event.target.value;
}

document.querySelector("#txtcolor").addEventListener("input", function (event) {
    let newtxtcolor = event.target.value;
    console.log(event.target.value);
    changeTextColor(newtxtcolor);
})

document.querySelector("#bgcolor").addEventListener("input", function (event) {
    let newbgcolor = event.target.value;
    console.log(event.target.value);
    changeBgColor(newbgcolor);
})

clock();

