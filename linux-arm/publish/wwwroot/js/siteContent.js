function myFunction(value) {
    if (value === 0) {
        var x = document.getElementById("OneDevice");
        var y = document.getElementById("TwoDevices");
        var z = document.getElementById("ThreeDevices");

        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "none";

    }
    if (value === 1) {
        var x = document.getElementById("OneDevice");
        var y = document.getElementById("TwoDevices");
        var z = document.getElementById("ThreeDevices");

        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
    else if (value === 2) {
        var x = document.getElementById("OneDevice");
        var y = document.getElementById("TwoDevices");
        var z = document.getElementById("ThreeDevices");
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "none";
    }
    else if (value === 3) {
        var x = document.getElementById("OneDevice");
        var y = document.getElementById("TwoDevices");
        var z = document.getElementById("ThreeDevices");
        x.style.display = "block";
        y.style.display = "block";
        z.style.display = "block";
    }
}