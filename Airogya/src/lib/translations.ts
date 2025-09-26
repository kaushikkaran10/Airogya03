export type Language = 'en' | 'hi';

// Import translation files
import enTranslations from '@/translations/en.json';
import hiTranslations from '@/translations/hi.json';

export const translations = {
  en: enTranslations,
  hi: hiTranslations,
};

// Helper function to get nested translation with fallback
export function getTranslation(
  translations: any,
  key: string,
  fallbackTranslations?: any
): string {
  const keys = key.split('.');
  let value = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // If key not found and fallback is provided, try fallback
      if (fallbackTranslations) {
        let fallbackValue = fallbackTranslations;
        for (const fk of keys) {
          if (fallbackValue && typeof fallbackValue === 'object' && fk in fallbackValue) {
            fallbackValue = fallbackValue[fk];
          } else {
            return key; // Return key if not found in fallback either
          }
        }
        return typeof fallbackValue === 'string' ? fallbackValue : key;
      }
      return key; // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
}
