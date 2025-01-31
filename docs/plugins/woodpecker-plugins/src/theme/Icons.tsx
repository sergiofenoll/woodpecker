import React from 'react';

export const IconVerified = (size = 32) => (
  <div title="This plugin is verified by the Woodpecker CI maintainers">
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ color: '#0369a1', marginLeft: '1rem' }}>
      <path
        fill="currentColor"
        d="m8.6 22.5l-1.9-3.2l-3.6-.8l.35-3.7L1 12l2.45-2.8l-.35-3.7l3.6-.8l1.9-3.2L12 2.95l3.4-1.45l1.9 3.2l3.6.8l-.35 3.7L23 12l-2.45 2.8l.35 3.7l-3.6.8l-1.9 3.2l-3.4-1.45Zm2.35-6.95L16.6 9.9l-1.4-1.45l-4.25 4.25l-2.15-2.1L7.4 12Z"
      />
    </svg>
  </div>
);

export const IconContainer = (size = 32) => (
  <div title="Container">
    <svg width={size} height={size} viewBox="0 0 16 16">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m10.41.24l4.711 2.774A1.767 1.767 0 0 1 16 4.54v5.01a1.77 1.77 0 0 1-.88 1.53l-7.753 4.521l-.002.001a1.767 1.767 0 0 1-1.774 0H5.59L.873 12.85A1.762 1.762 0 0 1 0 11.327V6.292c0-.304.078-.598.22-.855l.004-.005l.01-.019c.15-.262.369-.486.64-.643L8.641.239a1.75 1.75 0 0 1 1.765 0l.002.001zM9.397 1.534a.25.25 0 0 1 .252 0l4.115 2.422l-7.152 4.148a.267.267 0 0 1-.269 0L2.227 5.716l7.17-4.182zM7.365 9.402L8.73 8.61v4.46l-1.5.875V9.473a1.77 1.77 0 0 0 .136-.071zm2.864 2.794V7.741l1.521-.882v4.45l-1.521.887zm3.021-1.762l1.115-.65h.002a.268.268 0 0 0 .133-.232V5.264l-1.25.725v4.445zm-11.621 1.12l4.1 2.393V9.474a1.77 1.77 0 0 1-.138-.072L1.5 7.029v4.298c0 .095.05.181.129.227z"
      />
    </svg>
  </div>
);

export const IconWebsite = (size = 32) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" strokeWidth="1.5">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 2.05S16 6 16 12m-5 9.95S8 18 8 12c0-6 3-9.95 3-9.95M2.63 15.5H12m-9.37-7h18.74"
      />
      <path
        d="M21.879 17.917c.494.304.463 1.043-.045 1.101l-2.567.291l-1.151 2.312c-.228.459-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271Z"
        clipRule="evenodd"
      />
    </g>
  </svg>
);
