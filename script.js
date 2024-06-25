var khodamData = {};

function generateKhodamName() {
  var name = document.getElementById("name").value;
  var notificationElement = document.getElementById("notification");

  if (name.trim() === "") {
    notificationElement.textContent = "Harap masukkan nama Anda.";
    notificationElement.style.display = "block";
    document.getElementById("result").style.display = "none";
    return;
  }

  if (name.trim().length < 3) {
    notificationElement.textContent = "Nama anda terlalu pendek untuk dicarikan khodam (minimal 3 huruf).";
    notificationElement.style.display = "block";
    document.getElementById("result").style.display = "none";
    return;
  }

  if (/\d/.test(name)) {
    notificationElement.textContent = "Anda tidak bisa mamasukkan angka.";
    notificationElement.style.display = "block";
    document.getElementById("result").style.display = "none";
    return;
  }

  notificationElement.style.display = "none";

  name = name.charAt(0).toUpperCase() + name.slice(1);

  var khodamNames = [
"Nasi goreng",
"Hamster kombat",
"Seblak",
"Singa putih",
"Bihun",
"Kabel data vivan",
"Rx king",
"Jokowi",
"Si gemoy",
"Si imut",
"Ambatukam",
"Ambatron",
"super charging 65 wat",
"Admin bokep",
"Jakarta",
"Jawa banget njir",
"Emrror",
"Kenapa gambar ini tidak mendapatkan banyak penggemar seperti Ronaldo dan Messi",
"Skibidi toilet",
"Gyatt",
"Nasi campur",
"Martabak khas surabaya",
"Dejek",
"Persija",
"Makassar",
"Indosiar",
"18+",
"PornHUB",
"Cantik",
"Surya kretek",
"Israel",
"Pertamina",
"Jawa barat",
"Anies baswedan",
"Prabowo",
"Gibran",
"Macan merah",
"Kanjut",
"Raja iblis",
"Ratu iblis",
"Ripper",
"Hai",
"India",
"Kecap bangau",
"King slot",
"Mewing",
"Sigma",
"Batak",
"Sulawesi",
"Google chrome",
"Facebook",
"Instagram",
"Babi jember",
"Nathan cu a on",
"Ernando bakar sate",
"4/64GB",
"Nokia",
"Keyboard samsung",
"Gada",
"Affilate tiktok",
"Casan tesla",
"Starlink",
"Bokep 4K",
"Android",
"Fomo",
"Airdrop",
"Selamat kamu mendapatkan hadiah sebesar 1juta, dipotong pajak 1juta",
"Raja cyrpto",
"Singa putih",
"Nasi kuning",
"Rendang Babi",
"Iwak",
"Holan bakri",",
"Scam",
"Munyuk",
"Informasi palsu",
"Jawir nih boss",
"Banjarmasin slowmo",
"No rispek":
"Emyu",
"Pergi kau suki",
"Sunda kontolðŸ˜‚",
"Professor yakub pencinta bule",
"Nguawor",
"Nganggur",
"Kitab kriptoðŸ˜‚",
"Diskotik bogor",
"Berteknologi tinggi",
"Macan Putih",
"Bebek Goreng",
"Ayam Geprek",
"Singa Putih",
"Buku Gambar",
"Buku Tulis",
"Penggaris",
"Papan Tulis",
"Gunting Kuku",
"Harimau",
"Macan Tutul",
"Anime",
"Macan Ompong",
"Es Teh",
"TEH JUS",
"Marimas Anggur",
"Teh Gelas",
"Jus Alpukat",
"Puntung Rokok",
"Ubur Ubur",
"Remote TV",
"Cacing Buncit",
"Monyet Mullet",
"Knalpot Mio",
"Mie Ayam",
"Bakso",
'Bakso Cuanki",
"Sumpit Gacoan",
"Standar Motor",
"Pala Mio",
"Beat Karbu",
"Jerapah",
"Badak Hitam",
"Lumba Lumba",
"Laba Laba Sunda",
"Ambatukam",
"Ambatron",
"Kelly FF",
"Kopi ABC",
"Kapal Lawut",
"Tunggu Kiris",
"Keris Tumpul",
"Kak Gem",
"Uni Bakwan",
"Sprei Gratis",
"Mejikom",
"Kuali Goreng",
"Kuah Soto",
"Cilok Idaman",
"Batagor",
"Siomay",
"Kue Pancong",
"Kipas Angin",
"Topi Upacara",
"Sepatu Adidas",
"RAJA IBLIS",
"Banaspati",
"Air Cucian Beras",
"Remote AC",
"Kosong",
"Sosok Hitam",
"Si Imut",
"Chargeran",
"Kabel Type C",
"Nenek Gayung",
"Vampire Ompong",
"Bajing Loncat",
"Ular Sawah",
"Ubi Cilembu",
"Pencil 2B",
'Korek Api",
"Ukelele",
"Pecel Lele",
"Ondel Ondel",
"Kuda Poni",
"Kuda Lumping",
"Sound System",
"Polisi Tidur",
"Ban Dalem",
"Sempak Bolong",
"Kue Pancong",
"Seblak",
"Seblak Ceker",
"Sarimi Ayam Bawang",
"Balmond",
"Mesin Bubut",
"Sate Biawak",
"Katak Bhizer",
"Kolor Ijo",
"Kucing",
"Kecebong",
"Ikan Mujaer",
"Ayam Bakar",
"Mie Gacoan",
"Kipas Angin",
"Panci Warteg",
"Jangrik Krispi",
"Sikat Gigi",
"Mesin Cuci",
"Vas Bunga",
"Kuntilanak Mewing",
"Pocong Ngesot",
"Sabun Colek",
"Pisau Dapur",
"Mio Mirza",
"Kaleng Sarden",
"Kursi Goyang",
"Masako Ayam",
"Tutup Botol",
"Undur Undur",
"Buaya Buntung",
"Celana Levis",
"Kuda Terbang",
"Cicak",
"Es Cendol",
"Ikan Hiu",
"Marimas Jeruk",
"Ikan Lohan",
"Pohon Kelapa",
"Sendal Swalow",
"Tikus Got",
"Singa Paddlepop",
"Ayam Warna Warni",
"Minyak Kayu Putih",
"Pulpen",
"Fresh Care",
"Martabak Manis",
"Martabak Asin",
"Casing HP",
"Mangkok Mie Ayam",
"Tahu Bulat",
"Garpu Siomay",
"Lontong Sayur",
"Es Kul Kul",
"Ayam Rechesee",
"Udang Saos Tiram",
"Bakso Beranak",
"Stang Motor",
"Belut Sawah",
"Ular Tangga",
"Gajah Duduk",
"Pisang Goreng",
"Spion Motor",
"Bubur Ayam",
"Tabung Gas",
"Bingkai Foto",
"Laler",
"Rengginang",
"Keset Selamat Datang",
"Kera Putih",
"Sempol Ayam",
"Bintang Laut",
"Sayur Asem",
"Tempe Bacem",
"Jepit Jemuran",
"Ikan Sapu Sapu",
"Royco Sapi",
""Tahu Gejrot",
"Masako Sapi",
"Royco Ayam",
"Sayur Lodeh",
"Jagung Bakar",
"Telur Dadar",
"Musang",
"Kanebo",
"Sabun Cuci Steam",
"Kadal Gurun",
"Domba Garut",
"Sapi Qurban",
"Barbie",
"Kelereng",
"Kuda Catur",
"Kue Putu",
"Ulat Bulu",
"Pangsit",
"Bakpau Isi Kacang",
"Kecoa Dubia",
"Naga Bearbrend",
"Pesulap Merah",
"Toji Kerupuk",
"Pohon Bijak",
"Tisu Toilet",
"Daun Pisang",
"Batu Bata",
"Cumi Cumi",
"Ale Ale",
"Telur Puyuh",
"Rujak Asem",
"Ceker Babat",
"Tuyul Wolfcut",
"Handuk Hotel",
"Sendal Jepit",
"Rokok Fajar",
"Ketupat",
"Nasi Kuning",
"Nasi Uduk",
"Kerak Telor",
"Nasi Liwet",
"Ember Bocor",
"jas Hujan",
"Bengbeng",
"Sapu Ijuk",
"Es Tebu",
"Makaroni Basah",
"Es Campur",
"Es Kelapa Muda",
"Gayung",
"Toilet Duduk",
"Ular Piton",
"Pohon Beringin",
"Jamur Krispi",
"Cireng Isi",
"Fiesta Nugget",
"Cimol Bandung",
"Semut Rangrang",
"Tongsis",
"Kerambol",
"Meja Billiard",
"Kaos Kaki",
"Supra Bapak",
"Spion Motor",
"Kelelawar",
"Laba Laba",
"Kecebong",
"Semut",
"Topeng Monyet",
"Buaya Darat",
"Ikan Cupang",
"Kaki Seribu",
"Burung Emprit",
"Singa asli Surabaya",
"Kulkas Polytron",
"Ular kadut",
"Pohon beringin",
"Janda bolong",
"Kominfo",
"Tni Amerika",
  ];

  if (khodamData.hasOwnProperty(name)) {
    var khodamName = khodamData[name].khodamName;
    var khodamDescription = khodamData[name].khodamDescription;
    displayResult(name, khodamName, khodamDescription);
  } else {
    var randomNumber = Math.random();

    if (randomNumber < 0.1) {
      var khodamName = "Kosong";
      showFakeLoadingForEmptyKhodam(name);
    } else {
      var filteredKhodamNames = khodamNames.filter(function (name) {
        return name !== "Kosong";
      });

      var randomIndex = Math.floor(Math.random() * filteredKhodamNames.length);
      var khodamName = filteredKhodamNames[randomIndex];

      generateKhodamDescription(name, khodamName);
    }
  }
}

