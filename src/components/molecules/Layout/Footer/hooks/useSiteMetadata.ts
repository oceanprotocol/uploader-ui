import { useMemo } from 'react';

export default function useSiteMetadata() {
  const company = useMemo(() => {
    return {
      name: 'Ocean Protocol Foundation Ltd.',
      address: {
        location: 'The Commerze @ Irving',
        street: '1 Irving Place, #08-11',
        city: 'Singapore',
        zip: '369546',
        country: 'Singapore',
      },
    };
  }, []);

  const socials = useMemo(() => {
    return [
      {
        name: 'Website',
        url: 'https://oceanprotocol.com/',
      },
      {
        name: 'Docs',
        url: 'https://github.com/oceanprotocol/uploader.js#ocean-uploaderjs:~:text=README.md-,Ocean%20Uploader.js,-This%20is%20a',
      },
      {
        name: 'Discord',
        url: 'https://discord.gg/TnXjkR5',
      },
    ];
  }, []);

  return { company, socials };
}
