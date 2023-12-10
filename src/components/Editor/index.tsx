import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import CodeMirror from '@uiw/react-codemirror'
import { loadLanguage, LanguageName } from '@uiw/codemirror-extensions-langs'
import { basicLight } from '@uiw/codemirror-theme-basic'
import ReactSelect, { SingleValue } from 'react-select'
import langs from '../../constants'
import { useAddPostMutation } from '../../api/posts/posts.api'
// import './editor.scss'

const Editor = () => {
  const [lang, setLang] = useState<LanguageName>()
  const [code, setCode] = useState<string>('')
  const [addPost] = useAddPostMutation()

  const handleLangChange = (
    newValue: SingleValue<{ value: string; label: string }>
  ): void => {
    setLang(newValue?.value as LanguageName)
  }

  const handleEditorChange = (value: string) => {
    setCode(value)
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    addPost({
      author: 'midicable',
      language: lang,
      data: code,
      createdAt: new Date().getTime(),
    })
  }

  return (
    <form onSubmit={handleFormSubmit} className="paste-form relative">
      <ReactSelect
        options={langs}
        styles={{
          control: (base) => ({
            ...base,
            height: '45px',
            border: 0,
            borderBottom: '1px solid #F3F4F6',
            borderRadius: 0,
            boxShadow: 'none',
          }),
        }}
        name="lang"
        onChange={handleLangChange}
      />
      <CodeMirror
        value={code}
        height="200px"
        basicSetup={{
          lineNumbers: true,
          highlightActiveLineGutter: true,
          tabSize: 2,
        }}
        theme={basicLight}
        extensions={[loadLanguage(lang as LanguageName)!].filter(Boolean)}
        className="border-b-[1px] border-gray-100"
        onChange={handleEditorChange}
      />
      <button
        type="submit"
        className="bg-[#1A8CD8] w-[64px] h-[36px] text-white rounded-3xl text-base font-bold shadow-md absolute bottom-4 right-4"
      >
        Post
      </button>
    </form>
  )
}

export default Editor
