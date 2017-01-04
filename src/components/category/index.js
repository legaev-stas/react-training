import React from 'react';
import './category.css';
import Icon from '../icon';

const Category = ({categoryList, activeCategoryId, id, name, parent, setActive, editHandler, deleteHandler, addHandler}) => (
    <div className={"category " + (activeCategoryId === id ? 'active' : '')}>

        <div className="name" onClick={() => setActive(id)}>{name}</div>
        <div className="icons">
            <Icon type="edit" onClick={editHandler} eventRef={id}/>
            <Icon type="delete" onClick={deleteHandler} eventRef={id}/>
            <Icon type="add" onClick={addHandler} eventRef={id}/>
        </div>
        <div className="sub">
            {categoryList.filter(category => category.parent === id).map((props) => <Category
                key={props.id}
                {...props}
                categoryList={categoryList}
                activeCategoryId={activeCategoryId}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                addHandler={addHandler}
                setActive={setActive}
            />)}
        </div>
    </div>
);

export default Category;