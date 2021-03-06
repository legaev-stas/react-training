import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Immutable from 'immutable';
import SwipeAction from 'antd-mobile/lib/swipe-action';
import List from 'antd-mobile/lib/list';
import Badge from 'antd-mobile/lib/badge';
import Checkbox from 'antd-mobile/lib/checkbox';
import Flex from 'antd-mobile/lib/flex';
import './styles.css';


export class ListItem extends React.PureComponent {
    static propTypes = {
        model: PropTypes.instanceOf(Immutable.Map).isRequired,
        onDelete: PropTypes.func,
        onEdit: PropTypes.func,
        onClick: PropTypes.func,
        onStatusChange: PropTypes.func,
        arrow: PropTypes.bool,
        checkable: PropTypes.bool
    }

    componentDidMount(){
        ReactDOM.findDOMNode(this).addEventListener('touchmove', this.preventScrollWhenSwipe, false);
    }
    componentWillUnmount(){
        ReactDOM.findDOMNode(this).removeEventListener('touchmove', this.preventScrollWhenSwipe, false);
    }

    preventScrollWhenSwipe = (e) => {
        if(ReactDOM.findDOMNode(this).querySelector('.am-swipe-swiping')){
            e.preventDefault();
        }
    }

    onDelete = () => {
        this.props.onDelete && this.props.onDelete(this.props.model.toJS());
    }

    onClick = () => {
        this.props.onClick && this.props.onClick(this.props.model.toJS());
    }

    onEdit = () => {
        this.props.onEdit && this.props.onEdit(this.props.model.toJS());
    }

    onStatusChange = (e) => {
        e.stopPropagation();
        let model = this.props.model.set('completed', !this.props.model.get('completed'));
        this.props.onStatusChange(model.toJS());
    }

    render() {
        return (
            <SwipeAction
                style={{backgroundColor: 'gray'}}
                autoClose
                right={this.props.onDelete && [
                    {
                        text: 'Delete',
                        onPress: this.onDelete,
                        style: {backgroundColor: 'red', color: 'white'},
                    }
                ]}
                left={this.props.onEdit && [
                    {
                        text: 'Edit',
                        onPress: this.onEdit,
                        style: {backgroundColor: 'blue', color: 'white'},
                    }
                ]}
            >
                <List.Item
                    extra={<Badge text={this.props.model.get('badge')} overflowCount={10}/>}
                    arrow={this.props.arrow && "horizontal"}
                    onClick={this.onClick}
                >
                    <Flex>
                        {this.props.checkable &&
                        <Checkbox checked={this.props.model.get('completed')} onClick={this.onStatusChange}/>
                        }
                        <Flex.Item>{this.props.model.get('title')}</Flex.Item>
                    </Flex>
                </List.Item>
            </SwipeAction>
        );
    }
}
