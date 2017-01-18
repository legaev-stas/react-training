import React from 'react';
import './category.css';
import Icon from '../icon';
import {Link} from 'react-router';

const Category = ({collection, activeCategoryId, id, name, parent, editHandler, deleteHandler, addNestedCategory}) => (
    <div className={"category " + (activeCategoryId === id ? 'active' : '')}>

        <Link to={"/" + id} className="name" activeClassName="active">{name}</Link>
        <div className="icons">
            <Icon type="edit" onClick={() => editHandler(id)}/>
            <Icon type="delete" onClick={() => deleteHandler(id)}/>
            <Icon type="add" onClick={() => addNestedCategory(id)}/>
        </div>
        <div className="sub">
            {collection.filter(category => category.parent === id).map((props) => <Category
                key={props.id}
                {...props}
                collection={collection}
                activeCategoryId={activeCategoryId}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
                addNestedCategory={addNestedCategory}
            />)}
        </div>
    </div>
);

export default Category;