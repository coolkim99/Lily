function calculate() {
    var weight14 = document.getElementById("14weight").value;
    var weight18 = weight14 * 1.2

    document.getElementById("18weight").innerHTML = weight18;

    var pay = document.getElementById("pay").value;
    pay = stringNumberToInt(pay);

    // var margin = document.getElementById("margin").value;
    // margin = stringNumberToInt(margin);

    var temp14 = 320000 * weight14 * 0.1716;
    var temp18 = 320000 * weight18 * 0.22;

    var cost14 = temp14 + pay + 20000;
    var cost18 = temp18 + pay + 20000;

    cost14 = Math.ceil(cost14);
    cost18 = Math.ceil(cost18);

    document.getElementById("14cost").innerHTML = cost14.toLocaleString();
    document.getElementById("18cost").innerHTML = cost18.toLocaleString();

    var cash14 = cost14 * 1.1;
    var cash18 = cost18 * 1.1;

    cash14 = Math.ceil(cash14/1000) * 1000;
    cash18 = Math.ceil(cash18/1000) * 1000;
    document.getElementById("14cash").innerHTML = cash14.toLocaleString();
    document.getElementById("18cash").innerHTML = cash18.toLocaleString();

    var naver14 = cost14 * 1.32;
    var naver18 = cost18 * 1.32;

    naver14 = Math.ceil(naver14/1000) * 1000;
    naver18 = Math.ceil(naver18/1000) * 1000;

    document.getElementById("14naver").innerHTML = naver14.toLocaleString();
    document.getElementById("18naver").innerHTML = naver18.toLocaleString();

    var gold = document.getElementById("gold").value;
    gold = stringNumberToInt(gold);

    var sec14 = gold * weight14 * 0.1716;
    var sec18 = gold * weight18 * 0.22;

    var seccost14 = sec14 + pay + 20000;
    var seccost18 = sec18 + pay + 20000;

    seccost14 = Math.ceil(seccost14);
    seccost18 = Math.ceil(seccost18);

    document.getElementById("14cost2").innerHTML = seccost14.toLocaleString();
    document.getElementById("18cost2").innerHTML = seccost18.toLocaleString();

    var cash14v2 = seccost14 * 1.1;
    var cash18v2 = seccost18 * 1.1;

    cash14v2 = Math.ceil(cash14v2/1000) * 1000;
    cash18v2 = Math.ceil(cash18v2/1000) * 1000;
    document.getElementById("14cash2").innerHTML = cash14v2.toLocaleString();
    document.getElementById("18cash2").innerHTML = cash18v2.toLocaleString();

    var naver14v2 = seccost14 * 1.32;
    var naver18v2 = seccost18 * 1.32;

    naver14v2 = Math.ceil(naver14v2/1000) * 1000;
    naver18v2 = Math.ceil(naver18v2/1000) * 1000;
    
    document.getElementById("14naver2").innerHTML = naver14v2.toLocaleString();
    document.getElementById("18naver2").innerHTML = naver18v2.toLocaleString();
}


function inputNumberFormat(obj) {
    obj.value = comma(uncomma(obj.value));
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}

function stringNumberToInt(stringNumber){
    return parseInt(stringNumber.replace(/,/g , ''));
}