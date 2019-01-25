import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Link extends PureComponent {
  render() {
    const { url, name, children, rel, target } = this.props;

    return (
      <a
        href={url}
        name={name}
        rel={rel}
        target={target}
      >
        {children}
      </a>
    );
  }
}

Link.propTypes = {
    /** Inner link text */
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /** Link's name */
    name: PropTypes.string,

    /** Specifies the relationship between the current document and the linked document, for example nofollow */
    rel: PropTypes.string,

    /** The target attribute specifies where to open the linked document, for example _self, _blank */
    target: PropTypes.string,

    /** Url link address to be specified in anchor href attribute for example 'javascript:void(0);', '#', '/home' */
    url: PropTypes.string,
};

Link.defaultProps = {};

export default Link;
