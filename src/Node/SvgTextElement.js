import React from 'react';
import uuid from 'uuid';
import T from 'prop-types';

export default class SvgTextElement extends React.PureComponent {
  render() {
    const { name, attributes, nameData, attributesData } = this.props;
    return (
      <g>
        <text className="nodeNameBase" {...name}>
          {nameData}
        </text>
        <text className="nodeAttributesBase">
          {attributesData &&
            Object.keys(attributesData).map(labelKey => (
              <tspan {...attributes} key={uuid.v4()}>
                {labelKey}: {attributesData[labelKey]}
              </tspan>
            ))}
        </text>
      </g>
    );
  }
}

SvgTextElement.defaultProps = {
  attributesData: undefined,
};

SvgTextElement.propTypes = {
  nameData: T.string.isRequired,
  attributesData: T.object,
  name: T.object.isRequired,
  attributes: T.object.isRequired,
};
