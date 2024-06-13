import React from 'react';
import { useMantineColorScheme } from '@mantine/core';

export const TranslationFolderIcon = (props) => {
  const { colorScheme } = useMantineColorScheme();
  const isDark = colorScheme === 'dark';

  return (
    <div style={{ position: 'relative' }}>
      <svg
        style={{
          boxShadow: isDark ? '0px 5px 20px 0px rgba(0, 0, 0, 0.20)' : undefined,
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="73"
        height="58"
        viewBox="0 0 73 58"
        fill="none"
        {...props}
      >
        <path
          d="M6.49994 58C4.87994 58 3.47495 57.4098 2.28497 56.2295C1.09499 55.0492 0.5 53.6884 0.5 52.1472V5.85281C0.5 4.31157 1.09499 2.95081 2.28497 1.77052C3.47495 0.590173 4.87994 0 6.49994 0H30.56L36.5 5.4375H66.44C68.02 5.4375 69.475 6.44298 70.685 7.62333C71.895 8.80362 72.44 9.7491 72.44 11.2904L72.5 52.1472C72.5 53.6884 71.895 55.0492 70.685 56.2295C69.475 57.4098 68.08 58 66.5001 58H6.49994Z"
          fill={isDark ? '#3D3D4D' : '#D5D5D9'}
        />
      </svg>
      <svg
        style={{
          position: 'absolute',
          top: '20px',
          left: '23px',
        }}
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.3 20.4L12.5 24H22.1C22.8 24 23.375 23.765 23.825 23.295C24.275 22.825 24.5 22.26 24.5 21.6V6C24.5 5.3 24.275 4.725 23.825 4.275C23.375 3.825 22.8 3.6 22.1 3.6H11.15L10.1 0H2.9C2.24 0 1.675 0.235 1.205 0.705C0.735 1.175 0.5 1.74 0.5 2.4V18C0.5 18.66 0.735 19.225 1.205 19.695C1.675 20.165 2.24 20.4 2.9 20.4H11.3ZM15.38 15.09L14.72 15.72L13.94 13.08C14.16 13.44 14.385 13.78 14.615 14.1C14.845 14.42 15.1 14.75 15.38 15.09ZM17.495 12.3C17.205 12.9 16.78 13.53 16.22 14.19C15.92 13.83 15.66 13.475 15.44 13.125C15.22 12.775 15.03 12.45 14.87 12.15H13.67L13.31 10.89H18.08C17.98 11.23 17.785 11.7 17.495 12.3ZM22.1 22.8H13.7L16.1 20.4L15.14 17.07L16.22 15.96L19.46 19.2L20.33 18.33L17.06 15.12C17.6 14.5 18.07 13.83 18.47 13.11C18.87 12.39 19.17 11.65 19.37 10.89H20.9V9.66H16.52V8.4H15.29V9.66H12.92L11.51 4.8H22.1C22.46 4.8 22.75 4.91 22.97 5.13C23.19 5.35 23.3 5.64 23.3 6V21.6C23.3 21.94 23.19 22.225 22.97 22.455C22.75 22.685 22.46 22.8 22.1 22.8ZM8.34963 10.6904V13.0137C8.02866 13.3644 7.67486 13.6347 7.28823 13.8247C6.90161 14.0146 6.50404 14.1096 6.09553 14.1096C5.65784 14.1096 5.30769 14 5.04507 13.7808C4.78246 13.5616 4.65115 13.2621 4.65115 12.8822C4.65115 12.4731 4.81528 12.1151 5.14355 11.8082C5.47182 11.5014 5.96422 11.2457 6.62076 11.0411C6.86878 10.968 7.13504 10.9023 7.41954 10.8438C7.70404 10.7854 8.01407 10.7342 8.34963 10.6904ZM8.50282 14.4164L8.63413 15.4027H10.1004V9.76986C10.1004 8.54247 9.83048 7.60731 9.29066 6.96438C8.75085 6.32146 7.963 6 6.92714 6C6.25601 6 5.59583 6.11324 4.94659 6.33973C4.29735 6.56621 3.732 6.8621 3.25054 7.2274L3.95085 8.45479C4.53443 8.10411 5.01225 7.85936 5.38428 7.72055C5.75632 7.58174 6.132 7.51233 6.51133 7.51233C7.1241 7.51233 7.57638 7.66941 7.86817 7.98356C8.15997 8.29772 8.32045 8.79817 8.34963 9.48493C7.88276 9.54338 7.44872 9.60913 7.0475 9.68219C6.64629 9.75525 6.2779 9.83562 5.94234 9.92329C4.87729 10.2155 4.10404 10.6027 3.62258 11.0849C3.14112 11.5671 2.90039 12.1881 2.90039 12.9479C2.90039 13.7662 3.14112 14.4128 3.62258 14.8877C4.10404 15.3626 4.76057 15.6 5.59218 15.6C6.14659 15.6 6.66817 15.4941 7.15693 15.2822C7.64568 15.0703 8.09431 14.7817 8.50282 14.4164Z"
          fill={isDark ? '#1E1E26' : '#828299'}
        />
      </svg>
    </div>
  );
};
