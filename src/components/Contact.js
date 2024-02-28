import React, { useEffect } from 'react';

const Contact = () => {
    useEffect(() => {
        // Load the Calendly script
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        document.body.appendChild(script);
    
        script.onload = () => {
          // Initialize the inline widget
          if (window.Calendly) {
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/your_calendly_username',
              parentElement: document.getElementById('calendly-inline-widget'),
              prefill: {},
              utm: {}
            });
          }
        };
    
        return () => {
          // Clean up the script
          document.body.removeChild(script);
        };
      }, []);

    return (
        <div>
            <div id="calendly-inline-widget" style={{ minWidth: '320px', height: '630px' }}></div>
        </div>
    );
};

export default Contact;