function tampilkanJam() {

  let sekarang = new Date();

  let hariAngka = sekarang.getDay();
  let tanggal = sekarang.getDate();
  let bulanAngka = sekarang.getMonth();
  let tahun = sekarang.getFullYear();

  let jam = sekarang.getHours();
  let menit = sekarang.getMinutes();
  let detik = sekarang.getSeconds();

  // format 2 digit
  jam = jam < 10 ? "0" + jam : jam;
  menit = menit < 10 ? "0" + menit : menit;
  detik = detik < 10 ? "0" + detik : detik;

  // nama hari
  const hariList = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  let hari = hariList[hariAngka];

  // nama bulan
  const bulanList = ["Januari","Februari","Maret","April","Mei","Juni",
                     "Juli","Agustus","September","Oktober","November","Desember"];
  let bulan = bulanList[bulanAngka];

  // PASARAN JAWA
  let pasaran = ["Wage","Kliwon","Legi","Pahing","Pon"];

  let epoch = new Date(1970, 0, 1);
  let selisihHari = Math.floor((sekarang - epoch) / (1000 * 60 * 60 * 24));
  let indeksPasaran = selisihHari % 5;

  // tampilkan tanggal
  document.getElementById("tanggal").innerHTML =
    `${hari} ${pasaran[indeksPasaran]}, ${tanggal} ${bulan} ${tahun}`;

  // tampilkan jam
  document.getElementById("jam").innerHTML =
    `${jam}<span class='kedip'>:</span>${menit}<span class='kedip'>:</span>${detik}`;
}

// update tiap detik
setInterval(tampilkanJam, 1000);

// panggil pertama
tampilkanJam();