import React from 'react';
import { SocialIconLink } from '../../../atoms/SocialIcon';
import styles from './Follow.module.css';
import useSiteMetadata from './hooks/useSiteMetadata';
import config from '../../../../../config';
import Image from 'next/image';

export default function Follow() {
  const { socials } = useSiteMetadata();

  return (
    <div className={styles.follow}>
      <div className={styles.social}>
        <h3 className={styles.title}>Follow</h3>
        <div className={styles.followRow}>
          <div className={styles.socialsRow}>
            {socials.map(({ name, url }: { name: string; url: string }) => (
              <SocialIconLink
                key={name}
                url={url}
                title={name}
                icon={name.toLowerCase()}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.githubRepo}>
        <h3 className={styles.title}>Github Repo</h3>
        <div className={styles.followRow}>
          <div className={styles.socialsRow}>
            <a
              href={config.githubRepo}
              className={styles.icon}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github-mark.svg"
                alt="github"
                width={28}
                height={28}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
