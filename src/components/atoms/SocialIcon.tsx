import React from 'react';
import Image from 'next/image';

import style from './SocialIcon.module.css';

import ButtonGithub from '../../assets/github.svg';
import ButtonDiscord from '../../assets/discord.svg';
import ButtonDocs from '../../assets/docs.svg';
import ButtonOcean from '../../assets/oceanSocial.svg';
import ButtonWebsite from '../../assets/website.svg';

const styles = {
  display: 'inline-block',
};

export function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'github':
    case 'GitHub':
      return (
        <Image
          src={ButtonGithub}
          alt="github"
          style={styles}
          width={28}
          height={28}
        />
      );
    case 'discord':
    case 'Discord':
      return (
        <Image
          src={ButtonDiscord}
          alt="discord"
          style={styles}
          width={28}
          height={28}
        />
      );
    case 'docs':
    case 'Docs':
    case 'Documentation':
      return (
        <Image
          src={ButtonDocs}
          alt="docs"
          style={styles}
          width={28}
          height={28}
        />
      );
    case 'website':
    case 'Website':
      return (
        <Image
          src={ButtonWebsite}
          alt="website"
          style={styles}
          width={28}
          height={28}
        />
      );
    default:
      return (
        <Image
          src={ButtonWebsite}
          alt="website"
          style={styles}
          width={28}
          height={28}
        />
      );
  }
}

export interface SocialIconProps {
  url: string;
  icon: string;
  title: string;
}

export function SocialIconLink({ url, icon, title }: SocialIconProps) {
  return (
    <a
      href={url}
      title={title}
      className={style.icon}
      rel="noopener noreferrer"
      target="_blank"
    >
      <SocialIcon icon={icon} />
    </a>
  );
}
