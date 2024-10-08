import { InboxService } from '../api';
import { InboxServiceSingleton } from '../utils/inbox-service-singleton';

import { NovuEventEmitter } from '../event-emitter';
import { ChannelPreference, PreferenceLevel, Result, Workflow } from '../types';
import { updatePreference } from './helpers';

type PreferenceLike = Pick<Preference, 'level' | 'enabled' | 'channels' | 'workflow'>;

export class Preference {
  #emitter: NovuEventEmitter;
  #apiService: InboxService;

  readonly level: PreferenceLevel;
  readonly enabled: boolean;
  readonly channels: ChannelPreference;
  readonly workflow?: Workflow;

  constructor(preference: PreferenceLike) {
    this.#emitter = NovuEventEmitter.getInstance();
    this.#apiService = InboxServiceSingleton.getInstance();

    this.level = preference.level;
    this.enabled = preference.enabled;
    this.channels = preference.channels;
    this.workflow = preference.workflow;
  }

  update({ channelPreferences }: { channelPreferences: ChannelPreference }): Result<Preference> {
    return updatePreference({
      emitter: this.#emitter,
      apiService: this.#apiService,
      args: {
        workflowId: this.workflow?.id,
        channelPreferences,
        preference: {
          level: this.level,
          enabled: this.enabled,
          channels: this.channels,
          workflow: this.workflow,
        },
      },
    });
  }
}
