function volum_sphare() {
    var volume;
    var radius = document.getElementById("radius").value;
    radius = Math.abs(radius);
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volum = volume.toFixed(4);
    document.getElementById('volume').value = volum;
    return false;
}

window.onload = document.getElementById('MyForm').onsubmit = volum_sphere;