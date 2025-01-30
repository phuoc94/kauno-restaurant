import {
  useEffect,
  useState,
} from 'react';

import Script from 'next/script';

export default function Quandoo() {
    const [showWidget, setShowWidget] = useState(true);

    useEffect(() => {
        const checkWidget = () => {
            const widget = document.getElementById('quandoo-booking-widget');
            setShowWidget(widget && widget.children.length > 0);
        };

        checkWidget();
        const checkInterval = setInterval(checkWidget, 1000);
        return () => clearInterval(checkInterval);
    }, []);

    return (
        <section style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div id="quandoo-booking-widget"></div>
            
            <Script
                src="https://booking-widget.quandoo.com/index.js"
                data-merchant-id="105452"
                data-theme="light"
                data-primary-color="4f603d"
                strategy="afterInteractive"
                onLoad={() => {
                    if (window.QuandooBooking) {
                        window.QuandooBooking.init();
                    }
                }}
            />
            {!showWidget && (
                <p style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                    
                        <>
                            <button
                                onClick={() => window.location.reload()}
                                style={{
                                    background: 'none',
                                    border: '1px solid #4f603d',
                                    color: '#4f603d',
                                    padding: '0.25rem 0.5rem',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'
                                }}
                            >
                                Päivitä sivu
                            </button>
                            <span>tai voit myös</span>
                        </>
                
                    <a
                        href="https://www.quandoo.fi/fi/checkout-widget/widget?merchantId=105452&primaryColor=4f603d&theme=light&aid=146&utm_source=quandoo-partner&utm_medium=widget-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#4f603d', fontWeight: 'bold' }}
                    >
                        Varaa tästä
                    </a>
                </p>
            )}
        </section>
    )
}