import React from 'react';

const Logo: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
      >
        <path
          strokeWidth={1}
          d="M19.9106 15C18.8234 14.0855 17.4412 13.6 16.023 13.6346H6.90656C6.4909 13.6451 6.0774 13.5714 5.69081 13.4178C5.30422 13.2642 4.95249 13.0339 4.65667 12.7407C4.36085 12.4475 4.12703 12.0974 3.96921 11.7114C3.81139 11.3254 3.7328 10.9114 3.73817 10.4941C3.72803 10.3318 3.72803 10.1689 3.73817 10.0065C3.86073 9.261 4.25029 8.58604 4.83368 8.10836C5.41707 7.63068 6.15416 7.38314 6.90656 7.41222H15.8869C16.6195 7.41158 17.3284 7.67205 17.8874 8.14721C18.4463 8.62236 18.8189 9.2813 18.9387 10.0065H21.8544C21.7323 8.50247 21.0507 7.09962 19.945 6.07684C18.8394 5.05406 17.3907 4.48627 15.8869 4.48635H12.8157V0H10.386V4.48635H6.90656C5.4028 4.48627 3.95408 5.05406 2.84843 6.07684C1.74277 7.09962 1.06115 8.50247 0.939096 10.0065C0.9294 10.1689 0.9294 10.3317 0.939096 10.4941C0.939096 11.2805 1.09345 12.0592 1.39334 12.7858C1.69324 13.5123 2.1328 14.1725 2.68693 14.7285C3.80604 15.8515 5.32389 16.4824 6.90656 16.4824H16.1202C16.5325 16.472 16.9428 16.5446 17.3268 16.6958C17.7108 16.8469 18.0607 17.0737 18.356 17.3628C18.6513 17.6518 18.8859 17.9972 19.0461 18.3787C19.2062 18.7602 19.2887 19.1699 19.2886 19.5839C19.3087 19.8045 19.3087 20.0265 19.2886 20.2471C19.1342 20.9334 18.7519 21.5467 18.2044 21.9862C17.6569 22.4257 16.9768 22.6654 16.2757 22.6658H7.13981C6.43868 22.6654 5.75854 22.4257 5.21105 21.9862C4.66356 21.5467 4.28126 20.9334 4.12693 20.2471H1.19179C1.35884 21.7127 2.05737 23.0653 3.15428 24.0474C4.25119 25.0294 5.66981 25.5721 7.13981 25.5722H10.386V30H12.8157V25.5722H16.1202C17.5902 25.5721 19.0088 25.0294 20.1057 24.0474C21.2026 23.0653 21.9011 21.7127 22.0682 20.2471V19.5839C22.0658 18.7077 21.8713 17.8429 21.4984 17.0507C21.1255 16.2584 20.5834 15.5583 19.9106 15Z"
          fill="#00B907"
          transform="scale(1) translate(5, 1)"
        />
      </svg>
    </div>
  );
};

export default Logo; 