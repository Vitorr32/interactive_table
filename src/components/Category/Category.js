import React, { Component } from 'react';
import SideMenu from '../SideMenu/SideMenu';
import Filter from '../Filter/Filter';
import Content from '../Content/Content';

import './Category.css';

export default class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: [],
            selected: null
        }

        this.onChangeSubCategory = this.onChangeSubCategory.bind(this);
        this.onChangeFilter = this.onChangeFilter.bind(this);
    }

    componentWillMount() {
        this.setState({ selected: this.props.category.sub_categories[0] });
    }

    onChangeSubCategory(category) {
        this.setState({ selected: category });
    }

    onChangeFilter(filter) {
        this.setState({ filter })
    }

    render() {
        const { category } = this.props;
        return (
            <div key={category.label} className="category">
                <SideMenu
                    selected={this.state.selected}
                    sub_categories={category.sub_categories}
                    callback={this.onChangeSubCategory}
                />

                <div className="category_content">
                    <h2 className="title">
                        {category.label}
                    </h2>
                    <Filter onChangeFilter={this.onChangeFilter} content={this.state.selected.content} />

                    <Content
                        filter={this.state.filter}
                        sub_category={this.state.selected}
                    />
                </div>
            </div>
        )
    }
}