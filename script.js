// Datos de los elementos (reemplaza con tus propios datos)
const elementos = {
    "H": { nombre: "Hidrógeno", numeroAtomico: 1, masaAtomica: 1.008, fechadeDescubrimiento:1766},
    "He": { nombre: "Helio", numeroAtomico: 2, masaAtomica: 4.003, fechadeDescubrimiento:1868},
    "Li": {nombre: "Litio", numeroAtomico: 3, masaAtomica: 6.941, fechadeDescubrimiento:1817},
    "Be": {nombre: "Berilio", numeroAtomico: 4, masaAtomica: 9.012, fechadeDescubrimiento:1798},
    "B" : {nombre : "Boro", numeroAtomico: 5, masaAtomica: 10.811, fechadeDescubrimiento:1808},
    "C" : {nombre : "Carbono", numeroAtomico: 6, masaAtomica: 12.010, fechadeDescubrimiento:-3750},
    "N" : {nombre: "Nitrógeno", numeroAtomico: 7, masaAtomica: 14.006, fechadeDescubrimiento:1772},
    "O": {nombre: "Oxigeno", numeroAtomico: 8, masaAtomica: 15.999, fechadeDescubrimiento:1771},
    "F": {nombre: "Flúor", numeroAtomico: 9, masaAtomica: 18.998, fechadeDescubrimiento:1886},
    "Ne": {nombre: "Neón", numeroAtomico: 10, masaAtomica: 20.179, fechadeDescubrimiento:1898},
    "Na": {nombre: "Sodio", numeroAtomico: 11, masaAtomica: 22.989, fechadeDescubrimiento:1807},
    "Mg": {nombre: "Magnesio", numeroAtomico: 12, masaAtomica: 24.305, fechadeDescubrimiento:1801},
    "Al": {nombre: "Aluminio", numeroAtomico: 13, masaAtomica: 26.981, fechadeDescubrimiento:1825},
    "Si": {nombre: "Silicio", numeroAtomico: 14, masaAtomica:28.085, fechadeDescubrimiento: 1824},
    "P": {nombre: "Fósforo", numeroAtomico: 15, masaAtomica: 30.976, fechadeDescubrimiento: 1669},
    "S": {nombre: "Azufre", numeroAtomico: 16, masaAtomica: 32.065, fechadeDescubrimiento: 1770},
    "Cl": {nombre: "Cloro", numeroAtomico: 17, masaAtomica: 35.453, fechadeDescubrimiento:1784},
    "Ar": {nombre: "Argón", numeroAtomico: 18, masaAtomica: 39.948, fechadeDescubrimiento: 1894},
    "K": {nombre: "Potasio", numeroAtomico: 19, masaAtomica: 39.098, fechadeDescubrimiento: 1807},
    "Ca": {nombre: "Calcio", numeroAtomico: 20, masaAtomica: 40.078, fechadeDescubrimiento: 1080},
    "Sc": {nombre: "Escandio", numeroAtomico: 21, masaAtomica: 44.955, fechadeDescubrimiento: 1879},
    "Ti": {nombre: "Titanio", numeroAtomico: 22, masaAtomica: 47.867, fechadeDescubrimiento: 1792},
    "V": {nombre: "Vanadio", numeroAtomico: 23, masaAtomica: 50.941, fechadeDescubrimiento: 1801},
    "Cr": {nombre: "Cromo", numeroAtomico: 24, masaAtomica: 51.996, fechadeDescubrimiento: 1797},
    "Mn": {nombre: "Manganeso", numeroAtomico: 25, masaAtomica: 54.938, fechadeDescubrimiento: 1783},
    "Fe": {nombre: "Hierro", numeroAtomico: 26, masaAtomica: 55.845, fechadeDescubrimiento: -3500},
    "Co": {nombre: "Cobalto", numeroAtomico: 27, masaAtomica: 58.933, fechadeDescubrimiento:1732},
    "Ni": {nombre: "Niquel", numeroAtomico: 28, masaAtomica: 58.693, fechadeDescubrimiento: 1751},
    "Cu": {nombre: "Cobre", numeroAtomico: 29, masaAtomica: 63.546, fechadeDescubrimiento: -9000},
    "Zn": {nombre: "Zinc", numeroAtomico: 30, masaAtomica: 65.38, fechadeDescubrimiento: 1526},
    "Ga": {nombre: "Galio", numeroAtomico: 31, masaAtomica: 69.723, fechadeDescubrimiento: 1875},
    "Ge": {nombre: "Germanio", numeroAtomico: 32, masaAtomica: 72.60, fechadeDescubrimiento: 1886},
    "As": {nombre: "Arsenico", numeroAtomico: 33, masaAtomica: 74.921, fechadeDescubrimiento: 1649},
    "Se": {nombre: "Selenio", numeroAtomico: 34, masaAtomica: 78.96, fechadeDescubrimiento: 1817},
    "Br": {nombre: "Bromo", numeroAtomico: 35, masaAtomica: 79.904, fechadeDescubrimiento: 1826},
    "Kr": {nombre: "Kriptón", numeroAtomico: 36, masaAtomica: 83.798, fechadeDescubrimiento: 1898},
    "Rb": {nombre: "Rubidio", numeroAtomico: 37, masaAtomica: 85.467, fechadeDescubrimiento:1861},
    "Sr": {nombre: "Estroncio", numeroAtomico: 38, masaAtomica: 87.078, fechadeDescubrimiento: 1798},
    "Y" : {nombre: "Itrio", numeroAtomico: 39, masaAtomica: 88.905, fechadeDescubrimiento: 1878},
    "Zr": {nombre: "Circonio", numeroAtomico: 40, masaAtomica: 91.224, fechadeDescubrimiento: 1789},
    "Nb": {nombre: "Niobio", numeroAtomico: 41, masaAtomica: 92.906, fechadeDescubrimiento: 1801},
    "Mo": {nombre: "Molibdeno", numeroAtomico: 42, masaAtomica: 95.96, fechadeDescubrimiento: 1778},
    "Tc": {nombre: "tecnecio", numeroAtomico: 43, masaAtomica: 98, fechadeDescubrimiento: 1937},
    "Ru": {nombre: "Rutenio", numeroAtomico: 44, masaAtomica: 101.07, fechadeDescubrimiento:1808},
    "Rh": {nombre: "Rodio", numeroAtomico: 45, masaAtomica: 101.905, fechadeDescubrimiento: 1803},
    "Pd": {nombre: "Paladio", numeroAtomico: 46, masaAtomica: 106.42, fechadeDescubrimiento: 1803},
    "Ag": {nombre: "Plata", numeroAtomico: 47, masaAtomica: 107.868, fechadeDescubrimiento: -3000},
    "Cd": {nombre: "Cadmio", numeroAtomico: 48, masaAtomica: 112.442, fechadeDescubrimiento: 1817},
    "In": {nombre: "Indio", numeroAtomico: 49, masaAtomica: 114.818, fechadeDescubrimiento: 1863},
    "Sn": {nombre: "Estaño", numeroAtomico: 50, masaAtomica: 118.710, fechadeDescubrimiento: -6000},
    "Sb": {nombre: "Antimonio", numeroAtomico: 51, masaAtomica: 121.760, fechadeDescubrimiento: -1600},
    "Te": {nombre: "Telurio", numeroAtomico: 52, masaAtomica:127.60, fechadeDescubrimiento: 1783},
    "I": {nombre: "Yodo", numeroAtomico: 53, masaAtomica: 126.904, fechadeDescubrimiento: 1811},
    "Xe": {nombre: "Xenón", numeroAtomico: 54, masaAtomica: 131.293, fechadeDescubrimiento: 1898},
    "Cs": {nombre: "Cesio", numeroAtomico: 55, masaAtomica: 132.905, fechadeDescubrimiento: 1860},
    "Ba": {nombre: "Bario", numeroAtomico: 56, masaAtomica: 137.327, fechadeDescubrimiento: 1808},
    "La": {nombre: "Lantano", numeroAtomico: 57, masaAtomica: 138.905, fechadeDescubrimiento: 1839},
    "Ce": {nombre: "Cerio", numeroAtomico: 58, masaAtomica: 140.116, fechadeDescubrimiento: 1839},
    "Pr": {nombre: "Praseodimio", numeroAtomico: 59, masaAtomica: 140.907, fechadeDescubrimiento: 1885},
    "Nd": {nombre: "Neodimio", numeroAtomico: 60, masaAtomica: 144.242, fechadeDescubrimiento: 1885},
    "Pm": {nombre: "Prometio", numeroAtomico: 61, masaAtomica: 145, fechadeDescubrimiento: 1945},
    "Sm": {nombre: "Samario", numeroAtomico: 62, masaAtomica: 150.36, fechadeDescubrimiento: 1879},
    "Eu": {nombre: "Europio", numeroAtomico: 63, masaAtomica: 151.964, fechadeDescubrimiento: 1901},
    "Gd": {nombre: "Gadolinio", numeroAtomico: 64, masaAtomica: 157.25, fechadeDescubrimiento: 1880},
    "Tb": {nombre: "Terbio", numeroAtomico: 65, masaAtomica: 158.925, fechadeDescubrimiento: 1843},
    "Dy": {nombre: "Disprosio", numeroAtomico: 66, masaAtomica: 162.500, fechadeDescubrimiento: 1886},
    "Ho": {nombre: "Holmio", numeroAtomico: 67, masaAtomica: 164.930, fechadeDescubrimiento: 1878},
    "Er": {nombre: "Erbio", numeroAtomico: 68, masaAtomica: 167.259, fechadeDescubrimiento: 1842},
    "Tm": {nombre: "Tulio", numeroAtomico: 69, masaAtomica: 168.934, fechadeDescubrimiento: 1879},
    "Yb": {nombre: "Iterbio", numeroAtomico: 70, masaAtomica: 173.054, fechadeDescubrimiento: 1879},
    "Lu": {nombre: "Lutecio", numeroAtomico: 71, masaAtomica: 174.966, fechadeDescubrimiento: 1907},
    "Hf": {nombre: "Hafnio", numeroAtomico: 72, masaAtomica: 178.49, fechadeDescubrimiento: 1923},
    "Ta": {nombre: "Tántalo", numeroAtomico: 73, masaAtomica: 180.947, fechadeDescubrimiento: 1864},
    "W": {nombre: "Wolframio", numeroAtomico: 74, masaAtomica: 183.84, fechadeDescubrimiento: 1783},
    "Re": {nombre: "Renio", numeroAtomico: 75, masaAtomica: 186.207, fechadeDescubrimiento: 1925},
    "Os": {nombre: "Osmio", numeroAtomico: 76, masaAtomica: 190.23, fechadeDescubrimiento: 1803},
    "Ir": {nombre: "Iridio", numeroAtomico: 77, masaAtomica: 192.217, fechadeDescubrimiento: 1803},
    "Pt": {nombre: "Platino", numeroAtomico: 78, masaAtomica: 195.084, fechadeDescubrimiento: 1735},
    "Au": {nombre: "Oro", numeroAtomico: 79, masaAtomica: 196.966, fechadeDescubrimiento: 1848},
    "Hg": {nombre: "Mercurio", numeroAtomico: 80, masaAtomica: 200.59, fechadeDescubrimiento: -4000},
    "Ti": {nombre: "Talio", numeroAtomico: 81, masaAtomica: 204.383, fechadeDescubrimiento: 1861},
    "Pb": {nombre: "Plomo", numeroAtomico: 82, masaAtomica: 207.2, fechadeDescubrimiento: -2000},
    "Bi": {nombre: "Bismuto", numeroAtomico: 83, masaAtomica: 208.980, fechadeDescubrimiento: 1753},
    "Po": {nombre: "Polonio", numeroAtomico: 84, masaAtomica: 210, fechadeDescubrimiento: 1898},
    "At": {nombre: "Astato", numeroAtomico: 85, masaAtomica: 210, fechadeDescubrimiento: 1940},
    "Rn": {nombre: "Radón", numeroAtomico: 86, masaAtomica: 220, fechadeDescubrimiento: 1910},
    "Fr": {nombre: "Francio", numeroAtomico: 87, masaAtomica: 223, fechadeDescubrimiento: 1939},
    "Ra": {nombre: "Radio", numeroAtomico: 88, masaAtomica : 226, fechadeDescubrimiento: 1902},
    "Ac": {nombre: "Actinio", numeroAtomico: 89, masaAtomica: 227, fechadeDescubrimiento: 1899},
    "Th": {nombre: "Torio", numeroAtomico: 90, masaAtomica: 232.038, fechadeDescubrimiento: 1828},
    "Pa": {nombre: "Protanictinio", numeroAtomico: 91, masaAtomica: 2310.035, fechadeDescubrimiento: 1913},
    "U": {nombre: "uranio", numeroAtomico: 92, masaAtomica: 238.028, fechadeDescubrimiento: 1789},
    "Np": {nombre: "Neptunio", numeroAtomico: 93, masaAtomica: 237, fechadeDescubrimiento: 1939},
    "Pu": {nombre: "Plutonio", numeroAtomico: 94, masaAtomica: 244, fechadeDescubrimiento: 1941},
    "Am": {nombre: "Americio", numeroAtomico: 95, masaAtomica: 243, fechadeDescubrimiento: 1944},
    "Cm": {nombre: "Curio", numeroAtomico: 96, masaAtomica: 247, fechadeDescubrimiento:1944 },
    "Bk": {nombre: "Berkelio", numeroAtomico: 97, masaAtomica: 247, fechadeDescubrimiento: 1949},
    "Cf": {nombre: "Californio", numeroAtomico: 98, masaAtomica: 251, fechadeDescubrimiento: 1950},
    "Es": {nombre: "Einsteonio", numeroAtomico: 99, masaAtomica: 252, fechadeDescubrimiento: 1952},
    "Fm": {nombre: "Fermio", numeroAtomico: 100, masaAtomica: 157, fechadeDescubrimiento: 1952},
    "Md": {nombre: "Mendelevio", numeroAtomico: 101, masaAtomica: 158, fechadeDescubrimiento: 1953},
    "No": {nombre: "nobelio", numeroAtomico: 102, masaAtomica: 259, fechadeDescubrimiento: 1958},
    "Lr": {nombre: "Lawrencio", numeroAtomico: 103, masaAtomica: 262, fechadeDescubrimiento: 1961},
    "Rf": {nombre: "Rutherfordio", numeroAtomico: 104, masaAtomica: 261, fechadeDescubrimiento: 1969},
    "Db": {nombre: "Dubnio", numeroAtomico: 105, masaAtomica: 262, fechadeDescubrimiento: 1970},
    "Sg": {nombre: "seaborgio", numeroAtomico: 106, masaAtomica: 266, fechadeDescubrimiento: 1974},
    "Bh": {nombre: "Bhorio", numeroAtomico: 107, masaAtomica: 264, fechadeDescubrimiento: 1980},
    "Hs": {nombre: "Hasio", numeroAtomico: 108, masaAtomica: 277, fechadeDescubrimiento: 1984},
    "Mt": {nombre: "Meitnerio", numeroAtomico: 109, masaAtomica: 268, fechadeDescubrimiento: 1984},
    "Ds": {nombre: "Darmstadtio", numeroAtomico: 110, masaAtomica: 271, fechadeDescubrimiento: 1994},
    "Rg": {nombre: "Roentgenio", numeroAtomico: 111, masaAtomica: 172, fechadeDescubrimiento: 1994},
    "Cn": {nombre: "Copernicio", numeroAtomico: 112, masaAtomica: 285, fechadeDescubrimiento: 1996},
    "Nh": {nombre: "Nihonio", numeroAtomico: 113, masaAtomica: 184, fechadeDescubrimiento: 2003},
    "Fl": {nombre: "Flerovio", numeroAtomico: 114, masaAtomica: 289, fechadeDescubrimiento: 1999},
    "Mc": {nombre: "Moscovio", numeroAtomico: 115, masaAtomica: 288, fechadeDescubrimiento: 2003},
    "Lv": {nombre: "Livermorio",numeroAtomico: 116, masaAtomica: 292, fechadeDescubrimiento: 2000},
    "Ts": {nombre: "Teneso", numeroAtomico: 117, masaAtomica: 294, fechadeDescubrimiento: 2010},
    "Og": {nombre: "Oganesón", numeroAtomico: 118, masaAtomica: 294, fechadeDescubrimiento: 2002},
}
function crearTabla() {
    const tabla = document.getElementById('tabla-periodica');
    for (const simbolo in elementos) {
        const elementoDiv = document.createElement('div');
        elementoDiv.classList.add('elemento');
        elementoDiv.textContent = simbolo;
        elementoDiv.addEventListener('click', () => {
            mostrarInformacion(simbolo);
        });
        tabla.appendChild(elementoDiv);
    }
}

function mostrarInformacion(simbolo) {
    const elemento = elementos[simbolo];
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    modalText.innerHTML = `
        <h2>${elemento.nombre}</h>
        <p>Fecha de descubrimiento: ${elemento.fechadeDescubrimiento}</p
        <p>Número atómico: ${elemento.numeroAtomico}</p>
        <p>Masa atómica: ${elemento.masaAtomica}</p>
    `;
    modal.style.display = 'block';
}

const span = document.getElementsByClassName("close")[0];
span.onclick = function() {
  modal.style.display = "none";
}


crearTabla();
