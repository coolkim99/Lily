function calculate() {
    var weight14 = document.getElementById("14weight").value;
    var weight18 = document.getElementById("18weight").value;

    var pay14 = Number(document.getElementById("14pay").value);
    var pay18 = Number(document.getElementById("18pay").value);

    var margin14 = Number(document.getElementById("14margin").value);
    var margin18 = Number(document.getElementById("18margin").value);

    var temp14 = 300000 * weight14 * 0.1716;
    var temp18 = 300000 * weight18 * 0.22;

    var cost14 = temp14 + pay14 + margin14;
    var cost18 = temp18 + pay18 + margin18;

    cost14 = Math.round(cost14);
    cost18 = Math.round(cost18);

    document.getElementById("14cost").innerHTML = cost14;
    document.getElementById("18cost").innerHTML = cost18;
    document.getElementById("14cash").innerHTML = cost14 * 1.1;
    document.getElementById("18cash").innerHTML = cost18 * 1.1;
    document.getElementById("14naver").innerHTML = cost14 * 1.1 * 1.2;
    document.getElementById("18naver").innerHTML = cost18 * 1.1 * 1.2;

    var gold = Number(document.getElementById("gold").value);

    var sec14 = gold * weight14 * 0.1716;
    var sec18 = gold * weight18 * 0.22;

    var seccost14 = sec14 + pay14 + margin14;
    var seccost18 = sec18 + pay18 + margin18;

    seccost14 = Math.round(seccost14);
    seccost18 = Math.round(seccost18);

    document.getElementById("14cost2").innerHTML = seccost14;
    document.getElementById("18cost2").innerHTML = seccost18;
    document.getElementById("14cash2").innerHTML = seccost14 * 1.1;
    document.getElementById("18cash2").innerHTML = seccost18 * 1.1;
    document.getElementById("14naver2").innerHTML = seccost14 * 1.1 * 1.2;
    document.getElementById("18naver2").innerHTML = seccost18 * 1.1 * 1.2;




}
