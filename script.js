const elements = [
    { symbol: 'H', name: 'Hidrógeno', number: 1, mass: 1.008, group: 1, period: 1, family: 'no-metal', discovery: 1766 },
    { symbol: 'He', name: 'Helio', number: 2, mass: 4.003, group: 18, period: 1, family: 'gas-noble', discovery: 1895 },
    { symbol: 'Li', name: 'Litio', number: 3, mass: 6.941, group: 1, period: 2, family: 'metal-alcalino', discovery: 1817},
    { symbol: 'Be', name: 'Berilio', number: 4, mass: 9.012182, group: 2, period: 2, family: 'metal-alcalinoterreo', discovery: 1798},
    { symbol: 'B', name: 'Boro', number: 5, mass: 10.811, group: 13, period: 2, family: 'metaloide', discovery: 1808},
    { symbol: 'C', name: 'Carbono', number: 6, mass: 12.0107, group: 14, period: 2, family: 'no-metal', discovery: -3750},
    { symbol: 'N', name: 'Nitrógeno', number: 7, mass: 14.0067, group: 15, period: 2, family: 'no-metal', discovery:1772},
    { symbol: 'O', name: 'Oxigeno', number: 8, mass: 15.9994, group: 16, period: 2, family: 'no-metal', discovery:1771},
    { symbol: 'F', name: 'Flúor', number: 9, mass: 18.998403, group: 17, period: 2,family: 'halogeno', discovery: 1886},
    { symbol: 'Ne', name: 'Neón', number: 10, mass: 20.1797, group: 18, period: 2, family: 'gas-noble', discovery: 1898},
    { symbol: 'Na', name: 'Sodio', number : 11, mass: 22.98976, group: 1, period: 3, family: 'metal-alcalino', discovery: 1807},
    { symbol: 'Mg', name: 'Magnesio', number: 12, mass: 24.3050, group: 2, period: 3, family: 'metal-alcalinoterreo', discovery: 1801},
    { symbol: 'Al', name: 'Aluminio', number: 13, mass: 26.98153, group: 13, period: 3, family: 'Otro metal', discovery: 1825},
    { symbol: 'Si', name: 'Silicio', number: 14, mass: 28.0855, group: 14, period: 3, family: 'metaloide', discovery: 1824},
    { symbol: 'P', name: 'Fósforo', number: 15, mass: 30.97696, group: 15, period: 3, family: 'no-metal', discovery: 1669},
    { symbol: 'S', name: 'Azufre', number: 16, mass: 32.065, group: 16, period: 3, family: 'no-metal', discovery: 1770},
    { symbol: 'Cl', name: 'Cloro', number: 17, mass: 35.453, group: 17, period: 3, family: 'halogeno', discovery: 1784},
    { symbol: 'Ar', name: 'Argón', number: 18, mass: 39.940, group: 18, period: 3, family: 'gas-noble', discovery: 1894},
    { symbol: 'K', name: 'Potasio', number: 19, mass: 39.0983, group: 1, period: 4, family: 'metal-alcalino', discovery: 1807},
    { symbol: 'Ca', name: 'Calcio', number: 20, mass: 40.078, group: 2, period: 4, family: 'metal-alcalinoterreo', discovery: 1808},
    { symbol: 'Sc', name: 'Escancio', number: 21, mass: 44.95591, group: 3, period: 4, family: 'metal-de-transicion', discovery: 1879},
    { symbol: 'Ti', name: 'Titanio', number: 22, mass: 47.867, group: 4, period: 4, family: 'metal-de-transicion', discovery: 1791},
    { symbol: 'V', name: 'Vanadio', number: 23, mass: 50.9415, group: 5, period: 4, family: 'metal-de-transicion', discovery: 1801},
    { symbol: 'Cr', name: 'Cromo', number: 24, mass: 51.9962, group: 6, period: 4, family: 'metal-de-transicion', discovery: 1797},
    { symbol: 'Mg', name: 'Manganeso', number: 25, mass: 54.93804, group: 7, period: 4, family: 'metal-de-transicion', discovery: 1783},
    { symbol: 'Fe', name: 'Hierro', number: 26, mass: 55.845, group: 8, period: 4, family: 'metal-de-transicion', discovery: -3500}, 
    { symbol: 'Co', name: 'Cobalto', number: 27, mass: 58.93319, group: 9, period: 4, family: 'metal-de-transicion', discovery: 1732},
    { symbol: 'Ni', name: 'Niquel', number: 28, mass: 58.93319, group: 10, period: 4, family: 'metal-de-transicion', discovery: 1751},
    { symbol: 'Cu', name: 'Cobre', number: 29, mass: 63.564, group: 11, period: 4, family: 'metal-de-transicion', discovery: -9000},
    { symbol: 'Zn', name: 'Zinc', number: 30, mass: 65.38, group: 12, period: 4, family: 'metal-de-transicion', discovery: 1526},
    { symbol: 'Ga', name: 'Galio', number: 31, mass: 69.723, group: 13, period: 4, family: 'Otro metal', discovery: 1875}, 
    { symbol: 'Ge', name: 'Germanio', number: 32, mass: 72.64, group: 14, period: 4, family: 'mataloide', discovery: 1886},
    { symbol: 'As', name: 'Arsénico', number: 33, mass: 74.92160, group: 15, period: 4, family: 'metaloide', discovery: 1649},
    { symbol: 'Se', name: 'Selenio', number: 34, mass: 78.96, group: 16, period: 4, family: 'no-metal', discovery: 1817},
    { symbol: 'Br', name: 'Bromo', number: 35, mass: 79.904, group: 17, period: 4, family: 'halogeno', discovery: 1826},
    { symbol: 'Kr', name: 'Kriptón', number: 36, mass: 83.798, group: 18, period: 4, family: 'gas-noble', discovery: 1898},
    { symbol: 'Rb', name: 'Rubidio', number: 37, mass: 85.4678, group: 1, period: 5, family: 'metal-alcalino', discovery: 1861},
    { symbol: 'Sr', name: 'Estroncio', number: 38, mass: 87.62, group: 2, period: 5, family: 'metal-alcalinoterreo', discovery: 1798},
    { symbol: 'Y', name: 'Itrio', number: 39, mass: 88.90585, group: 3, period: 5, family: 'metal-de-transicion', discovery: 1794}, 
    { symbol: 'Zr', name: 'Circonio', number: 40, mass: 91.224, group: 4, period: 5, family: 'metal-de-transicion', discovery: 1789},
    { symbol: 'Nb', name: 'Niobio', number: 41, mass: 92.90638, group: 5, period: 5, family: 'metal-de-transicion', discovery: 1801},
    { symbol: 'Mo', name: 'Molibdeno', number: 42, mass: 95.96, group: 6, period: 5, family: 'metal-de-transicion', discovery: 1778},
    { symbol: 'Tc', name: 'Tecnecio', number: 43, mass: 98, group: 7, period: 5, family: 'metal-de-transicion', discovery: 1937},
    { symbol: 'Ru', name: 'Rutenio', number: 44, mass: 101.07, group: 8, period: 5, family: 'metal-de-transicion', discovery: 1808},
    { symbol: 'Rh', name: 'Rodio', number: 45, mass: 102.9055, group: 9, period: 5, family: 'metal-de-transicion', discovery: 1803},
    { symbol: 'Pd', name:  'Paladio', number: 46, mass: 106.42, group: 10, period: 5, family: 'metal-de-transicion', discovery: 1803},
    { symbol: 'Ag', name: 'Plata', number: 47, mass: 107.8682, group: 11, period: 5, family: 'metal-de-transicion', discovery: -3000},
    { symbol: 'Cd', name: 'Cadmio', number: 48, mass: 112.441, group: 12, period: 5, family: 'metal-de-transicion', discovery: 1817},
    { symbol: 'In', name: 'Indio', number: 49, mass: 114.818, group: 13, period: 5, family: 'otro-metal', discovery: 1863},
    { symbol: 'Sn', name: 'Estaño', number: 50, mass: 118.719, group: 14, period: 5, family: 'otro-metal', discovery: -6000},
    { symbol: 'Sb', name: 'Antimonio', number: 51, mass: 121.760, group: 15, period: 5, family: 'metaloide', discovery: -1600},
    { symbol: 'Te', name: 'Telurio', number: 52, mass: 127.60, group: 16, period: 5, family: 'metaloide', discovery: 1782}, 
    { symbol: 'I', name: 'Yodo', number: 53, mass: 126.9044, group: 17, period: 5, family: 'halogeno', discovery: 1811},
    { symbol: 'Xe', name: 'Xenón', number: 54, mass: 131.293, group: 18, period: 5, family: 'gas-noble', discovery: 1898},
    { symbol: 'Cs', name: 'Cesio', number: 55, mass: 132.9054, group: 1, period: 6, family: 'metal-alcalino', discovery: 1860},
    { symbol: 'Ba', name: 'Bario', number: 56, mass: 137.327, group: 2, period: 6, family: 'metal-alcalinoterreo', discovery: 1808},
    { symbol: 'La', name: 'Lanrano', number: 57, mass: 138.9054, group:'n/a', period: 'n/a', family: 'lantanido', discovery: 1839},
    { symbol: 'Ce', name: 'Cerio', number: 58, mass: 140.116, group: 'N/a', period: 'n/a', family: 'lantanido', discovery: 1839},
    { symbol: 'Pr', name: 'Praseodimio', number: 59, mass:140.9076, group: 'n/a', period: 'n/a', family: 'lantanido', discovery: 1885},
    { symbol: 'Nd', name: 'Neodimio', number: 60, mass: 144.242, group: 'n/a', period: 'n/a', family: 'lantanido', discovery: 1885},
    { symbol: 'Pm', name: 'Prometio', number: 61, mass: 145, group: 'n/a', period: 'n/a', family: 'lantanido', discovery: 1945},
    { symbol: 'Sm', name: 'Samario', number: 62, mass: 150.36, group: 'n/a', period: 'n/a', family: 'lantanido', discovery: 1879},
    { symbol: 'Eu', name: 'Europio', number: 63, mass: 151.964, group: 'n/a', period: 'n/a', family: 'lantanido', discovery: 1901},
    { symbol: 'Gd', name: 'Gadolinio', number: 64, mass: 157.25, group: 'n/a', period: 'n/a', family: 'lantanido', discovery: 1880},
    { symbol: 'Tb', name: 'Terbio', number: 65, mass: 158.9253, group: 'n/a', period: 'n/a', family: 'lantanido', discovery: 1843},
    { symbol: 'Dy', name: 'Disprosio', number: 66, mass: 162.500, group: 'n/a', period: 'n/a', family: 'lantanido', discovery: 1886},
    { symbol: 'Ho', name: 'Holmio', number: 67, mass: 164.9303, group: 'n/a', period: 'n/a', family: 'lantanido', discovery: 1878},
    { symbol: 'Er', name: 'Erbio', number: 68, mass: 167.259, group: 'n/a', period: 'n/a', family: 'lantanido', discovery: 1842},
    { symbol: 'Tm', name: 'Tulio', number: 69, mass: 168.9342, group: 'n/a', period: 'n/a', family: 'lantanido', discovery: 1879},
    { symbol: 'Yb', name: 'Iterbio', number: 70, mass: 173.054, group: 'n/a', period: 'n/a', family: 'lantanido', discovery: 1878},
    { symbol: 'Lu', name: 'Lutecio', number: 71, mass: 174.9668, group: 3, period: 6, family: 'metal-de-transicion', discovery: 1907},
    { symbol: 'Hf', name: 'Hafnio', number: 72, mass: 178.49, group: 4, period: 6, family: 'metal-de-transicion', discovery: 1923},
    { symbol: 'Ta', name: 'Tántalo', number: 73, mass: 180.9478, group: 5, period: 6, family: 'metal-de-transicion', discovery: 1864},
    { symbol: 'W', name: 'Wolframio', number: 74, mass: 183.84, group: 6, period: 6, family: 'metal-de-transicion', discovery: 1783},
    { symbol: 'Re', name: 'Renio', number: 75, mass: 186.297, group: 7, period: 6, family: 'metal-de-transicion', discovery: 1925},
    { symbol: 'Os', name: 'Osmio', number: 76, mass: 190.23, group: 8, period: 6, family: 'metal-de-transicion', discovery: 1803},
    { symbol: 'Ir', name: 'Iridio', number: 77, mass: 192.217, group: 9, period: 6, family: 'metal-de-transicion', discovery: 1803},
    { symbol: 'Pt', name: 'Platino', number: 78, mass: 195.084, group: 10, period: 6, family: 'metal-de-transicion', discovery: 1735},
    { symbol: 'Au', name: 'Oro', number: 79, mass: 196.967, group: 11, period: 6, family: 'metal-de-transicion', discovery: -3000 },
    { symbol: 'Hg', name: 'Mercurio', number: 80, mass: 200.59, group: 12, period: 6, family: 'metal-de-transicion', discovery: -1500},
    { symbol: 'Ti', name: 'Talio', number: 81, mass: 204.3833, group: 13, period: 6, family: 'Otro metal', discovery: 1861},
    { symbol: 'Pb', name: 'Plomo', number: 82, mass: 207.2, group: 14, period: 6, family: 'Otro metal', discovery: -7000},
    { symbol: 'Bi', name: 'Bismuto', number: 83, mass: 208.9804, group: 15, period: 6, family: 'Otro metal', discovery: 1753},
    { symbol: 'Po', name: 'Polonio', number: 84, mass: 210, group: 16, period: 6, family: 'metaloide', discovery: 1898},
    { symbol: 'At', name: 'Astato', number: 85, mass: 210, group: 17, period: 6, family: 'halogeno', discovery: 1940},
    { symbol: 'Rn', name: 'Radón', number: 86, mass: 220, group: 18, period: 6, family: 'gas-noble', discovery: 1910},
    { symbol: 'Fr', name: 'Francio', number: 87, mass: 223, group: 1, period: 7, family: 'metal-alcalino', discovery: 1939},
    { symbol: 'Ra', name: 'Radio', number: 88, mass: 226, group: 2, period: 7, family: 'metal-alcalinoterreo', discovery: 1902},
    { symbol: 'Ac', name: 'Actinio', number: 89, mass: 227, group: 'n/a', period: 'n/a', family: 'actinido', discovery: 1899},
    { symbol: 'Th', name: 'Torio', number: 90, mass: 232.0380, group: 'n/a', period: 'n/a', family: 'actinido', discovery: 1828},
    { symbol: 'Pa', name: 'Protactinio', number: 91, mass: 231.0358, group: 'n/a', period: 'n/a', family: 'actinido', discovery: 1913},
    { symbol: 'U', name: 'Uranio', number: 92, mass: 238.0289, group: 'n/a', period: 'n/a', family: 'actinido', discovery: 1789},
    { symbol: 'Np', name: 'Neptunio', number: 93, mass: 237, group: 'n/a', period: 'n/a', family: 'actinido', discovery: 1939},
    { symbol: 'Pu', name: 'Plutonio', number: 94, mass: 244, group: 'n/a', period: 'n/a', family: 'actinido', discovery: 1941},
    { symbol: 'Am', name: 'Americio', number: 95, mass: 243, group: 'n/a', periop: 'n/a', family: 'actinido', discovery: 1944},
    { symbol: 'Cm', name: 'Curio', number: 96, mass: 247, group: 'n/a', period: 'n/a', family: 'actinido', discovery: 1944},
    { symbol: 'Bk', name: 'Berkelio', number: 97, mass: 247, group: 'n/a', period: 'n/a', family: 'actinido', discovery: 1949},
    { symbol: 'Cf', name: 'Californio', number: 98, mass: 251, group: 'n/a', period: 'n/a', family: 'actinido', discovery: 1950},
    { symbol: 'Es', name: 'Einstenio', number: 99, mass: 252, group: 'n/a', period: 'n/a', family: 'actinido', discovery: 1952},
    { symbol: 'Fm', name: 'Fermio', number: 100, mass: 257, group: 'n/a', period: 'n/a', family: 'actinido', discovery: 1952},
    { symbol: 'Md', name: 'Mendelevio', number: 101, mass: 258, group: 'n/a', period: 'n/a', family: 'actinido', discovery: 1953},
    { symbol: 'No', name: 'Nobelio', number: 102, mass: 259, group: 'n/a', period: 'n/a', family: 'actinido'},
    { symbol: 'Lr', name: 'Lawrencio', number: 103, mass: 262, group: 3, period: 7, family: 'metal-de-transicion', discovery: 1961},
    { symbol: 'Rf', name: 'Rutherfordio', number: 104, mass: 261, group: 4, period: 7, family: 'metal-de-transicion', discovery: 1969},
    { symbol: 'Db', name: 'Dubnio', number: 105, mass: 262, group: 5, period: 7, family: 'metal-de-transicion', discovery: 1970},
    { symbol: 'Sg', name: 'Seaborgio', number: 106, mass: 266, group: 6, period: 7, family: 'metal-de-transicion', discovery: 1974},
    { symbol: 'Bh', name: 'Bohrio', number: 107, mass: 264, group: 7, period: 7, family: 'metal-de-transicion', discovery: 1980},
    { symbol: 'Hs', name: 'Hasio', number: 108, mass: 277, group: 8, period: 7, family: 'metal-de-transicion', discovery: 1984},
    { Symbol: 'Mt', name: 'Meitnerio', number: 109, mass: 268, group: 9, period: 7, family: 'metal-de-transicion', discovery: 1984},
    { Symbol: 'Ds', name: 'Darmstadio', number: 110, mass: 271, group: 10, period: 7, family: 'metal-de-transicion', discovery: 1994},
    { symbol: 'Rg', name: 'Roentgenio', number: 111, mass: 272, group: 11, period: 7, family: 'metal-de-transicion', discovery: 1994},
    { symbol: 'Cn', name: 'Copernicio', number: 112, mass: 285, group: 12, period: 7, family: 'metal-de-transicion', discovery: 1996},
    { symbol: 'Nh', name: 'Nihomio', number: 113, mass: 284, group: 13, period: 7, family: 'Otro metal', discovery: 2003},
    { symbol: 'Fl', name: 'Flerovio', number: 114, mass: 289, group: 14, period: 7, family: 'Otro metal', discovery: 1999},
    { symbol: 'Ms', name: 'Moscovio', number: 115, mass: 288, group: 15, period: 7, family: 'Otro metal', discovery: 2003},
    { symbol: 'Lv', name: 'Livermorio', number: 116, mass: 292, group: 16, period: 7, family: 'Otro metal', discovery: 2000},
    { symbol: 'Ts', name: 'Teneso', number: 117, mass: 294, group: 17, period:7 , family: 'halogeno', discovery: 2010},
    { symbol: 'Og', name: 'Oganesson', number: 118, mass: 294, group: 18, period: 7, family: 'gas-noble', discovery: 2002},
    // Ejemplo de elemento con fecha a.C.

];

