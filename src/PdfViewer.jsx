import React, { useState } from '@react-pdf-viewer/core';
import { Document, Page } from '@react-pdf-viewer/core';

function PdfViewer() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    console.log('Document loaded successfully');
    setNumPages(numPages);
  }

  function onDocumentLoadError(error) {
    console.error('Error while loading document! ', error.message);
  }

  return (
    <div>
      <h1>PDF Viewer</h1>
    </div>
  );
}

export default PdfViewer;
