function validateForm() {
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value.trim();
    let genres = document.getElementsByName("genre");
    let genreSelected = false;
    for (let i = 0; i < genres.length; i++) {
        if (genres[i].checked) {
            genreSelected = true;
            break;
        }
    }

    if (!name || !age || !genreSelected) {
        document.getElementById("resultMessage").innerText = "Будь ласка, заповніть усі поля перед відправкою.";
        return false;
    }

    document.getElementById("resultMessage").innerText = "Дякуємо за участь в опитуванні!";
    return false;
}

function calculateTimeToLevel() {
    let xpNeeded = parseFloat(document.getElementById("xpNeeded").value);
    let xpPerHour = parseFloat(document.getElementById("xpPerHour").value);

    if (isNaN(xpNeeded) || isNaN(xpPerHour) || xpPerHour <= 0) {
        document.getElementById("xpResult").innerText = "Введіть коректні значення.";
        return;
    }

    let hours = xpNeeded / xpPerHour;
    document.getElementById("xpResult").innerText = hours.toFixed(2);
}
