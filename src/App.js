import React, { useEffect } from 'react';
import Mainpage from './component/Mainpage';

function App() {
  useEffect(() => {
    // Load scripts dynamically
    const loadScript = (src) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      document.body.appendChild(script);
    };

    // Load the scripts
    loadScript('assets/js/jquery-3.1.1.min.js');
    loadScript('assets/js/plugins.min.js');
    loadScript('assets/js/plugins/dsn-grid.min.js');
    loadScript('assets/js/custom.js');

    // Clean up function to remove the dynamically added scripts
    return () => {
      document.querySelectorAll('script').forEach(script => {
        if (script.src.includes('assets/js/')) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <div>
      <Mainpage/>
    </div>
  );
}

export default App;


