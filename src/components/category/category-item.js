import React from 'react';
import './category.css';
import Icon from '../icon';
import {Link} from 'react-router';

export class CategoryItem extends React.Component {
    constructor(props){
        super(props);

        this.editHandler = this.editHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.addNestedCategory = this.addNestedCategory.bind(this);
    }

    editHandler(){
        this.props.editHandler(this.props.id);
    }
    deleteHandler(){
        this.props.deleteHandler(this.props.id);
    }
    addNestedCategory(){
        this.props.addNestedCategory(this.props.id);
    }

    render(){
        const {collection, id, active, name, editHandler, deleteHandler, addNestedCategory} = this.props;
        return (
            <div className={"category " + (active ? 'active' : '')}>

                <Link to={"/" + id} className="name" activeClassName="active">{name}</Link>
                <div className="icons">
                    <Icon type="edit" onClick={this.editHandler}/>
                    <Icon type="delete" onClick={this.deleteHandler}/>
                    <Icon type="add" onClick={this.addNestedCategory}/>
                </div>
                <div className="sub">
                    {collection.filter(category => category.parent === id).map(props => <CategoryItem
                        key={props.id}
                        {...props}
                        collection={collection}
                        editHandler={editHandler}
                        deleteHandler={deleteHandler}
                        addNestedCategory={addNestedCategory}
                    />)}
                </div>
            </div>
        );
    }
}
