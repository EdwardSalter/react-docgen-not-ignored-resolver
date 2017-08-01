var reactDocs = require('react-docgen');
const resolver = require('./main');
const assert = require('assert');

const src =
`import React, { PropTypes } from 'react';

/** A description */
const NotIgnoredDescription = props => {
    return React.createElement('div', null);
};

/**
 * Another description
 */
const NotIgnoredDescription2 = props => {
    return React.createElement('div', null);
};

/** A component that is ignored @ignore */
const AnIgnoredDescription = props => {
    return React.createElement('div', null);
};

/**
 * Another component that is ignored
 * @ignore
 */
const AnIgnoredDescription2 = props => {
    return React.createElement('div', null);
};

/**
 * This one should not be ignored
 * @ignored
 */
const TestingTheRegex = props => {
    return React.createElement('div', null);
};`
var componentInfo = reactDocs.parse(src, resolver);
assert.equal(componentInfo.length, 3);
