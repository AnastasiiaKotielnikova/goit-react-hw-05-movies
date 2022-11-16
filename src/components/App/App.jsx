import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import Layout from 'components/Layout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MoviePage = lazy(() => import('pages/MoviePage'));
const CastPage = lazy(() => import('pages/CastPage'));
const ReviewPage = lazy(() => import('pages/ReviewPage'));
const NotFound = lazy(() => import('components/NotFound'));

const App = () => {
  return (
    <div>
      <Suspense fallback={Loader()}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:id" element={<MoviePage />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="review" element={<ReviewPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
