import React from 'react';
import Checkbox from '../../components/forms/checkbox';
import InputGroup from '../../components/forms/input-group';

const Header = ({title, showDone, setSearchValue, doneToggle, resetSearchValue}) => (
    <div className="header cf">
        <h1 className="left">To-Do List</h1>

        <div className="search-bar right">
            <Checkbox
                checked={showDone}
                onChange={doneToggle}
            >Show done</Checkbox>
            <InputGroup
                type="text"
                icon="clear-left"
                placeholder="Search"
                value={title}
                onChange={setSearchValue}
                onReset={resetSearchValue}
            />
        </div>
    </div>
);

export default Header;
