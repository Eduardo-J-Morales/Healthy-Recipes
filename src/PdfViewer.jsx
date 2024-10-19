import { useState } from 'react';
import { Document, Page } from '@react-pdf/renderer';

function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1)

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
