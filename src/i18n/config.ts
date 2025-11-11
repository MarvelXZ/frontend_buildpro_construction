export const locales = ['sr', 'en', 'ru', 'hu', 'de', 'sk'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'sr';

export const localeNames: Record<Locale, string> = {
  sr: 'Srpski',
  en: 'English',
  ru: 'Русский',
  hu: 'Magyar',
  de: 'Deutsch',
  sk: 'Slovenčina',
};

export const localeFlags: Record<Locale, string> = {
  sr: '🇷🇸',
  en: '🇬🇧',
  ru: '🇷🇺',
  hu: '🇭🇺',
  de: '🇩🇪',
  sk: '🇸🇰',
};
