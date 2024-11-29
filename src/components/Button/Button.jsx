import languages from "../../assets/languages";
import style from './Button.module.css'
import { useState } from 'react'

export default function Button() {
  const [selectedLanguage, setSelectedLanguage] = useState(null)

  const buttonSelected = (description) => {
    setSelectedLanguage(description)
  }
  return (
    <div>
      {
        languages.map((language) =>
          <button onClick={() => buttonSelected(language.description)} className={style.button} key={language.id}>
            {language.title}
          </button>
        )
      }
      <div className={style.container}>
        {selectedLanguage ? (
          <p>{selectedLanguage}</p>
        ) : (
          <p>Seleziona un linguaggio per vedere la descrizione.</p>
        )}
      </div>
    </div>

  )
}