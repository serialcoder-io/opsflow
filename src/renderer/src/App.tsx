import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './pages/layout'
import Projects from './pages/projects'
import NotFound from './pages/not-found'
import { JSX } from 'react/jsx-runtime'
import Images from './pages/images'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Projects />} />
          <Route path="images" element={<Images />} />
        </Route>
        <Route path="*" element={<NotFound />} /> {/* Route 404 */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
