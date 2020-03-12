import React from "react";
import PropTypes from "prop-types";

export const Layout = ({ children, aside }) => (
    <section className="section">
        <div className="container">
            <h1 className="title">Book store</h1>
            <div className="columns">
                <div className="column">{children}</div>
                <div className="column is-one-third">{aside}</div>
            </div>
        </div>
    </section>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    aside: PropTypes.node.isRequired
};
