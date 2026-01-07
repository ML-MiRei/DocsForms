let pdfDoc = null;
let currentPage = 1;
let scale =  window.innerWidth > 1100 ? window.innerWidth / 1920 :  window.innerWidth / 1100;

const canvas = document.getElementById('pdf-canvas');
const ctx = canvas.getContext('2d');
const loadingEl = document.getElementById('loading');
const viewerEl = document.getElementById('pdf-viewer');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentPageEl = document.getElementById('current-page');
const totalPagesEl = document.getElementById('total-pages');
const controlsPanel = document.getElementById('viewer-controls');


function loadPDF(pdfUrl) {
    pdfjsLib.getDocument(pdfUrl).promise.then(doc => {
        pdfDoc = doc;

        totalPagesEl.textContent = pdfDoc.numPages;

        loadingEl.style.display = 'none';
        controlsPanel.style.display = 'flex';
        viewerEl.style.display = 'flex';

        renderPage(currentPage);

        updateNavButtons();
    }).catch(error => {
        console.error('Ошибка загрузки PDF:', error);
        loadingEl.innerHTML = '<p style="color:red">Ошибка загрузки документа</p>';
    });
}

function renderPage(pageNum) {
    if (!pdfDoc) return;

    pdfDoc.getPage(pageNum).then(page => {
        const viewport = page.getViewport({ scale: scale });

        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };

        page.render(renderContext).promise.then(() => {
            currentPage = pageNum;
            currentPageEl.textContent = currentPage;

            updateNavButtons();

            viewerEl.scrollTop = 0;
        });
    });
}

function updateNavButtons() {
    prevBtn.disabled = currentPage <= 1;
    nextBtn.disabled = currentPage >= pdfDoc.numPages;
}

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        renderPage(currentPage - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentPage < pdfDoc.numPages) {
        renderPage(currentPage + 1);
    }
});


canvas.oncontextmenu = (e) => {
    e.preventDefault();
    return false;
};

document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'p' || e.key === 'P')) {
        e.preventDefault();
        alert('Печать документа отключена');
        return false;
    }
});

canvas.ondragstart = () => false;
