function goBack() {
    window.history.back();
}

function check(elem) {
    if (elem.selectedIndex == 2) {
        document.getElementById("roleSelect").style.display = 'block';
    } else {
        document.getElementById("roleSelect").style.display = 'none';
    }
}


