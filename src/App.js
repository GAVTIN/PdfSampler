import './App.css';
import React from "react"
import BasicDocument from './BasicDocument';
// import { PDFDownloadLink } from '@react-pdf/renderer';

function App() {
  return (
    <div className="App">
        {/* <PDFDownloadLink document={<BasicDocument />} fileName="somename.pdf">
            {'Download now!'}
        </PDFDownloadLink> */}
        <BasicDocument />
    </div>
  );
}

export default App;
