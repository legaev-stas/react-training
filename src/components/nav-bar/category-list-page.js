import React from 'react';
import {SearchBar, Flex, WingBlank, Icon} from 'antd-mobile';
import './category-list-page.css';


export class AppNavBar extends React.Component {
    // bug fixing when component doesn't show cancel button after focus
    onSetSearchModeOn = () => {
        setTimeout(this.props.onSetSearchModeOn, 0)
    }

    render() {
        return (
            <div className="search-bar">
                <Flex alignContent="center">
                    <Flex.Item>
                        <SearchBar
                            cancelText="Cancel"
                            value={this.props.searchQuery}
                            showCancelButton={this.props.searchMode}
                            onFocus={this.onSetSearchModeOn}
                            onCancel={this.props.onSetSearchModeOff}
                            onChange={this.props.onChangeSearchQuery}
                        />
                    </Flex.Item>
                    <div className={this.props.searchMode ? 'hidden icon-holder' : 'icon-holder'}>
                        <WingBlank>
                            <Icon type="plus" size="sm" onClick={this.props.addItem} color="#108ee9"/>
                        </WingBlank>
                    </div>
                </Flex>
            </div>
        );
    }
}
