import React from "react";
import PDF from "./components/PDF";
import PDF2 from "./components/PDF2";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

const App = () => {
  return (
    <div
      style={{ 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center",
        padding: "10px",
      }}
    >
      <h1>PDF Crear y Exportar</h1>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <PDFViewer width="600" height="800">
          <PDF />
        </PDFViewer>

        <PDFViewer width="600" height="800">
          <PDF2 />
        </PDFViewer>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          marginTop: "20px",
        }}
      >
        <PDFDownloadLink document={<PDF />} fileName="somename.pdf">
          {({ blob, url, loading, error }) =>
            loading ? <button>Cargando</button> : <button>Descragar PDF 1</button>
          }
        </PDFDownloadLink>

        <PDFDownloadLink document={<PDF2 />} fileName="somename.pdf">
          {({ blob, url, loading, error }) =>
            loading ? <button>Cargando</button> : <button>Descragar PDF 2</button>
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
};

export default App;
