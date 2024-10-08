import { IconOutlineMenuBook } from '@novu/design-system';
import { FC } from 'react';
import { css } from '@novu/novui/css';
import { Text } from './WebhookPage.shared';

export const WebhookAdditionalInformationLink: FC = () => {
  return (
    <a
      className={css({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '50',
      })}
      href="https://v0.x-docs.novu.co/platform/inbound-parse-webhook"
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconOutlineMenuBook />
      <Text>Learn about inbound parse webhook</Text>
    </a>
  );
};
