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

    const [activeMenuItem, setActiveMenuItem] = useState<MenuItem | null>(null);

    const handleMenuItemHover = (menuItem: MenuItem) => {
        setActiveMenuItem(menuItem);
    };

    const handleMenuLeave = () => {
        setActiveMenuItem(null);
    };

    const getMenuItemWidth = (menuItem: MenuItem) => {
        if (activeMenuItem === null || activeMenuItem === menuItem) {
            return 'auto';
        } else {
            return 'flex';
        }
    };

    return (
        <div className="menu-container" onMouseLeave={handleMenuLeave}>
            <div className="menu">
                {menuItems.map((menuItem, index) => (
                    <a
                        href={menuItem.label.toLowerCase().replace(' ', '-')}
                        key={index}
                        className={`menu-button ${activeMenuItem === menuItem ? 'active' : ''}`}
                        style={{
                            backgroundColor: menuItem.bgColor,
                            color: menuItem.textColor,
                            width: getMenuItemWidth(menuItem),
                        }}
                        onMouseEnter={() => handleMenuItemHover(menuItem)}
                        onMouseLeave={() => setActiveMenuItem(null)}
                    >
                        {menuItem.label}
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Menu;
