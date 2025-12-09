import { useLanguage } from '@/contexts/LanguageContext'
import { getTranslations, type Translations } from '@/lib/translations'

export function useTranslations(): Translations {
  const { currentLanguage } = useLanguage()
  return getTranslations(currentLanguage)
}
