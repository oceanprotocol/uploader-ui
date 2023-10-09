import React from 'react';

import ButtonTelegram from '../../assets/telegram.svg';
import ButtonTwitter from '../../assets/twitter.svg';
import ButtonMedium from '../../assets/medium.svg';
import ButtonGithub from '../../assets/github.svg';
import ButtonLinkedin from '../../assets/linkedin.svg';
import ButtonYouTube from '../../assets/youtube.svg';
import ButtonDiscord from '../../assets/discord.svg';
import ButtonDocs from '../../assets/docs.svg';
import ButtonMeetup from '../../assets/meetup.svg';
import ButtonOcean from '../../assets/oceanSocial.svg';
import ButtonPodcast from '../../assets/podcast.svg';
import ButtonWebsite from '../../assets/website.svg';
import ButtonInstagram from '../../assets/instagram.svg';
import Image from 'next/image';

const styles = {
  display: 'inline-block',
};

export function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case 'medium':
    case 'blog':
      return (
        <Image
          src={ButtonMedium}
          alt="medium"
          style={styles}
          width={28}
          height={28}
        />
      );
    case 'twitter':
      return (
        <Image
          src={ButtonTwitter}
          alt="twitter"
          style={styles}
          width={28}
          height={28}
        />
      );
    case 'telegram':
      return (
        <Image
          src={ButtonTelegram}
          alt="telegram"
          style={styles}
          width={28}
          height={28}
        />
      );
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
    case 'linkedin':
      return (
        <Image
          src={ButtonLinkedin}
          alt="linkedin"
          style={styles}
          width={28}
          height={28}
        />
      );
    case 'youtube':
    case 'YouTube':
      return (
        <Image
          src={ButtonYouTube}
          alt="youtube"
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
    case 'meetup':
    case 'Meetup':
      return (
        <Image
          src={ButtonMeetup}
          alt="meetup"
          style={styles}
          width={28}
          height={28}
        />
      );
    case 'instagram':
    case 'Instagram':
      return (
        <Image
          src={ButtonInstagram}
          alt="instagram"
          style={styles}
          width={28}
          height={28}
        />
      );
    case 'podcast':
    case 'Voices of Data Economy':
      return (
        <Image
          src={ButtonPodcast}
          alt="podcast"
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
    <a href={url} title={title} rel="noopener noreferrer" target="_blank">
      <SocialIcon icon={icon} />
    </a>
  );
}
