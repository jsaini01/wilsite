import * as React from "react";

const SvgTwiter = (props) => (
  <svg
    width={27}
    height={27}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 27C20.956 27 27 20.956 27 13.5S20.956 0 13.5 0 0 6.044 0 13.5 6.044 27 13.5 27Zm5.065-17.192a5.407 5.407 0 0 0 1.55-.424v.001a5.489 5.489 0 0 1-1.347 1.397c.005.116.008.233.008.349 0 3.568-2.715 7.682-7.682 7.682A7.637 7.637 0 0 1 6.955 17.6a5.418 5.418 0 0 0 3.998-1.119 2.701 2.701 0 0 1-2.522-1.874c.405.077.822.061 1.22-.046a2.7 2.7 0 0 1-2.167-2.648v-.035c.375.209.795.324 1.223.338a2.701 2.701 0 0 1-.835-3.605 7.668 7.668 0 0 0 5.565 2.821 2.702 2.702 0 0 1 4.6-2.463 5.391 5.391 0 0 0 1.715-.655 2.707 2.707 0 0 1-1.187 1.494Z"
      fill={props.color}
    />
  </svg>
);

export default SvgTwiter;
