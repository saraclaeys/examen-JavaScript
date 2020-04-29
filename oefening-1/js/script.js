const hex = document.getElementById("hex");

//------------- check function ---------------
function checkHex(hex) {
    const hexRegex = /^[#]*([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i
    if (hexRegex.test(hex)) {
        return true;
    }
}

//*----------- parse Function -----------------
function modifyHex(hex) {
    if (hex.length == 4) {
        hex = hex.replace('#', '');
    }
    if (hex.length == 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    return hex;
}

// ------------ helper Function ---------------------
function addPound(x) {
    return '#' + x;
}