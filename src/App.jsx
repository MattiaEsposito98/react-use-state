import { useState } from 'react'
import languages from './assets/languages'
import Header from './components/Header/Header'
import Button from './components/Button/Button'


function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(0)



  return (
    <>
      <Header />
      <Button />
    </>
  )
}

export default App
