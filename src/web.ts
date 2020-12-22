import { WebPlugin } from '@capacitor/core';
import { 360VideoPlugin } from './definitions';

export class 360VideoWeb extends WebPlugin implements 360VideoPlugin {
  constructor() {
    super({
      name: '360Video',
      platforms: ['web'],
    });
  }

  async openMap(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options),
    return options;
  }
}

const 360Video = new 360VideoWeb();

export { 360Video };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(360Video);
