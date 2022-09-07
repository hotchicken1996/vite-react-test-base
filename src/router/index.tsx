import React, { FC, lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Test = lazy(async () => await import('../views/test'))

const AppRouter: FC = () => (
  <BrowserRouter basename={'/dev'}>
    <Routes>
      <Route path={'/'} element={<Suspense fallback={<></>}><Test /></Suspense>} />
    </Routes>
  </BrowserRouter>
)
export default AppRouter
