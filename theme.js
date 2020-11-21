/* eslint-disable max-len */
export const color = {
  yellow: '#F5C518',
  inputBackground: '#F3F3F3',
  inputTexts: '#636363',
  contentTexts: 'rgba(0,0,0,0.5)',
  disabledButton: 'rgba(245, 197, 24, 0.2)',
  bannerPlaceholder: 'rgba(245, 197, 24, 0.9)',
  breadcrumbBackground:
    'linear-gradient(90deg, rgba(245, 197, 24, 0.26) 22.24%, rgba(251, 247, 252, 0) 100%)',
  swiperLeftShadow:
    'linear-gradient( to right, rgba(255, 255, 255, 0.9) 20%, rgba(255, 255, 255, 0.7) 50%, transparent 100%);',
  swiperRightShadow:
    'linear-gradient( to right, transparent 5%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.9) 100%)',
};

const size = {
  desktop: 1280,
  laptop: 1024,
  tablet: 768,
  phone: 601,
  mini: 414,
};

export const device = Object.keys(size).reduce((acc, cur) => {
  acc[cur] = `(max-width: ${size[cur] - 1}px)`;
  return acc;
}, {});

export const clampText = (lineCount = 2) => {
  return `display: -webkit-box;
  -webkit-line-clamp:${lineCount};
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;`;
};
