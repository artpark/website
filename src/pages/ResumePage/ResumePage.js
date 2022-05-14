import React, { useState } from 'react'
import { Icon } from 'antd'
import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf'

import resume from '../../assets/pdfs/resume.pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

const ResumePage = () => {
  const [numPages, setNumPages] = useState(0)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  return (
    <div className="resume-container">
      <a href={resume} download id="resume-download-button">
        <Icon type="download"></Icon>
      </a>
      <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} scale={1} renderAnnotationLayer={false} />
      </Document>
    </div>
  )
}

export default ResumePage
