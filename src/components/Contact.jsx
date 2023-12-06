import React, { useEffect } from 'react';

const Contact = () => {
  useEffect(() => {
    // Dynamically load the iframe-resizer library
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.2/iframeResizer.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const hecticFrame = document.getElementById('hectic-form');
      hecticFrame.src = 'https://hello.withmoxie.com/01/austin-morrow1/discovery-form---new-website?inFrame=true&sourceUrl=' + encodeURIComponent(window.location.href);

      // Initialize iframe resizer
      setTimeout(() => {
        window.iFrameResize({
          heightCalculationMethod: 'min',
          sizeWidth: true,
          sizeHeight: true,
          log: false,
          checkOrigin: false,
        }, '#hectic-form');
      }, 100);
    };

    return () => {
      // Cleanup: Remove the dynamically loaded script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div name="contact" className="w-full min-h-[500px]">
      <iframe
        id="hectic-form"
        allowtransparency="true"
        style={{ padding: '0px', margin: '0px', border: '0', maxWidth: '100%', minWidth: '100%' }}
      ></iframe>
    </div>
  );
};

export default Contact;
