
import React from 'react';

type IconProps = React.SVGProps<SVGSVGElement>;

export const LoadingSpinner: React.FC<IconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
    className={`animate-spin ${props.className || ''}`}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);


export const BrainIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 9.5 7v0A2.5 2.5 0 0 1 7 4.5v0A2.5 2.5 0 0 1 9.5 2z"/>
        <path d="M14.5 2A2.5 2.5 0 0 1 17 4.5v0A2.5 2.5 0 0 1 14.5 7v0A2.5 2.5 0 0 1 12 4.5v0A2.5 2.5 0 0 1 14.5 2z"/>
        <path d="M12 14.5a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5v0a2.5 2.5 0 0 1 2.5-2.5z"/>
        <path d="M4.5 10A2.5 2.5 0 0 1 7 12.5v0a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5v0A2.5 2.5 0 0 1 4.5 10z"/>
        <path d="M19.5 10a2.5 2.5 0 0 1 2.5 2.5v0a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5v0a2.5 2.5 0 0 1 2.5-2.5z"/>
        <path d="M12 7v5"/>
        <path d="M12 14.5v-2"/>
        <path d="M9.5 7l-2.5 3"/>
        <path d="M7 12.5l-2.5 3"/>
        <path d="m14.5 7 2.5 3"/>
        <path d="m17 12.5 2.5 3"/>
    </svg>
);


export const SparklesIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M9.42 5.42 8 2 6.58 5.42 3 7l3.58 1.58L8 12l1.42-3.42L13 7l-3.58-1.58Z"/><path d="m21 13-3.42 1.42L16 18l-1.58-3.58L11 13l3.42-1.42L16 8l1.58 3.58L21 13Z"/><path d="M14 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/><path d="M3 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
    </svg>
);