function showFakeLoadingForEmptyKhodam(name) {
  var emptyKhodamDescriptions = [
    "Wah, sepertinya khodam Anda sedang liburan di dimensi lain. Mungkin sedang selfie dengan hantu lokal!",
    "Hmm, khodam Anda tampaknya masih dalam proses pengiriman spiritual. Mungkin terjebak macet di jalan raya alam gaib.",
    "Khodam Anda saat ini masih dalam tahap pelatihan di akademi makhluk halus. Sabar ya, nanti juga lulus kok!",
    "Ups! Khodam Anda sepertinya tersesat di labirin astral. Tenang, GPS gaib sedang menuntunnya ke Anda.",
    "Khodam Anda sedang dalam perjalanan spiritual, mencari pencerahan di gunung mistis. semoga cepat kembali!",
    "Sepertinya khodam Anda masih malu-malu. Mungkin Anda perlu menyiapkan kue dan teh untuk menyambutnya?",
    "Khodam Anda sedang antri di kantor urusan makhluk gaib. Birokrasi di alam astral ternyata tidak jauh beda!",
    "Anda terlalu unik! Para khodam masih bingung memilih siapa yang cocok. Sabar, ya, casting khodam butuh waktu.",
    "Khodam Anda masih dalam proses kloning di lab gaib. Tenang, mereka sedang berusaha membuat yang terbaik untuk Anda!",
    "Anda tidak memiliki khodam, Khodam Anda masih dalam perjalanan ghaib menuju Anda",
  ];

  Swal.fire({
    title: "Mohon Tunggu...",
    html: "Meminta bantuan dari alam gaib untuk mencari informasi tentang khodam Anda...",
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
    timer: 2000,
  }).then(() => {
    var randomIndex = Math.floor(Math.random() * emptyKhodamDescriptions.length);
    var khodamDescription = emptyKhodamDescriptions[randomIndex];
    khodamData[name] = {
      khodamName: "Kosong",
      khodamDescription: khodamDescription,
    };
    displayResult(name, "Kosong", khodamDescription);
  });
}

