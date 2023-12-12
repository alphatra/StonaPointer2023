import { useState } from 'react';

export function Menu() {
    const [activeItem, setActiveItem] = useState(null);
    const menuItems = ['Wydarzenia', 'Blog', 'Poznaj nas', 'Projekty', 'Kontakt'];

    let menuItemStyles = "mt-0 mr-2.5 pt-2.5 pb-2.5 pr-5 pl-5 text-center rounded-3xl o-underline text-black border border-gray-300 border-solid grow-0 shrink-0 cursor-pointer";
    let menuItemStylesActive = `${menuItemStyles} grow bg-black text-slate-200 border border-gray-300 border-solid`;

    return (
        <div className="text-xs flex items-center justify-start .bg-white py-2.5 px-5 my-7 mx-auto text-base">
            {menuItems.map((item, index) => (
                <a key={index}
                   className={activeItem === index ? menuItemStylesActive : menuItemStyles}
                   onClick={() => setActiveItem(index)}>
                    {item}
                </a>
            ))}
        </div>
    );
}

export default Menu;


  