import React, { Component } from "react";

import Characteristic from "../../components/Characteristic/Characteristic";
import Category from "../../components/Category/Category";

import "./Page.css";

export default class Page extends Component {
  render() {
    const { characteristic } = this.props;

    return (
      <main>
        <Characteristic
          label={characteristic.label}
          definition={characteristic.definition}
          font={characteristic.font}
        />
        <div className="tabelissima">
          {characteristic.categories.map(category => <Category key={category.label} category={category} />)}
        </div>
      </main>
    );
  }
}
