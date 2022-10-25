import { useState } from 'react';

const Menu = () => {
    const [menu, setMenu] = useState(1)
    return (
        <div className="menu">
            <ul>
                <li className={menu === 1? 'active': ''} onClick={() => setMenu(1)}>Home</li>
                <li className={menu === 2? 'active': ''} onClick={() => setMenu(2)}>Profile</li>
                <li className={menu === 3? 'active': ''} onClick={() => setMenu(3)}>Messase</li>
                <li className={menu === 4? 'active': ''} onClick={() => setMenu(4)}>News</li>
                <li className={menu === 5? 'active': ''} onClick={() => setMenu(5)}>Contact</li>
            </ul>
        </div>
    )
}

export default Menu;