import React, { Component } from 'react';

import './Filter.css';

export default class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: []
        };
    }

    toogleSelection(selection) {
        const index = this.state.selected.findIndex(selected => selected === selection);

        const selections = this.state.selected.slice();

        if (index === -1) {
            selections.push(selection);
        }
        else {
            selections.splice(index, 1);
        }

        this.setState({ selected: selections });

        this.props.onChangeFilter(selections);
    }

    render() {
        return (
            <div className={`filter_wrapper ${this.state.selected.length !== 0 ? 'hasSelection' : ''}`}>
                {
                    this.props.content.map(content => {
                        return (
                            <div
                                key={content.title}
                                className={`filter_toogle ${this.state.selected.includes(content.title) ? 'selected' : ''}`}
                                onClick={() => this.toogleSelection(content.title)}>
                                <span>{content.title}</span>
                                <img src={content.img} alt={content.title} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}