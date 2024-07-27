import React, { useEffect, useRef, useState } from 'react';
import Result from './Result.jsx';
import "./BarCode.css"
import Quagga from '@ericblade/quagga2';

const BarcodeScanner = () => {
  const scannerRef = useRef(null);
  const [scannedResult, setScannedResult] = useState("");

  useEffect(() => {
    Quagga.init({
      inputStream: {
        name: 'Live',
        type: 'LiveStream',
        target: scannerRef.current,
        constraints: {
          width: 640,
          height: 480,
          facingMode: 'environment'
        }
      },
      decoder: {
        readers: [
          'code_128_reader',
          'ean_reader',
          'ean_8_reader',
          'code_39_reader',
          'code_39_vin_reader',
          'codabar_reader',
          'upc_reader',
          'upc_e_reader',
          'i2of5_reader'
        ]
      }
    }, function (err) {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Initialization finished. Ready to start');
      Quagga.start();
    });

    Quagga.onDetected(data => {
      const code = data.codeResult.code;
      setScannedResult(`${code}`);
      Quagga.stop();
    });

    return () => {
      Quagga.stop();
    };
  }, []);
if(scannedResult=="")
{
  return (
    <div >
      <div className="barcode" ref={scannerRef} style={{ width: '640px', height: '480px' }}></div>
    </div>
  )
}
else{
  return(<Result data={scannedResult}/>)
}
};

export default BarcodeScanner;
