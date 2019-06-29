import React from 'react';

import './SideMenu.css';

export default ({ sub_categories, selected, callback }) => (
    <div className="side_menu">
        {
            sub_categories.map(sub_category => (
                <button
                    className={selected === sub_category ? 'selected' : ''}
                    key={sub_category.label}
                    onClick={() => callback(sub_category)}>
                    {sub_category.label}
                </button>
            ))
        }
    </div>
)