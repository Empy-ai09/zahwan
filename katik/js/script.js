
function showSquare() {
  document.getElementById('square-calc').classList.remove('hidden');
  document.getElementById('rectangle-calc').classList.add('hidden');
  clearResults();
}

function showRectangle() {
  document.getElementById('rectangle-calc').classList.remove('hidden');
  document.getElementById('square-calc').classList.add('hidden');
  clearResults();
}

function clearResults() {
  document.getElementById('hasil-persegi').textContent = '';
  document.getElementById('hasil-persegipanjang').textContent = '';
}

function hitungLuasPersegi() {
  const sisi = parseFloat(document.getElementById('sisi').value);
  if (isNaN(sisi)) return showError('hasil-persegi');
  const luas = sisi * sisi;
  document.getElementById('hasil-persegi').innerHTML = `Luas = ${sisi} × ${sisi} = ${luas}`;
}

function hitungKelilingPersegi() {
  const sisi = parseFloat(document.getElementById('sisi').value);
  if (isNaN(sisi)) return showError('hasil-persegi');
  const keliling = 4 * sisi;
  document.getElementById('hasil-persegi').innerHTML = `Keliling = 4 × ${sisi} = ${keliling}`;
}

function hitungLuasPersegiPanjang() {
  const panjang = parseFloat(document.getElementById('panjang').value);
  const lebar = parseFloat(document.getElementById('lebar').value);
  if (isNaN(panjang) || isNaN(lebar)) return showError('hasil-persegipanjang');
  const luas = panjang * lebar;
  document.getElementById('hasil-persegipanjang').innerHTML = `Luas = ${panjang} × ${lebar} = ${luas}`;
}

function hitungKelilingPersegiPanjang() {
  const panjang = parseFloat(document.getElementById('panjang').value);
  const lebar = parseFloat(document.getElementById('lebar').value);
  if (isNaN(panjang) || isNaN(lebar)) return showError('hasil-persegipanjang');
  const keliling = 2 * (panjang + lebar);
  document.getElementById('hasil-persegipanjang').innerHTML = `Keliling = 2 × (${panjang} + ${lebar}) = ${keliling}`;
}

function showError(elementId) {
  document.getElementById(elementId).textContent = 'Input tidak valid!';
}

// nampilin kalkulator persegi secara default pas pertama kali load
showSquare();