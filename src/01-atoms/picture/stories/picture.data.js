export const pictureData = {
  dataSrc: 'https://placehold.it/300x169',
  src: 'https://placehold.it/300x169',
  sources: [
    {
      dataSrcset: `
        https://placehold.it/300x169 300w,
        https://placehold.it/400x225 400w,
        https://placehold.it/600x338 600w,
        https://placehold.it/800x450 800w,
        https://placehold.it/1200x675 1200w,
        https://placehold.it/1600x900 1600w,
        https://placehold.it/2000x1125 2000w
      `,
      type: 'image/png',
      media: '(min-width: 1140px)',
      sizes: '50vw'
    },
    {
      dataSrcset: `
        https://placehold.it/300x300 300w,
        https://placehold.it/400x400 400w,
        https://placehold.it/600x600 600w,
        https://placehold.it/800x800 800w,
      `,
      type: 'image/png',
      media: '(min-width: 960px)',
      sizes: '50vw'
    },
    {
      dataSrcset: `
        https://placehold.it/300x169 300w,
        https://placehold.it/400x225 400w,
        https://placehold.it/600x338 600w,
        https://placehold.it/800x450 800w,
        https://placehold.it/1200x675 1200w,
      `,
      type: 'image/png',
      sizes: '100vw'
    },
  ]
};
