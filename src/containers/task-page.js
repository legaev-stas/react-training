import React from 'react';
import NavBar from '../components/nav-bar/task-page';
import {Form} from '../components/task-edit-form';
import {Page, Header, Content} from '../components/layout';


export class TaskPage extends React.Component {
    render() {
        return (
            <Page>
                <Header>
                    <NavBar goBack={this.props.goBack}/>
                </Header>
                <Content>
                    <Form
                        model={this.props.task}
                        categoryPickerList={this.props.categoryPickerList}
                        categoryTitle={this.props.categoryTitle}
                        onTitleChange={this.props.onTitleChange}
                        onDescriptionChange={this.props.onDescriptionChange}
                        onCategoryChange={this.props.onCategoryChange}
                    />
                </Content>
            </Page>
        );
    }
}

