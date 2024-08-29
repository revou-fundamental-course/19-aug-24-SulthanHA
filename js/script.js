// Ini Javascript
function replaceName () {
   let nama = prompt ("Siapakah Nama Anda ?", " ");
   document.getElementById ("name").innerHTML = "name" ;
}
// Navbar
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// function formValidation () {
//     // ambil DOM
//     let name = document. getElementById ('name').value;
//     // KONDISI PEMISAH
//     if (name == '') {
//         alert ('Formnya Kosong')
//         // KONDISI FORM DIISI
//         document.getElementById('result').innerHTML = '-';
//     } else {
//         // KONDISI FORM TERISI
//         document.getElementById('result').innerHTML = name;
//     }
//     console.log('name');
// }


// SlideBanner
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
setInterval(() => nextSlide(1), 3000); 
    }

    // Program add massageUS

let username = document.querySelector('#input-name')
let date = document.querySelector('#input-Date')
var gender = document.getElementsByName('input_gender');
let pesan = document.querySelector('#input-Pesan')
const submitBtn = document.querySelector('.Button_style')
const commentsCont = document.querySelector('.comment_container')

submitBtn.addEventListener('click', submitFeedback);
//untuk variabel array item newfeedback
feedbackArr = [];

function submitFeedback(e) {  
    //mengambil value nama dan tanggal lahir
    const namevalue = username.value;
    const datevalue = date.value;
    //untuk waktu realtime saat massage submit
    var dateString = new Date().toLocaleString("en-US", {timeZone: "Asia/Jakarta"});
    var formattedString = dateString.replace(", ", " - ");
    const pesanvalue = pesan.value;
    //untuk mengambil value jenis kelamin
    for (i = 0; i < gender.length; i++) {
        if (gender[i].checked){
            gendervalue = gender[i].value;
        }
    }
    //untuk validasi submit dan proses penambahan comment di bagian massage
    if (namevalue =='' || datevalue == '' || gendervalue == '' || pesanvalue == '') {
        alert('Maaf Proses input tidak dapat diproses karena ada inputan yang kosong');
    }
    else {
        alert ('Proses Input Data Behasil');

        newFeedback = {
            "id": Math.floor((Math.random() * 1000)+ 1),
            "names": namevalue,
            "dates": datevalue,
            "genders": gendervalue,
            "clock": formattedString,
            "pesans":pesanvalue
        }
        //pengambilan data array
        feedbackArr.push(newFeedback);
        //menjalankan function addFeedback untuk menambahkan komen di massage
        addFeedback(newFeedback);

    }
    e.preventDefault()

}

function addFeedback(item){
    //menentukan huruf awal dari nama yang di tulis
    const letter = (item.names).charAt(0);
    //membuat div di bagian html
    const div = document.createElement('div');
    //dari div yang telah ditambahkan di tambah class: comment_card
    div.classList = 'comment_card';
    //menulis tab massage ke index.html saat submit, dan mengambil item array dari feedbackArr
    //nilai array yang diambil untuk ditampilkan pada massage saat submit
    div.id = item.id;
    div.innerHTML = `
    <div class = "pic center_display">
                        ${letter}
                    </div>
                    <div class="comment_info">
                        <small class="names">
                            Nama: ${item.names}
                        </small>
                        <samall class="date">
                            Tanggal Lahir: ${item.dates}
                        </samall>
                        <small class="gender">
                            Jenis Kelamin: ${item.genders}
                        </small>
                        <small class="clock">
                            Current Time: ${item.clock}
                        </small>
                        <p class="comment">
                            ${item.pesans}
                        </p>
                    </div>
    `;
    // memasukan "div class = comment_card", dan "div.innerHTML" ke dalam "div class = "comment_container"" yang ada di html
    commentsCont.insertAdjacentElement('beforeend', div);

}


