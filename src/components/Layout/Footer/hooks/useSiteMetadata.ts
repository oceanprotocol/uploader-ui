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
        name: 'Blog',
        url: 'https://blog.oceanprotocol.com',
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com/oceanprotocol',
      },
      {
        name: 'Discord',
        url: 'https://discord.gg/TnXjkR5',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/oceanprotocol',
      },
      {
        name: 'YouTube',
        url: 'https://www.youtube.com/channel/UCH8TXwmWWAE9TZO0yTBHB3A',
      },
      {
        name: 'Telegram',
        url: 'https://t.me/OceanProtocol_Community',
      },
      {
        name: 'Meetup',
        url: 'https://www.meetup.com/Ocean_Protocol_Berlin',
      },
      {
        name: 'Instagram',
        url: 'https://www.instagram.com/oceanprotocol_/',
      },
    ];
  }, []);

  return { company, socials };
}
