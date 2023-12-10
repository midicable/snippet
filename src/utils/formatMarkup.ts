import langs from '../constants'

const formatMarkup = (markup: string): string => {
  const targetLang = langs.find((lang) => lang.value === markup)
  return targetLang ? targetLang.label : 'Plain text'
}

export default formatMarkup
