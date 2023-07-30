import React from 'react'

const Header = ({menus}) => {
    return (
        <header>
            <div>
                <img src="" alt="" />
            </div>   
            <nav>
                <ul>
                    {menus.map((item) => {
                       return (
                        <li key={item.id}><a href={item.path}>{item.name}</a></li>
                       )
                       })}
                </ul>
            </nav>    
        </header>
    )
}

export default Header;