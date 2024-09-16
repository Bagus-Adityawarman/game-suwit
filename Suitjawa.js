var tanya = true;
while (tanya) {
  // menangkap pilihan player
  var p = prompt("Game Suwit by Zev's\nPilih : gajah, semut, orang");
  // menangkap pilihan computer
  // membangkitkan bilangan random
  var comp = Math.random();
  if (comp < 0.34) {
    comp = "gajah";
  } else if (comp >= 0.34 && comp < 0.67) {
    comp = "orang";
  } else {
    comp = "semut";
  }
  var hasil = "";
  // menentukan rules
  if (p == comp) {
    hasil = "SERI";
  } else if (p == "gajah") {
    if (comp == "orang") {
      hasil = "MENANG";
    } else {
      hasil = "KALAH";
    }
    // ternari short
    // hasil = ( comp == 'orang') ? 'MENANG' : 'KALAH';
  } else if (p == "orang") {
    if (comp == "semut") {
      hasil = "MENANG";
    } else {
      hasil = "KALAH";
    }
  } else if (p == "semut") {
    if (comp == "gajah") {
      hasil = "MENANG";
    } else {
      hasil = "KALAH";
    }
  } else {
    hasil = "Salah memasukan pilihan";
  }
  // tampilhkan hasil
  alert("Kamu memilih = " + p + "\nVS \nKomputer memilih = " + comp + "\nHasilnya : " + hasil);

  tanya = confirm("main lagi?");
}
alert("Terimakasih sudah bermain");
