document.addEventListener('DOMContentLoaded', function() {
    const elementos = [
        { simbolo: 'H', nombre: 'Hidrógeno', numeroAtomico: 1, masaAtomica: 1.008, fechaDescubrimiento: '1766', grupo: 1, periodo: 1, familia: 'No metal' },
        { simbolo: 'He', nombre: 'Helio', numeroAtomico: 2, masaAtomica: 4.003, fechaDescubrimiento: '1895', grupo: 18, periodo: 1, familia: 'Gas noble' },
        { simbolo: 'Li', nombre: 'Litio', numeroAtomico: 3, masaAtomica: 6.941, fechaDescubrimiento: '1817', grupo: 1, periodo: 2, familia: 'Alcalino' },
        { simbolo: 'Be', nombre: 'Berilio', numeroAtomico: 4, masaAtomica: 9.012, fechaDescubrimiento: '1797', grupo: 2, periodo: 2, familia: 'Alcalinotérreo' },
        { simbolo: 'B', nombre: 'Boro', numeroAtomico: 5, masaAtomica: 10.811, fechaDescubrimiento: '1808', grupo: 13, periodo: 2, familia: 'Metaloide' },
        { simbolo: 'C', nombre: 'Carbono', numeroAtomico: 6, masaAtomica: 12.011, fechaDescubrimiento: 'Prehistoria', grupo: 14, periodo: 2, familia: 'No metal' },
        { simbolo: 'N', nombre: 'Nitrógeno', numeroAtomico: 7, masaAtomica: 14.007, fechaDescubrimiento: '1772', grupo: 15, periodo: 2, familia: 'No metal' },
        { simbolo: 'O', nombre: 'Oxígeno', numeroAtomico: 8, masaAtomica: 15.999, fechaDescubrimiento: '1774', grupo: 16, periodo: 2, familia: 'No metal' },
        { simbolo: 'F', nombre: 'Flúor', numeroAtomico: 9, masaAtomica: 18.998, fechaDescubrimiento: '1886', grupo: 17, periodo: 2, familia: 'Halógeno' },
        { simbolo: 'Ne', nombre: 'Neón', numeroAtomico: 10, masaAtomica: 20.180, fechaDescubrimiento: '1898', grupo: 18, periodo: 2, familia: 'Gas noble' },
        { simbolo: 'Na', nombre: 'Sodio', numeroAtomico: 11, masaAtomica: 22.990, fechaDescubrimiento: '1807', grupo: 1, periodo: 3, familia: 'Alcalino' },
        { simbolo: 'Mg', nombre: 'Magnesio', numeroAtomico: 12, masaAtomica: 24.305, fechaDescubrimiento: '1755', grupo: 2, periodo: 3, familia: 'Alcalinotérreo' },
        { simbolo: 'Al', nombre: 'Aluminio', numeroAtomico: 13, masaAtomica: 26.982, fechaDescubrimiento: '1824', grupo: 13, periodo: 3, familia: 'Otros metales' },
        { simbolo: 'Si', nombre: 'Silicio', numeroAtomico: 14, masaAtomica: 28.086, fechaDescubrimiento: '1824', grupo: 14, periodo: 3, familia: 'Metaloide' },
        { simbolo: 'P', nombre: 'Fósforo', numeroAtomico: 15, masaAtomica: 30.974, fechaDescubrimiento: '1669', grupo: 15, periodo: 3, familia: 'No metal' },
        { simbolo: 'S', nombre: 'Azufre', numeroAtomico: 16, masaAtomica: 32.065, fechaDescubrimiento: 'Prehistoria', grupo: 16, periodo: 3, familia: 'No metal' },
        { simbolo: 'Cl', nombre: 'Cloro', numeroAtomico: 17, masaAtomica: 35.453, fechaDescubrimiento: '1774', grupo: 17, periodo: 3, familia: 'Halógeno' },
        { simbolo: 'Ar', nombre: 'Argón', numeroAtomico: 18, masaAtomica: 39.948, fechaDescubrimiento: '1894', grupo: 18, periodo: 3, familia: 'Gas noble' },
        { simbolo: 'K', nombre: 'Potasio', numeroAtomico: 19, masaAtomica: 39.098, fechaDescubrimiento: '1807', grupo: 1, periodo: 4, familia: 'Alcalino' },
        { simbolo: 'Ca', nombre: 'Calcio', numeroAtomico: 20, masaAtomica: 40.078, fechaDescubrimiento: 'Prehistoria', grupo: 2, periodo: 4, familia: 'Alcalinotérreo' },
        { simbolo: 'Sc', nombre: 'Escandio', numeroAtomico: 21, masaAtomica: 44.956, fechaDescubrimiento: '1879', grupo: 3, periodo: 4, familia: 'Metales de transición' },
        { simbolo: 'Ti', nombre: 'Titanio', numeroAtomico: 22, masaAtomica: 47.867, fechaDescubrimiento: '1791', grupo: 4, periodo: 4, familia: 'Metales de transición' },
        { simbolo: 'V', nombre: 'Vanadio', numeroAtomico: 23, masaAtomica: 50.942, fechaDescubrimiento: '1801', grupo: 5, periodo: 4, familia: 'Metales de transición' },
        { simbolo: 'Cr', nombre: 'Cromo', numeroAtomico: 24, masaAtomica: 51.996, fechaDescubrimiento: '1797', grupo: 6, periodo: 4, familia: 'Metales de transición' },
        { simbolo: 'Mn', nombre: 'Manganeso', numeroAtomico: 25, masaAtomica: 54.938, fechaDescubrimiento: '1774', grupo: 7, periodo: 4, familia: 'Metales de transición' },
        { simbolo: 'Fe', nombre: 'Hierro', numeroAtomico: 26, masaAtomica: 55.845, fechaDescubrimiento: 'Prehistoria', grupo: 8, periodo: 4, familia: 'Metales de transición' },
        { simbolo: 'Co', nombre: 'Cobalto', numeroAtomico: 27, masaAtomica: 58.933, fechaDescubrimiento: '1735', grupo: 9, periodo: 4, familia: 'Metales de transición' },
        { simbolo: 'Ni', nombre: 'Níquel', numeroAtomico: 28, masaAtomica: 58.693, fechaDescubrimiento: '1751', grupo: 10, periodo: 4, familia: 'Metales de transición' },
        { simbolo: 'Cu', nombre: 'Cobre', numeroAtomico: 29, masaAtomica: 63.546, fechaDescubrimiento: 'Prehistoria', grupo: 11, periodo: 4, familia: 'Metales de transición' },
        { simbolo: 'Zn', nombre: 'Zinc', numeroAtomico: 30, masaAtomica: 65.38, fechaDescubrimiento: '1746', grupo: 12, periodo: 4, familia: 'Metales de transición' },
        { simbolo: 'Ga', nombre: 'Galio', numeroAtomico: 31, masaAtomica: 69.723, fechaDescubrimiento: '1875', grupo: 13, periodo: 4, familia: 'Otros metales' },
        { simbolo: 'Ge', nombre: 'Germanio', numeroAtomico: 32, masaAtomica: 72.64, fechaDescubrimiento: '1886', grupo: 14, periodo: 4, familia: 'Metaloide' },
        { simbolo: 'As', nombre: 'Arsénico', numeroAtomico: 33, masaAtomica: 74.922, fechaDescubrimiento: '1250', grupo: 15, periodo: 4, familia: 'Metaloide' },
        { simbolo: 'Se', nombre: 'Selenio', numeroAtomico: 34, masaAtomica: 78.96, fechaDescubrimiento: '1817', grupo: 16, periodo: 4, familia: 'No metal' },
        { simbolo: 'Br', nombre: 'Bromo', numeroAtomico: 35, masaAtomica: 79.904, fechaDescubrimiento: '1826', grupo: 17, periodo: 4, familia: 'Halógeno' },
        { simbolo: 'Kr', nombre: 'Kriptón', numeroAtomico: 36, masaAtomica: 83.798, fechaDescubrimiento: '1898', grupo: 18, periodo: 4, familia: 'Gas noble' },
        { simbolo: 'Rb', nombre: 'Rubidio', numeroAtomico: 37, masaAtomica: 85.468, fechaDescubrimiento: '1861', grupo: 1, periodo: 5, familia: 'Alcalino' },
        { simbolo: 'Sr', nombre: 'Estroncio', numeroAtomico: 38, masaAtomica: 87.62, fechaDescubrimiento: '1790', grupo: 2, periodo: 5, familia: 'Alcalinotérreo' },
        { simbolo: 'Y', nombre: 'Itrio', numeroAtomico: 39, masaAtomica: 88.906, fechaDescubrimiento: '1794', grupo: 3, periodo: 5, familia: 'Metales de transición' },
        { simbolo: 'Zr', nombre: 'Zirconio', numeroAtomico: 40, masaAtomica: 91.224, fechaDescubrimiento: '1789', grupo: 4, periodo: 5, familia: 'Metales de transición' },
        { simbolo: 'Nb', nombre: 'Niobio', numeroAtomico: 41, masaAtomica: 92.906, fechaDescubrimiento: '1801', grupo: 5, periodo: 5, familia: 'Metales de transición' },
        { simbolo: 'Mo', nombre: 'Molibdeno', numeroAtomico: 42, masaAtomica: 95.96, fechaDescubrimiento: '1778', grupo: 6, periodo: 5, familia: 'Metales de transición' },
        { simbolo: 'Tc', nombre: 'Tecnecio', numeroAtomico: 43, masaAtomica: 98, fechaDescubrimiento: '1937', grupo: 7, periodo: 5, familia: 'Metales de transición' },
        { simbolo: 'Ru', nombre: 'Rutenio', numeroAtomico: 44, masaAtomica:  101.07, fechaDescubrimiento: '1844', grupo: 8, periodo: 5, familia: 'Metales de transición' },
        { simbolo: 'Rh', nombre: 'Rodio', numeroAtomico: 45, masaAtomica: 102.906, fechaDescubrimiento: '1803', grupo: 9, periodo: 5, familia: 'Metales de transición' },
        { simbolo: 'Pd', nombre: 'Paladio', numeroAtomico: 46, masaAtomica: 106.42, fechaDescubrimiento: '1803', grupo: 10, periodo: 5, familia: 'Metales de transición' },
        { simbolo: 'Ag', nombre: 'Plata', numeroAtomico: 47, masaAtomica: 107.868, fechaDescubrimiento: 'Prehistoria', grupo: 11, periodo: 5, familia: 'Metales de transición' },
        { simbolo: 'Cd', nombre: 'Cadmio', numeroAtomico: 48, masaAtomica: 112.411, fechaDescubrimiento: '1817', grupo: 12, periodo: 5, familia: 'Metales de transición' },
        { simbolo: 'In', nombre: 'Indio', numeroAtomico: 49, masaAtomica: 114.818, fechaDescubrimiento: '1863', grupo: 13, periodo: 5, familia: 'Otros metales' },
        { simbolo: 'Sn', nombre: 'Estaño', numeroAtomico: 50, masaAtomica: 118.71, fechaDescubrimiento: 'Prehistoria', grupo: 14, periodo: 5, familia: 'Otros metales' },
        { simbolo: 'Sb', nombre: 'Antimonio', numeroAtomico: 51, masaAtomica: 121.76, fechaDescubrimiento: '1450 a.C.', grupo: 15, periodo: 5, familia: 'Metaloide' },
        { simbolo: 'Te', nombre: 'Telurio', numeroAtomico: 52, masaAtomica: 127.6, fechaDescubrimiento: '1782', grupo: 16, periodo: 5, familia: 'Metaloide' },
        { simbolo: 'I', nombre: 'Yodo', numeroAtomico: 53, masaAtomica: 126.904, fechaDescubrimiento: '1811', grupo: 17, periodo: 5, familia: 'Halógeno' },
        { simbolo: 'Xe', nombre: 'Xenón', numeroAtomico: 54, masaAtomica: 131.293, fechaDescubrimiento: '1898', grupo: 18, periodo: 5, familia: 'Gas noble' },
        { simbolo: 'Cs', nombre: 'Cesio', numeroAtomico: 55, masaAtomica: 132.905, fechaDescubrimiento: '1860', grupo: 1, periodo: 6, familia: 'Alcalino' },
        { simbolo: 'Ba', nombre: 'Bario', numeroAtomico: 56, masaAtomica: 137.327, fechaDescubrimiento: '1774', grupo: 2, periodo: 6, familia: 'Alcalinotérreo' },
        { simbolo: 'La', nombre: 'Lantano', numeroAtomico: 57, masaAtomica: 138.905, fechaDescubrimiento: '1839', grupo: 3, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Ce', nombre: 'Cerio', numeroAtomico: 58, masaAtomica: 140.116, fechaDescubrimiento: '1803', grupo: 4, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Pr', nombre: 'Praseodimio', numeroAtomico: 59, masaAtomica: 140.908, fechaDescubrimiento: '1885', grupo: 5, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Nd', nombre: 'Neodimio', numeroAtomico: 60, masaAtomica: 144.242, fechaDescubrimiento: '1885', grupo: 6, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Pm', nombre: 'Prometio', numeroAtomico: 61, masaAtomica: 145, fechaDescubrimiento: '1945', grupo: 7, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Sm', nombre: 'Samario', numeroAtomico: 62, masaAtomica: 150.36, fechaDescubrimiento: '1879', grupo: 8, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Eu', nombre: 'Europio', numeroAtomico: 63, masaAtomica: 151.964, fechaDescubrimiento: '1901', grupo: 9, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Gd', nombre: 'Gadolinio', numeroAtomico: 64, masaAtomica: 157.25, fechaDescubrimiento: '1880', grupo: 10, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Tb', nombre: 'Terbio', numeroAtomico: 65, masaAtomica: 158.925, fechaDescubrimiento: '1843', grupo: 11, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Dy', nombre: 'Disprosio', numeroAtomico: 66, masaAtomica: 162.5, fechaDescubrimiento: '1886', grupo: 12, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Ho', nombre: 'Holmio', numeroAtomico: 67, masaAtomica: 164.93, fechaDescubrimiento: '1878', grupo: 13, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Er', nombre: 'Erbio', numeroAtomico: 68, masaAtomica: 167.259, fechaDescubrimiento: '1842', grupo: 14, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Tm', nombre: 'Tulio', numeroAtomico: 69, masaAtomica: 168.934, fechaDescubrimiento: '1879', grupo: 15, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Yb', nombre: 'Iterbio', numeroAtomico: 70, masaAtomica: 173.054, fechaDescubrimiento: '1878', grupo: 16, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Lu', nombre: 'Lutecio', numeroAtomico: 71, masaAtomica: 174.967, fechaDescubrimiento: '1907', grupo: 17, periodo: 6, familia: 'Lantánidos' },
        { simbolo: 'Hf', nombre: 'Hafnio', numeroAtomico: 72, masaAtomica: 178.49, fechaDescubrimiento: '1923', grupo: 4, periodo: 6, familia: 'Metales de transición' },
        { simbolo: 'Ta', nombre: 'Tántalo', numeroAtomico: 73, masaAtomica: 180.948, fechaDescubrimiento: '1802', grupo: 5, periodo: 6, familia: 'Metales de transición' },
        { simbolo: 'W', nombre: 'Wolframio', numeroAtomico: 74, masaAtomica: 183.84, fechaDescubrimiento: '1783', grupo: 6, periodo: 6, familia: 'Metales de transición' },
        { simbolo: 'Re', nombre: 'Renio', numeroAtomico: 75, masaAtomica: 186.207, fechaDescubrimiento: '1925', grupo: 7, periodo: 6, familia: 'Metales de transición' },
        { simbolo: 'Os', nombre: 'Osmio', numeroAtomico: 76, masaAtomica: 190.23, fechaDescubrimiento: '1803', grupo: 8, periodo: 6, familia: 'Metales de transición' },
        { simbolo: 'Ir', nombre: 'Iridio', numeroAtomico: 77, masaAtomica: 192.217, fechaDescubrimiento: '1803', grupo: 9, periodo: 6, familia: 'Metales de transición' },
        { simbolo: 'Pt', nombre: 'Platino', numeroAtomico: 78, masaAtomica: 195.084, fechaDescubrimiento: '1735', grupo: 10, periodo: 6, familia: 'Metales de transición' },
        { simbolo: 'Au', nombre: 'Oro', numeroAtomico: 79, masaAtomica: 196.967, fechaDescubrimiento: 'Prehistoria', grupo: 11, periodo: 6, familia: 'Metales de transición' },
        { simbolo: 'Hg', nombre: 'Mercurio', numeroAtomico: 80, masaAtomica: 200.59, fechaDescubrimiento: 'Prehistoria', grupo: 12, periodo: 6, familia: 'Metales de transición' },
        { simbolo: 'Tl', nombre: 'Talio', numeroAtomico: 81, masaAtomica: 204.383, fechaDescubrimiento: '1861', grupo: 13, periodo: 6, familia: 'Otros metales' },
        { simbolo: 'Pb', nombre: 'Plomo', numeroAtomico: 82, masaAtomica: 207.2, fechaDescubrimiento: 'Prehistoria', grupo: 14, periodo: 6, familia: 'Otros metales' },
        { simbolo: 'Bi', nombre: 'Bismuto', numeroAtomico: 83, masaAtomica: 208.98, fechaDescubrimiento: '1753', grupo: 15, periodo: 6, familia: 'Otros metales' },
        { simbolo: 'Po', nombre: 'Polonio', numeroAtomico: 84, masaAtomica: 209, fechaDescubrimiento: '1898', grupo: 16, periodo: 6, familia: 'Metaloide' },
        { simbolo: 'At', nombre: 'Astato', numeroAtomico: 85, masaAtomica: 210, fechaDescubrimiento: '1940', grupo: 17, periodo: 6, familia: 'Halógeno' },
        { simbolo: 'Rn', nombre: 'Radón', numeroAtomico: 86, masaAtomica: 222, fechaDescubrimiento: '1900', grupo: 18, periodo: 6, familia: 'Gas noble' },
        { simbolo: 'Fr', nombre: 'Francio', numeroAtomico: 87, masaAtomica: 223, fechaDescubrimiento: '1939', grupo: 1, periodo: 7, familia: 'Alcalino' },
        { simbolo: 'Ra', nombre: 'Radio', numeroAtomico: 88, masaAtomica: 226, fechaDescubrimiento: '1898', grupo: 2, periodo: 7, familia: 'Alcalinotérreo' },
        { simbolo: 'Ac', nombre: 'Actinio', numeroAtomico: 89, masaAtomica: 227, fechaDescubrimiento: '1899', grupo: 3, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'Th', nombre: 'Torio', numeroAtomico: 90, masaAtomica: 232.038, fechaDescubrimiento: '1829', grupo: 4, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'Pa', nombre: 'Protactinio', numeroAtomico: 91, masaAtomica: 231.036, fechaDescubrimiento: '1913', grupo: 5, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'U', nombre: 'Uranio', numeroAtomico: 92, masaAtomica: 238.029, fechaDescubrimiento: '1789', grupo: 6, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'Np', nombre: 'Neptunio', numeroAtomico: 93, masaAtomica: 237, fechaDescubrimiento: '1940', grupo: 7, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'Pu', nombre: 'Plutonio', numeroAtomico: 94, masaAtomica: 244, fechaDescubrimiento: '1940', grupo: 8, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'Am', nombre: 'Americio', numeroAtomico: 95, masaAtomica: 243, fechaDescubrimiento: '1944', grupo: 9, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'Cm', nombre: 'Curio', numeroAtomico: 96, masaAtomica: 247, fechaDescubrimiento: '1944', grupo: 10, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'Bk', nombre: 'Berkelio', numeroAtomico: 97, masaAtomica: 247, fechaDescubrimiento: '1949', grupo: 11, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'Cf', nombre: 'Californio', numeroAtomico: 98, masaAtomica: 251, fechaDescubrimiento: '1950', grupo: 12, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'Es', nombre: 'Einstenio', numeroAtomico: 99, masaAtomica: 252, fechaDescubrimiento: '1952', grupo: 13, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'Fm', nombre: 'Fermio', numeroAtomico: 100, masaAtomica: 257, fechaDescubrimiento: '1952', grupo: 14, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'Md', nombre: 'Mendelevio', numeroAtomico: 101, masaAtomica: 258, fechaDescubrimiento: '1955', grupo: 15, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'No', nombre: 'Nobelio', numeroAtomico: 102, masaAtomica: 259, fechaDescubrimiento: '1958', grupo: 16, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'Lr', nombre: 'Lawrencio', numeroAtomico: 103, masaAtomica: 262, fechaDescubrimiento: '1961', grupo: 17, periodo: 7, familia: 'Actínidos' },
        { simbolo: 'Rf', nombre: 'Rutherfordio', numeroAtomico: 104, masaAtomica: 267, fechaDescubrimiento: '1964', grupo: 4, periodo: 7, familia: 'Metales de transición' },
        { simbolo: 'Db', nombre: 'Dubnio', numeroAtomico: 105, masaAtomica: 268, fechaDescubrimiento: '1967', grupo: 5, periodo: 7, familia: 'Metales de transición' },
        { simbolo: 'Sg', nombre: 'Seaborgio', numeroAtomico: 106, masaAtomica: 271, fechaDescubrimiento: '1974', grupo: 6, periodo: 7, familia: 'Metales de transición' },
        { simbolo: 'Bh', nombre: 'Bohrio', numeroAtomico: 107, masaAtomica: 272, fechaDescubrimiento: '1981', grupo: 7, periodo: 7, familia: 'Metales de transición' },
        { simbolo: 'Hs', nombre: 'Hassio', numeroAtomico: 108, masaAtomica: 270, fechaDescubrimiento: '1984', grupo: 8, periodo: 7, familia: 'Metales de transición' },
        { simbolo: 'Mt', nombre: 'Meitnerio', numeroAtomico: 109, masaAtomica: 276, fechaDescubrimiento: '1982', grupo: 9, periodo: 7, familia: 'Metales de transición' },
        { simbolo: 'Ds', nombre: 'Darmstadtio', numeroAtomico: 110, masaAtomica: 281, fechaDescubrimiento: '1994', grupo: 10, periodo: 7, familia: 'Metales de transición' },
        { simbolo: 'Rg', nombre: 'Roentgenio', numeroAtomico: 111, masaAtomica: 280, fechaDescubrimiento: '1994', grupo: 11, periodo: 7, familia: 'Metales de transición' },
        { simbolo: 'Cn', nombre: 'Copernicio', numeroAtomico: 112, masaAtomica: 285, fechaDescubrimiento: '1996', grupo: 12, periodo: 7, familia: 'Metales de transición' },
        { simbolo: 'Nh', nombre: 'Nihonio', numeroAtomico: 113, masaAtomica: 284, fechaDescubrimiento: '2003', grupo: 13, periodo: 7, familia: 'Otros metales' },
        { simbolo: 'Fl', nombre: 'Flerovio', numeroAtomico: 114, masaAtomica: 289, fechaDescubrimiento: '1998', grupo: 14, periodo: 7, familia: 'Otros metales' },
        { simbolo: 'Mc', nombre: 'Moscovio', numeroAtomico: 115, masaAtomica: 288, fechaDescubrimiento: '2003', grupo: 15, periodo: 7, familia: 'Otros metales' },
        { simbolo: 'Lv', nombre: 'Livermorio', numeroAtomico: 116, masaAtomica: 293, fechaDescubrimiento: '2000', grupo: 16, periodo: 7, familia: 'Otros metales' },
        { simbolo: 'Ts', nombre: 'Teneso', numeroAtomico: 117, masaAtomica: 294, fechaDescubrimiento: '2010', grupo: 17, periodo: 7, familia: 'Halógeno' },
        { simbolo: 'Og', nombre: 'Oganesón', numeroAtomico: 118, masaAtomica: 294, fechaDescubrimiento: '2006', grupo: 18, periodo: 7, familia: 'Gas noble' }
    ];

    const coloresFamilias = {
        'Alcalino': '#ff6b6b',
        'Alcalinotérreo': '#feca57',
        'Metales de transición': '#48dbfb',
        'Otros metales': '#ff9ff3',
        'Metaloide': '#54a0ff',
        'No metal': '#5f27cd',
        'Halógeno': '#ff6b6b',
        'Gas noble': '#ff9ff3',
        'Lantánidos': '#1dd1a1',
        'Actínidos': '#54a0ff'
    };

    const tablaPeriodica = document.getElementById('tabla-periodica');
    const lantanidosActinidos = document.getElementById('lantanidos-actinidos');
    const modal = document.getElementById('modal');
    const cerrarModal = document.getElementsByClassName('cerrar')[0];
    const elementoNombre = document.getElementById('elemento-nombre');
    const elementoInfo = document.getElementById('elemento-info');
    const descargarPDF = document.getElementById('descargar-pdf');

    function posicionarElemento(elemento) {
        if (elemento.familia === 'Lantánidos') {
            return { fila: 1, columna: elemento.numeroAtomico - 54 };
        } else if (elemento.familia === 'Actínidos') {
            return { fila: 2, columna: elemento.numeroAtomico - 86 };
        } else if (elemento.grupo === 3 && elemento.periodo >= 6) {
            return { fila: elemento.periodo, columna: 3 };
        } else {
            return { fila: elemento.periodo, columna: elemento.grupo };
        }
    }

    elementos.forEach(elemento => {
        const boton = document.createElement('button');
        boton.textContent = elemento.simbolo;
        boton.className = 'elemento';
        const { fila, columna } = posicionarElemento(elemento);
        boton.style.gridRow = fila;
        boton.style.gridColumn = columna;
        boton.style.backgroundColor = coloresFamilias[elemento.familia];
        boton.addEventListener('click', () => mostrarElemento(elemento));

        if (elemento.familia === 'Lantánidos' || elemento.familia === 'Actínidos') {
            lantanidosActinidos.appendChild(boton);
        } else {
            tablaPeriodica.appendChild(boton);
        }
    });

    function mostrarElemento(elemento) {
        elementoNombre.textContent = elemento.nombre;
        elementoInfo.innerHTML = `
            Símbolo: ${elemento.simbolo}<br>
            Número Atómico: ${elemento.numeroAtomico}<br>
            Masa Atómica: ${elemento.masaAtomica}<br>
            Fecha de Descubrimiento: ${elemento.fechaDescubrimiento}<br>
            Familia: ${elemento.familia}
        `;
        modal.style.display = 'block';
    }

    cerrarModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    descargarPDF.addEventListener('click', generarPDFTablaCompleta);

    function generarPDFTablaCompleta() {
        const { jsPDF } = window.jspdf;

        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: 'a3'
        });

        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 10;
        const cellWidth = (pageWidth - 2 * margin) / 18;
        const cellHeight = (pageHeight - 2 * margin) / 10;

        // Dibujar el fondo de la tabla
        doc.setFillColor(208, 215, 222);
        doc.rect(margin, margin, pageWidth - 2 * margin, pageHeight - 2 * margin, 'F');

        // Título
        doc.setFontSize(16);
        doc.setTextColor(36, 41, 47);
        doc.text("Tabla Periódica de los Elementos", pageWidth / 2, margin - 2, { align: 'center' });

        elementos.forEach(elemento => {
            const { fila, columna } = posicionarElemento(elemento);
            let x, y;

            if (elemento.familia === 'Lantánidos' || elemento.familia === 'Actínidos') {
                x = margin + (columna - 1) * cellWidth;
                y = margin + (7 + (elemento.familia === 'Lantánidos' ? 0 : 1)) * cellHeight;
            } else {
                x = margin + (columna - 1) * cellWidth;
                y = margin + (fila - 1) * cellHeight;
            }

            // Dibujar el fondo del elemento
            const rgb = hexToRgb(coloresFamilias[elemento.familia]);
            doc.setFillColor(rgb.r, rgb.g, rgb.b);
            doc.roundedRect(x, y, cellWidth, cellHeight, 1, 1, 'F');

            // Símbolo del elemento
            doc.setFontSize(12);
            doc.setTextColor(255, 255, 255);
            doc.text(elemento.simbolo, x + cellWidth / 2, y + cellHeight / 2, { align: 'center', baseline: 'middle' });

            // Número atómico
            doc.setFontSize(6);
            doc.text(elemento.numeroAtomico.toString(), x + 1, y + 3);

            // Masa atómica
            doc.setFontSize(4);
            doc.text(elemento.masaAtomica.toString(), x + 1, y + cellHeight - 1);
        });

        doc.save('tabla_periodica.pdf');
    }

    // Función auxiliar para convertir colores hex a RGB
    function hexToRgb(hex) {
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }
});