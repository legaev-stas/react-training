import React from 'react';
import {fromJS} from 'immutable';

import {shallow, render, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({adapter: new Adapter()});

import {ListItem} from './item';


let model;
beforeEach(()=>{
    model = fromJS({
        id: 'id',
        completed: false,
        badge: 0,
        title: 'Title'
    });
});

it('should render right (delete) swipe option when onDelete property is provided', () => {
    const tree = mount(<ListItem model={model} onDelete={jest.fn}/>, {mode: 'shallow'});
    expect(toJson(tree)).toMatchSnapshot();
});

it('should render left (edit) swipe option when onEdit property is provided', () => {
    const tree = mount(<ListItem model={model} onEdit={jest.fn}/>, {mode: 'shallow'});
    expect(toJson(tree)).toMatchSnapshot();
});

it('should set arrow="horizontal" on nested List.Item when arrow property is provided', () => {
    const tree = mount(<ListItem model={model} arrow/>, {mode: 'shallow'});
    expect(toJson(tree)).toMatchSnapshot();
});

it('should rendered nested Checkbox when checkable property is provided', () => {
    const tree = mount(<ListItem model={model} checkable/>, {mode: 'shallow'});
    expect(toJson(tree)).toMatchSnapshot();
});

it('onStatusChange callback is invoked with correct arguments when Checkbox is clicked', () => {
    const onStatusChange = jest.fn();
    const tree = mount(<ListItem model={model} onStatusChange={onStatusChange} checkable/>, {mode: 'shallow'});
    const eventMock = {
        stopPropagation() {
        }
    };
    tree.find('Checkbox').simulate('click', eventMock);
    expect(onStatusChange).toHaveBeenCalledWith({
        id: 'id',
        completed: true,
    })
});

it('onDelete method should invoke callback onDelete with correct argument (model)', () => {
    const onDelete = jest.fn();
    const tree = mount(<ListItem model={model} onDelete={onDelete}/>, {mode: 'shallow'});
    tree.instance().onDelete();
    expect(onDelete).toHaveBeenCalledWith(model.toJS());
});

it('onEdit method should invoke callback onEdit with correct argument (model)', () => {
    const onEdit = jest.fn();
    const tree = mount(<ListItem model={model} onEdit={onEdit}/>, {mode: 'shallow'});
    tree.instance().onEdit();
    expect(onEdit).toHaveBeenCalledWith(model.toJS());
});

it('onClick method should invoke callback onClick with correct argument (model)', () => {
    const onClick = jest.fn();
    const tree = mount(<ListItem model={model} onClick={onClick}/>, {mode: 'shallow'});
    tree.instance().onClick();
    expect(onClick).toHaveBeenCalledWith(model.toJS());
});


