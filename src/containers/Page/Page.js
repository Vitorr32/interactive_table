import React, { Component } from "react";
import Content from "../../components/Content/Content";

export default class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: []
    };
  }

  componentWillMount() {
    const selectedCategories = this.props.characteristic.categories.map(
      category => {
        category.selected = category.subCategories[0];
        return category;
      }
    );

    this.setState({ categories: selectedCategories });
  }

  render() {
    const { characteristic, show } = this.props;

    if (!show) {
      return null;
    }

    return (
      <main>
        <h3 className="title">{characteristic.title}</h3>

        {this.state.categories.map(category => {
          return (
            <div className="table_wrapper">
              {category.label}
              <div className="table">
                <div className="menu">
                  {category.subCategories.map(subCategory => {
                    return <button>{subCategory.label}</button>;
                  })}
                </div>
                <div className="content">
                  <Content content={category.selected} />
                </div>
              </div>
            </div>
          );
        })}
      </main>
    );
  }
}
