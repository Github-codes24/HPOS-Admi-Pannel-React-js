import React from "react";
import Svg from "react-inlinesvg";

const SvgIcon = ({ className, path, svgClassName }) => {
  const containerClass = className ? `svg--container ${className}` : 'svg--container';
  const mainClass = svgClassName ? `svg--icon ${svgClassName}` : 'svg--icon';
  return (
    <i className={containerClass}>
      <Svg src={path} className={mainClass} />
    </i>
  );
};

export { SvgIcon };