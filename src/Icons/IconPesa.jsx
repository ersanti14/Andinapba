import React from "react";

export const IconPesa = ({ width = 80, height = 80}) => {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="#00668086"
    >
      <path d="m448 64h-25.98c16.42 28.28 25.98 61.01 25.98 96 0 105.87-86.13 192-192 192s-192-86.13-192-192c0-34.99 9.56-67.72 25.98-96h-25.98c-35.29 0-64 28.71-64 64v320c0 35.29 28.71 64 64 64h384c35.29 0 64-28.71 64-64v-320c0-35.29-28.71-64-64-64zm-192 256c88.37 0 160-71.63 160-160s-71.63-160-160-160-160 71.63-160 160 71.63 160 160 160zm-.3-151.94 33.58-78.36c3.5-8.17 12.94-11.92 21.03-8.41 8.12 3.48 11.88 12.89 8.41 21l-33.67 78.55c6.68 7.16 10.95 16.61 10.95 27.16 0 22.09-17.91 40-40 40s-40-17.91-40-40c0-21.98 17.76-39.77 39.7-39.94z"/>
    </svg>
  );
};

export default IconPesa;
