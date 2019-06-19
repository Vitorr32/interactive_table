/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import './SideMenu.css';

export default ({ category, color, sub_categories, selected, callback }) => (
    <div className="side_menu">
        {
            sub_categories.map((sub_category, index) => (
                <button
                    className={selected === sub_category ? 'selected' : ''}
                    key={sub_category.label}
                    css={css`
                        background-color: ${color};
                            &.selected {
                            color: ${color};
                            }
                        `}
                    onClick={() => callback(category, index)}>
                    {sub_category.label}
                </button>
            ))
        }
    </div>
)