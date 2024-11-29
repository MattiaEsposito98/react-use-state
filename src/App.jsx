import { useState } from 'react'
import languages from './assets/languages'
import Header from './components/Header/Header'


function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(0)



  return (
    <>
      <Header />

    </>
  )
}

export default App
