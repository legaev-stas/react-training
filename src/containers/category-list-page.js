import React from 'react';
import {List} from '../components/list';
import {AppNavBar} from '../components/nav-bar/category-list-page';
import {Modal} from 'antd-mobile';


export class CategoryListPage extends React.Component {
    constructor(props) {
        super(props);

        this.editCategory = this.editCategory.bind(this);
        this.deleteCategory = this.deleteCategory.bind(this);
        this.openCategory = this.openCategory.bind(this);
    }

    deleteCategory({id, badge}) {
        const heading = 'Delete Category';
        const message = `Are you sure? The category contains ${badge} uncompleted tasks`;

        if (badge) {
            Modal.alert(heading, message, [
                {text: 'Cancel', style: 'default'},
                {text: 'OK', onPress: () => this.props.deleteCategory(id)},
            ]);
        } else {
            this.props.deleteCategory(id);
        }
    }

    openCategory({id}) {
        this.props.openCategory(id);
    }

    editCategory({id, title:originalTitle}) {
        Modal.prompt('Update category name', '',
            [
                {text: 'Cancel'},
                {
                    text: 'Update',
                    onPress: title => new Promise((resolve) => {
                        this.props.editCategory({
                            id,
                            title
                        });
                        resolve();
                    }),
                },
            ], 'default', originalTitle);
    }

    render() {
        return (
            <div>
                <AppNavBar addCategory={this.props.addCategory}/>
                <List
                    collection={this.props.collection}
                    onEdit={this.editCategory}
                    onDelete={this.deleteCategory}
                    onClick={this.openCategory}
                />
            </div>
        );
    }
}

