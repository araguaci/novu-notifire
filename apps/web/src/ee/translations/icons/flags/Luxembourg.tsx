import React from 'react';

export function Luxembourg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={40} height={40} fill="none" {...props}>
      <g clipPath="url(#prefix__clip0_568_194049)">
        <path d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z" fill="#F0F0F0" />
        <path d="M20 0C11.4 0 4.07 5.428 1.244 13.043h37.512C35.93 5.428 28.6 0 20 0z" fill="#D80027" />
        <path d="M20 40c8.6 0 15.93-5.427 18.756-13.044H1.244C4.07 34.573 11.401 40 20 40z" fill="#338AF3" />
      </g>
      <defs>
        <clipPath id="prefix__clip0_568_194049">
          <path fill="#fff" d="M0 0h40v40H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
