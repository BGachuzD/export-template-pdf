import React from 'react'
import PDF from './components/PDF'
import { PDFDownloadLink } from '@react-pdf/renderer'

const App = () => {
  return (
    <div>
      <h1>PDF Example</h1>
      
      <PDFDownloadLink document={<PDF />} fileName="somename.pdf">
        {({ blob, url, loading, error }) =>
          loading ? <button>Cargando</button> : <button>Download now!</button>
        }
      </PDFDownloadLink>
    </div>
  )
}

export default App