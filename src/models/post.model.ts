import { LanguageName } from '@uiw/codemirror-extensions-langs'

/* eslint-disable import/prefer-default-export */
type Post = {
  id: number
  author: string
  language?: LanguageName
  data: string
  createdAt: number
}

export type { Post }
