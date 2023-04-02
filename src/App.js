import { Route, Routes } from 'react-router-dom'
import MainPage from './components/pages/main/main'
import WorkerPage from './components/pages/worker/worker'
import DirectorPage from './components/pages/director/director'
import { Grid } from 'react-loader-spinner'
import { useState } from 'react'
import { Spiner } from './components/other.styled'

function App() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      {isLoading && (
        <Spiner>
          <Grid
            height='150'
            width='150'
            color='#4fa94d'
            radius='12.5'
          />
        </Spiner>
      )}
      <Routes>
        <Route path='/' element={<MainPage setIsLoading={setIsLoading} />} />
        <Route path='/worker' element={<WorkerPage setIsLoading={setIsLoading} />} />
        <Route path='/director' element={<DirectorPage setIsLoading={setIsLoading} />} />
      </Routes>
    </>
  )
}

export default App
