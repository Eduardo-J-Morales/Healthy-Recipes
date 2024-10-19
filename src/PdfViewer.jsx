import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { pdfSections } from './pdfSections';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


function PdfViewer() {
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfSection, setPdfSection] = useState(null);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {pdfSections.map((section) => (
        <button 
          key={section.id}
          onClick={() => {
            setPageNumber(section.startPage);
            setPdfSection(section.id);
            setNumPages(section.endPage - section.startPage + 1);
          }}
        >
          {section.name}
        </button>
      ))}
      <Document
        file="./healthy-recipes.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page 
          pageNumber={pageNumber} 
          renderMode="svg"
        />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
  );
}

export default PdfViewer;
