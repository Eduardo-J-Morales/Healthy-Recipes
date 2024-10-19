import { useState } from 'react';
import { Document, Page, pdfjs } from '@react-pdf/renderer';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1)
  const [pdfSection, setPdfSection] = useState('all');
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  return (
    <>
      <Document
      file="./healthy-recipes.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber}/>
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </>
  )
}

export default PdfViewer;
