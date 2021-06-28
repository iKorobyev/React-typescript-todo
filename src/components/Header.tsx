import React, {FC} from 'react';

const Header: FC = () => {
    return (
        <header className="todo__header">
            <div className="container">
                <h1 className="header__title">React TS ToDo</h1>
            </div>
        </header>
    );
};

export default Header;