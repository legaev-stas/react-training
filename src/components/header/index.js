import React from 'react';
import Checkbox from '../../components/forms/checkbox';
import InputGroup from '../../components/forms/input-group';

const Header = ({searchText, showDone, changeFilterShowDone, changeFilterSearch, resetFilterSearch}) => (
    <div className="header cf">
        <h1 className="left">To-Do List</h1>

        <div className="search-bar right">
            <Checkbox
                checked={showDone}
                onChange={(e) => changeFilterShowDone(e.target.checked)}
            >Show done</Checkbox>
            <InputGroup
                type="text"
                icon="clear-left"
                placeholder="Search"
                value={searchText}
                onChange={(e) => changeFilterSearch(e.target.value)}
                onReset={resetFilterSearch}
            />
        </div>
    </div>
);

export default Header;
