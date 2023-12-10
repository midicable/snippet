import CodeMirror from '@uiw/react-codemirror'
import { loadLanguage, LanguageName } from '@uiw/codemirror-extensions-langs'
import { formatDistance } from 'date-fns'
import './snippet.scss'
import langs from '../../constants'
import formatMarkup from '../../utils/formatMarkup'

interface PasteProps {
  author: string
  language: LanguageName
  data: string
  createdAt: number
}

const Snippet = ({ author, language, data, createdAt }: PasteProps) => {
  return (
    <div className="snippet">
      <div className="snippet__header">
        <div className="snippet__meta">
          <span className="snippet__author">@{author} •</span>
          <span className="snippet__created-at">
            {`${formatDistance(new Date(createdAt), new Date(), {
              includeSeconds: true,
              addSuffix: true,
            })} •`}
          </span>
          <span className="snippet__markup">{formatMarkup(language)}</span>
        </div>
      </div>
      <CodeMirror
        value={data}
        extensions={[loadLanguage(language as LanguageName)!].filter(Boolean)}
        basicSetup={{
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
        }}
        editable={false}
        className="snippet__content"
      />
    </div>
  )
}

export default Snippet
