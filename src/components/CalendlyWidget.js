import React, { useEffect } from 'react';

const CalendlyWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        script.onload = () => {
            CalendlyWidget.initBadgeWidget({
                url: 'https://calendly.com/dereksutton?primary_color=e2725b',
                text: 'Schedule Time to Chat 1:1',
                color: '#e2725b',
                textColor: '#ffffff',
                branding: true
            });
        };

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default CalendlyWidget;