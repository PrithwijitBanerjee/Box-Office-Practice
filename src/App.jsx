import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import NotFound from './pages/NotFound';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { GlobalTheme } from './pages/theme';

// Create a client
const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalTheme>
          <HashRouter>
            <Routes>
              <Route path='/' element={<MainLayout />}>
                <Route exact path='/' element={<Home />} />
                <Route path='starred' element={<Starred />} />
                <Route path='show/:showId' element={<Show />} />
              </Route>
              <Route path='*' element={<NotFound />} />
            </Routes>
          </HashRouter>
        </GlobalTheme>
      </QueryClientProvider>
    </>
  );
}

export default App;
