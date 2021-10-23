import I18n from 'react-native-i18n'
import en from './en.json'
import cn from './cn.json'

// Should the app fallback to English if user locale doesn't exists
I18n.fallbacks = true
I18n.defaultLocale = 'en'
I18n.locale = 'en'
I18n.translations = {
  en,
  cn,
}

export async function setLanguage(param = 'en') {
  I18n.locale = param
  I18n.currentLocale()
}

export const getCurrentLocale = () => I18n.locale
// The method we'll use instead of a regular string

export function strings(name, params = {}) {
  return I18n.t(name, params)
}

export default I18n
