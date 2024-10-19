const elements = [
    { symbol: 'H', name: 'Hidrógeno', number: 1, mass: 1.008, group: 1, period: 1, family: 'no-metal', discovery: 1766 },
    { symbol: 'He', name: 'Helio', number: 2, mass: 4.003, group: 18, period: 1, family: 'gas-noble', discovery: 1895 },
    // Agrega el resto de los elementos aquí
];

function createPeriodicTable() {
    const table = document.querySelector('.periodic-table');
    const lanthanides = document.querySelector('.lanthanides');
    const actinides = document.querySelector('.actinides');
    
    elements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${element.family}`;
        elementDiv.innerHTML = `
            <span class="number">${element.number}</span>
            <span class="symbol">${element.symbol}</span>
        `;
        elementDiv.addEventListener('click', () => showElementDetails(element));
        
        if (element.number >= 57 && element.number <= 71) {
            elementDiv.style.gridColumn = element.number - 56;
            elementDiv.style.gridRow = 1;
            lanthanides.appendChild(elementDiv);
        } else if (element.number >= 89 && element.number <= 103) {
            elementDiv.style.gridColumn = element.number - 88;
            elementDiv.style.gridRow = 1;
            actinides.appendChild(elementDiv);
        } else {
            elementDiv.style.gridColumn = element.group;
            elementDiv.style.gridRow = element.period;
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
        <p>Año de descubrimiento: ${element.discovery}</p>
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
});
