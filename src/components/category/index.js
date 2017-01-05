import React from 'react';
import './category.css';
import Icon from '../icon';
import {Link} from 'react-router'

const Category = ({categoryList, activeCategoryId, id, name, parent, editHandler, deleteHandler, addHandler}) => (
    <div className={"category " + (activeCategoryId === id ? 'active' : '')}>

        <Link to={"/" + id} className="name" activeClassName="active">{name}</Link>
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
            />)}
        </div>
    </div>
);

export default Category;