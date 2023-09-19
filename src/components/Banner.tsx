import React, { useState, useEffect, useRef } from 'react';
import './Banner.css';
import backgroundImage from '../002.png'; // Изменен импорт на 002.png

const Banner: React.FC = () => {
    const [fontSize, setFontSize] = useState(40);
    const bannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updateFontSize = () => {
            if (bannerRef.current) {
                const bannerWidth = bannerRef.current.offsetWidth;
                const desiredWidth = bannerWidth - 300; // Ширина с отступом в 150 пикселей от краев
                const content = "NOT Signalizer is out!";
                const textWidth = getTextWidth(content, `${fontSize}px Helvetica, Arial, sans-serif`);
                if (textWidth > desiredWidth) {
                    setFontSize((prevFontSize) => prevFontSize - 1);
                }
            }
        };

        const getTextWidth = (text: string, font: string) => {
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            if (context) {
                context.font = font;
                return context.measureText(text).width;
            }
            return 0;
        };

        window.addEventListener('resize', updateFontSize);
        updateFontSize();

        return () => {
            window.removeEventListener('resize', updateFontSize);
        };
    }, [fontSize]);

    return (
        <div className="banner-container">
            <div className="banner-background">
                <img src={backgroundImage} alt="Background Image" className="banner-image" /> {/* Изменен src на backgroundImage */}
            </div>
            <div className="banner-content" ref={bannerRef}>
                <h2 className="banner-text" style={{ fontSize: `${fontSize}px` }}>
                    NOT Signalizer is out!
                </h2>
            </div>
        </div>
    );
};

export default Banner;
