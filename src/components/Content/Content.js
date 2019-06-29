import React from "react";

import "./Content.css";

export default ({ sub_category, filter }) => {
  return (
    <div className="content_wrapper">
      {sub_category.content.map(content => {
        return filter.find(select => select === content.title)
          ?
          <div key={content.title} className="content">
            <h2 className="title">
              {content.title}
            </h2>
            <p className="text">{content.text}</p>
          </div>
          :
          null
      })}
    </div>
  );
};
