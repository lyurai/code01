import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

interface MenuItem {
    label: string;
    bgColor: string;
    textColor: string;
}

const Menu: React.FC = () => {
    const menuItems: MenuItem[] = [
        { label: 'Instagram', bgColor: '#44E9CB', textColor: '#000000' },
        { label: 'halo@notope.nl', bgColor: '#ED519B', textColor: '#FFFFFF' },
    ];

    const [activeMenuItem, setActiveMenuItem] = useState<MenuItem | null>(null);

    const handleMenuItemHover = (menuItem: MenuItem) => {
        setActiveMenuItem(menuItem);
    };

    const handleMenuLeave = () => {
        setActiveMenuItem(null); // Set active menu item to null when leaving the menu
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
                    <Link
                        to={menuItem.label.toLowerCase()} // Приведем к нижнему регистру и используем как часть URL
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
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Menu;
