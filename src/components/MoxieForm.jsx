"use client"
import React, { useEffect, useRef } from 'react';
import Script from 'next/script';

const MoxieForm = () => {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Set the iframe's src when the component mounts.
    if (iframeRef.current) {
      const currentUrl = window.location.href;
      iframeRef.current.src = `https://hello.withmoxie.com/01/austin-morrow1/discovery-form---new-website?inFrame=true&sourceUrl=${encodeURIComponent(currentUrl)}`;
    }

    // Function to initialize the iFrameResizer.
    const initIFrameResizer = () => {
      if (window.iFrameResize && iframeRef.current) {
        window.iFrameResize(
          {
            heightCalculationMethod: 'min',
            sizeWidth: true,
            sizeHeight: true,
            log: false,
            checkOrigin: false,
          },
          iframeRef.current
        );
      }
    };

    // Delay initialization slightly to ensure the external script has loaded.
    const timer = setTimeout(() => {
      initIFrameResizer();
    }, 100);

    // Listen for messages from the iframe (for example, a redirect request).
    const handleMessage = (event) => {
      if (
        event.origin === 'https://hello.withmoxie.com' &&
        event.data &&
        event.data.startsWith('[Redirect]')
      ) {
        const url = event.data.slice(10);
        window.location.href = url;
      }
    };

    window.addEventListener('message', handleMessage);

    // Cleanup event listener and timer when the component unmounts.
    return () => {
      clearTimeout(timer);
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  return (
    <>
      {/* Load the external iFrameResizer script.
          The "afterInteractive" strategy ensures the script loads after hydration.*/}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/4.3.10/iframeResizer.min.js"
        strategy="afterInteractive"
      />
      <div className="w-full min-h-[500px]">
        <iframe
          ref={iframeRef}
          id="moxie-discovery-form---new-website"
          allowtransparency="true"
          className="p-0 m-0 border-0 max-w-full min-w-full"
          title="Moxie Form"
        ></iframe>
      </div>
    </>
  );
};

export default MoxieForm;
