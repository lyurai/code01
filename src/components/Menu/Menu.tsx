// Menu.tsx

import React, { useState } from 'react';
import './Menu.css';

interface MenuItem {
    label: string;
    bgColor: string;
    textColor: string;
}

const Menu: React.FC = () => {
    const menuItems: MenuItem[] = [
        { label: 'Notope Typefaces', bgColor: '#FDEB4E', textColor: '#000000' },
        { label: 'Custom', bgColor: '#FF5733', textColor: '#000000' }, // Изменено на "Custom"
        { label: 'Publishing', bgColor: '#44E9CB', textColor: '#000000' },
        { label: 'About', bgColor: '#9268E3', textColor: '#FFFFFF' },
    ];


    return (
        <div className="menu-container">
            <div className="menu">
                {menuItems.map((menuItem, index) => (
                    <a
                        href={menuItem.label.toLowerCase().replace(' ', '-')}
                        key={index}
                        className="menu-button"
                        style={{
                            backgroundColor: menuItem.bgColor,
                            color: menuItem.textColor,
                        }}
                    >
                        {menuItem.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Menu;
