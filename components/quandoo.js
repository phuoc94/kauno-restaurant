import Script from 'next/script';

export default function Quandoo() {
    return (
        <section style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div id="quandoo-booking-widget"></div>
            
            <Script
                src="https://booking-widget.quandoo.com/index.js"
                data-merchant-id="105452"
                data-theme="light"
                data-primary-color="4f603d"
                strategy="afterInteractive"
            />

        </section>
    )
}
