
  function tambah() {
    let angka1 = parseFloat(document.getElementById("num1").value);
    let angka2 = parseFloat(document.getElementById("num2").value);
    let hasil = angka1 + angka2;
    document.getElementById("result").innerHTML = hasil;
  }
  
  function kurang() {
    let angka1 = parseFloat(document.getElementById("num1").value);
    let angka2 = parseFloat(document.getElementById("num2").value);
    let hasil = angka1 - angka2;
    document.getElementById("result").innerHTML = hasil;
  }
  
  function kali() {
    let angka1 = parseFloat(document.getElementById("num1").value);
    let angka2 = parseFloat(document.getElementById("num2").value);
    let hasil = angka1 * angka2;
    document.getElementById("result").innerHTML = hasil;
  }
  
  function bagi() {
    let angka1 = parseFloat(document.getElementById("num1").value);
    let angka2 = parseFloat(document.getElementById("num2").value);
    let hasil = angka1 / angka2;
    document.getElementById("result").innerHTML = hasil;
}

function reset() {
      document.getElementById("num1").value = '';
      document.getElementById("num2").value = '';
      document.getElementById("result").innerHTML = 0;

  }
