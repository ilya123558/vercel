import Image from 'next/image';
import React from 'react';

interface IProps {
  photo: string
  variantBackground?: 'yellow' | 'violet'
}

export const ModalImage = ({photo, variantBackground}: IProps) => {
  return (
    <div className='relative w-full flex items-center justify-center'>
      {variantBackground && variantBackground === 'violet'
        ? (
          <svg className='min-w-260px min-h-260px' width="274" height="274" viewBox="0 0 274 274" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_320_3517)">
            <circle cx="137" cy="137" r="55.7812" fill="#A201FF" fillOpacity="0.45"/>
            </g>
            <path d="M98.9583 39.1339L138.872 129.893L218.321 70.5783L144.338 136.585L225.301 193.816L139.663 143.851L112 224L131.307 141.65L32.1679 142.938L130.819 133.023L98.9583 39.1339Z" fill="#AA4FFA" fillOpacity="0.45"/>
            <g filter="url(#filter1_f_320_3517)">
            <path d="M172.221 78.7208L142.922 134.997L204.348 150.88L141.772 140.406L145.648 203.734L136.273 140.984L77.2425 164.24L134.024 135.932L93.6651 86.9773L138.133 132.233L172.221 78.7208Z" fill="#FEFEFE"/>
            </g>
            <g opacity="0.3" filter="url(#filter2_f_320_3517)">
            <path d="M211.593 109.848L143.921 136.299L185.394 197.892L138.866 140.136L94.7368 198.518L133.653 136.37L64.9073 110.86L135.487 130.207L137.129 56.0585L141.833 130.163L211.593 109.848Z" fill="#FEFEFE"/>
            </g>
            <defs>
            <filter id="filter0_f_320_3517" x="0.21875" y="0.21875" width="273.562" height="273.562" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="40.5" result="effect1_foregroundBlur_320_3517"/>
            </filter>
            <filter id="filter1_f_320_3517" x="75.2426" y="76.7207" width="131.106" height="129.013" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_320_3517"/>
            </filter>
            <filter id="filter2_f_320_3517" x="62.9073" y="54.0586" width="150.686" height="146.459" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_320_3517"/>
            </filter>
            </defs>
          </svg>
        )
        : (
          <svg className='min-w-260px min-h-260px' width="274" height="274" viewBox="0 0 274 274" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_309_5672)">
              <circle cx="137" cy="137" r="55.7812" fill="#FFDC01" fillOpacity="0.45" />
            </g>
            <path d="M164.176 35.5779L142.712 132.375L241.856 131.505L143.164 141.003L174.629 235.026L135.098 144.1L55.3997 203.079L129.66 137.385L48.9396 79.813L134.366 130.138L164.176 35.5779Z" fill="#FFDC01" fillOpacity="0.45" />
            <g filter="url(#filter1_f_309_5672)">
              <path d="M172.221 78.7208L142.922 134.997L204.348 150.88L141.772 140.406L145.648 203.734L136.273 140.984L77.2425 164.24L134.024 135.932L93.6651 86.9773L138.133 132.233L172.221 78.7208Z" fill="#FEFEFE" />
            </g>
            <g opacity="0.3" filter="url(#filter2_f_309_5672)">
              <path d="M211.593 109.848L143.921 136.299L185.394 197.892L138.866 140.136L94.7368 198.518L133.653 136.37L64.9073 110.86L135.487 130.207L137.129 56.0585L141.833 130.163L211.593 109.848Z" fill="#FEFEFE" />
            </g>
            <defs>
              <filter id="filter0_f_309_5672" x="0.21875" y="0.21875" width="273.562" height="273.562" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="40.5" result="effect1_foregroundBlur_309_5672" />
              </filter>
              <filter id="filter1_f_309_5672" x="75.2426" y="76.7207" width="131.106" height="129.013" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_309_5672" />
              </filter>
              <filter id="filter2_f_309_5672" x="62.9073" y="54.0586" width="150.686" height="146.459" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_309_5672" />
              </filter>
            </defs>
          </svg>
        )
      }
      <Image src={photo} alt='modal-img' width={200} height={200} quality={100} className='absolute h-130px w-130px' priority />
    </div>
  );
};