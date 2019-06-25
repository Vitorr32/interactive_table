import React, { Component } from "react";
import Content from "../../components/Content/Content";

import "./Page.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import Filter from "../../components/Filter/Filter";

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
      selections: []
    };

    this.onChangeSubCategory = this.onChangeSubCategory.bind(this);
    this.onSelectionChange = this.onSelectionChange.bind(this);
  }

  componentWillMount() {
    const selectedCategories = this.props.characteristic.categories.map(
      category => {
        category.selected = category.sub_categories[0];
        return category;
      }
    );

    document.body.style.backgroundColor = this.props.characteristic.color;

    this.setState({ categories: selectedCategories });
  }

  onChangeSubCategory(category, sub_category) {
    let shallow_categories = this.state.categories.slice();

    shallow_categories[category].selected =
      shallow_categories[category].sub_categories[sub_category];

    this.setState({ categories: shallow_categories });
  }

  onSelectionChange(selections) {
    this.setState({ selections })
  }

  render() {
    const { characteristic } = this.props;

    return (
      <main>
        <h3 className="title">{characteristic.label}</h3>
        {this.state.categories.map((category, category_index) => (
          <div key={category.label} className="table_wrapper">
            <h2 className="title" style={{ backgroundColor: category.color }}>
              {category.label}
            </h2>
            <div className="table">
              <SideMenu
                color={category.color}
                selected={category.selected}
                category={category_index}
                sub_categories={category.sub_categories}
                callback={this.onChangeSubCategory}
              />
              <Filter onSelectionChange={this.onSelectionChange} content={category.selected.content.map(content => content.title)} />
              <Content
                color={category.color}
                selection={this.state.selections}
                sub_category={category.selected}
                numberOfCategories={category.sub_categories.lenght}
              />
            </div>
          </div>
        ))}
      </main>
    );
  }
}
