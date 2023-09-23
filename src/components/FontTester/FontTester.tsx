import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import './FontTester.css';

const FontTester: React.FC = () => {
    const [fontSize, setFontSize] = useState<number>(100);
    const [userText, setUserText] = useState<string>('Your Text Here');

    const handleFontSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFontSize(Number(e.target.value));
    };

    const handleTextChange = (e: React.FormEvent<HTMLDivElement>) => {
        setUserText((e.target as HTMLDivElement).textContent || '');
    };

    const contentRef = useRef<HTMLDivElement>(null);

    // FIXME: Errors with range here
    // useEffect(() => {
    //     const savedRange = localStorage.getItem('selection');
    //     if (savedRange && contentRef.current) {
    //         const range = JSON.parse(savedRange) ?? new Range();
    //         const sel = window.getSelection();
    //         if (sel && sel.rangeCount) {
    //             sel.removeAllRanges();
    //             sel.addRange(range);
    //         }
    //     }
    // }, [fontSize, userText]);

    // FIXME: Errors with range here
    // useEffect(() => {
    //     saveSelection();
    // }, [fontSize]);

    const saveSelection = () => {
        const sel = window.getSelection();
        if (sel && sel.rangeCount && contentRef.current) {
            const range = sel.getRangeAt(0).cloneRange();
            range.setStart(contentRef.current, contentRef.current.childNodes.length);
            localStorage.setItem('selection', JSON.stringify(range));
        }
    };

    return (
        <div className="FontTester" style={{ padding: '15px', background: '#EEEEEE' }}>
            <div className="FontName">NOT Traffic Worm</div>
            <div className="FontSizeSlider">
                <div className="CurrentValue">{fontSize}px</div>
                <input
                    type="range"
                    min="20"
                    max="600"
                    value={fontSize}
                    onChange={handleFontSizeChange}
                />
            </div>
            <div
                ref={contentRef}
                className="SampleText"
                style={{
                    fontSize: `${fontSize}px`,
                    marginTop: '15px',
                    padding: '15px',
                    background: 'white',
                    lineHeight: '90%',
                }}
                contentEditable
                onInput={handleTextChange}
            >
                {userText}
            </div>
        </div>
    );
};

export default FontTester;