function generateKhodamDescription(name, khodamName) {
  var promptText =
    "Jelaskan khodam " +
    khodamName +
    " dalam Bahasa indonesia hanya 15 kata saja menggunakan lelucon dan berikan arti yang terlihat meyakinkan dengan mengaitkannya pada karakteristik hewan atau makhluk astral yang terkait dari nama " +
    name +
    ", contohnya jika khodamnya adalah Khodam kadal sakti maka contoh jawabanya kamu suka bersembunyi dengan cepat dan sangat lincah memikat hati wanita.";

  Swal.fire({
    title: "Mohon Tunggu...",
    html: "Meminta bantuan dari alam gaib untuk mencari informasi tentang khodam Anda...",
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  axios
    .post(
      "https://rerofya.github.io/cek-khodam/#api",
      {
        messages: [
          {
            role: "user",
            content: promptText,
          },
        ],
        model: "mixtral-8x7b-32768",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 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",
        },
      }
    )
    .then(function (response) {
      var khodamDescription = response.data.choices[0].message.content.trim();
      khodamData[name] = {
        khodamName: khodamName,
        khodamDescription: khodamDescription,
      };
      displayResult(name, khodamName, khodamDescription);
      Swal.close();
    })
    .catch(function (error) {
      Swal.fire("Oops...", "Terjadi kesalahan saat meminta bantuan dari alam gaib. Silakan coba lagi nanti.", "error");
    });
}

function displayResult(name, khodamName, khodamDescription) {
  document.getElementById("output-name").textContent = name;
  document.getElementById("khodam-name").textContent = khodamName;
  document.getElementById("khodam-description").textContent = khodamDescription;
  document.getElementById("result").style.display = "block";
}
