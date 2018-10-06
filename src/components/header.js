import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__skew" />
      <div className="header__border" />
      <h1>Bottega Madlibs</h1>
      <p>
        Fill out the fields below and click the generate button to see the
        MadLib story.
      </p>
    </div>
  );
};

export default Header;