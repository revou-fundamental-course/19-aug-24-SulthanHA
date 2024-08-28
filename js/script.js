// Ini Javascript

function formValidation () {
    // ambil DOM
    let name = document. getElementById ('name').value;
    // KONDISI PEMISAH
    if (name == '') {
        alert ('Formnya Kosong')
        // KONDISI FORM DIISI
        document.getElementById('result').innerHTML = '-';
    } else {
        // KONDISI FORM TERISI
        document.getElementById('result').innerHTML = name;
    }
    console.log('name');
}

let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
    showBanner (indexSlide += n);

}

function showBanner (indexBanner) {
    let listImage = document.getElementsByClassName ('banner-img');
    console.log ('indexBanner:' + indexBanner)
    console.log ('listImage:' + listImage.length)
    if (indexBanner > listImage.length) indexSlide =1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
    console.log(listImage);

}

