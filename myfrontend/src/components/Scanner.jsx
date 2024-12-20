import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

function Scanner() {

  const [scanResult, setScannerResult] = useState(null);
//   const [showError, setShowError] = useState(false);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner('reader', {
      qrbox: {
        width: 250, 
        height: 250,
      },
      fps: 5,
    })
  
    function success (result) {
      scanner.clear();
      setScannerResult(result);
    }
  
    function error() {
        console.log(error); 
    }

    scanner.render(success, error);

    return () => {
        scanner.clear()
          .catch((err) => console.error('Error clearing scanner:', err));
    };
    
  }, []);


  return (
    <div className=' h-[50vh] w-[50vw] flex items-center justify-center border-2 border-black'>
        <div className='border border-black'>
            <h1>QR Code Scanner</h1>
            {scanResult
            ? <div>Success: <a href={scanResult}>{scanResult}</a></div>
            : <div id='reader'>Error</div>
            }
        </div>
    </div>
  );
}

export default Scanner;

