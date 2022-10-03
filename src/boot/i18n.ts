import { boot } from 'quasar/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';

export type MessageLanguages = keyof typeof messages;
// Type-define 'ru-RU' as the master schema for the resource
export type MessageSchema = typeof messages['ru-RU'];

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-interface */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {
    short: {
      hour: string
      minute: string
      second: string
      timeZoneName: string
      timezone: string
    }
  }

  // define the number format schema
  export interface DefineNumberFormat {
    currency: {
      style: string
      currencyDisplay: string
      currency: string
    }
  }
}

const datetimeFormats = {
  'ru-RU': {
    short: {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short',
      timezone: 'Europe/Moscow'
    }
  }
}

const numberFormats = {
  'ru-RU': {
    currency: {
      style: 'currency',
      currencyDisplay: 'symbol',
      currency: 'Rub'
    }
  }
}

export default boot(({ app }) => {
  const i18n = createI18n({
    locale: 'ru-RU',
    legacy: false,
    messages,
    datetimeFormats,
    numberFormats
  });

  // Set i18n instance on app
  app.use(i18n);
});