function createPeriodicTable() {
    const table = document.querySelector('.periodic-table');
    const lanthanides = document.querySelector('.lanthanides');
    const actinides = document.querySelector('.actinides');
    
    elements.forEach(element => {
        const  symbol= element?.symbol || element?.Symbol;
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${element.family}`;
        elementDiv.innerHTML = `
            <span class="number">${element.number}</span>
            <span class="symbol">${symbol}</span>
        `;
        elementDiv.addEventListener('click', () => showElementDetails(element));
        
        if (element.number >= 57 && element.number <= 71) {
            elementDiv.style.gridColumn = element.number - 54; // Ajustado para dejar espacio para la etiqueta
            elementDiv.style.gridRow = 1;
            lanthanides.appendChild(elementDiv);
        } else if (element.number >= 89 && element.number <= 103) {
            elementDiv.style.gridColumn = element.number - 86; // Ajustado para dejar espacio para la etiqueta
            elementDiv.style.gridRow = 1;
            actinides.appendChild(elementDiv);
        } else {
            if (element.group > 3 && element.period >= 6) {
                elementDiv.style.gridColumn = element.group;
                elementDiv.style.gridRow = element.period - 1;
            } else {
                elementDiv.style.gridColumn = element.group;
                elementDiv.style.gridRow = element.period;
            }
            table.appendChild(elementDiv);
        }
    });
}

function showElementDetails(element) {
    const modal = document.getElementById('modal');
    const elementName = document.getElementById('elementName');
    const elementDetails = document.getElementById('elementDetails');
    
    elementName.textContent = `${element.name} (${element.symbol})`;
    elementDetails.innerHTML = `
        <p>Número atómico: ${element.number}</p>
        <p>Masa atómica: ${element.mass}</p>
        <p>Grupo: ${element.group}</p>
        <p>Periodo: ${element.period}</p>
        <p>Familia: ${getFamilyName(element.family)}</p>
        <p>Año de descubrimiento: ${formatDiscoveryYear(element.discovery)}</p>
    `;
    
    modal.style.display = 'block';
}

function getFamilyName(family) {
    const families = {
        'metal-alcalino': 'Metal alcalino',
        'metal-alcalinoterreo': 'Metal alcalinotérreo',
        'metal-de-transicion': 'Metal de transición',
        'metal-del-bloque-p': 'Metal del bloque p',
        'metaloide': 'Metaloide',
        'no-metal': 'No metal',
        'halogeno': 'Halógeno',
        'gas-noble': 'Gas noble',
        'lantanido': 'Lantánido',
        'actinido': 'Actínido'
    };
    return families[family] || family;
}

function formatDiscoveryYear(year) {
    if (year < 0) {
        return `${Math.abs(year)} a.C.`;
    } else {
        return `${year} d.C.`;
    }
}

function downloadPDF() {
    const { jsPDF } = window.jspdf;
    
    html2canvas(document.querySelector('.container')).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a4'
        });
        
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save("tabla_periodica.pdf");
    });
}

document.addEventListener('DOMContentLoaded', () => {
    createPeriodicTable();
    
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const downloadBtn = document.getElementById('downloadPdf');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    downloadBtn.addEventListener('click', downloadPDF);
    function createPeriodicTable() {
    const table = document.querySelector('.periodic-table');
    const lanthanides = document.querySelector('.lanthanides');
    const actinides = document.querySelector('.actinides');
    
    elements.forEach(element => {
        const symbol = element?.symbol || element?.Symbol;
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${element.family}`;
        elementDiv.innerHTML = `
            <span class="number">${element.number}</span>
            <span class="symbol">${symbol}</span>
        `;
        elementDiv.addEventListener('click', () => showElementDetails(element));
        
        if (element.number >= 57 && element.number <= 71) {
            elementDiv.style.gridColumn = element.number - 56; // Ajustado para lantánidos
            elementDiv.style.gridRow = 1;
            lanthanides.appendChild(elementDiv);
        } else if (element.number >= 89 && element.number <= 103) {
            elementDiv.style.gridColumn = element.number - 88; // Ajustado para actínidos
            elementDiv.style.gridRow = 1;
            actinides.appendChild(elementDiv);
        } else {
            if (element.group !== 'n/a' && element.period !== 'n/a') {
                elementDiv.style.gridColumn = element.group;
                elementDiv.style.gridRow = element.period;
                table.appendChild(elementDiv);
            }
        }
    });
}
});
