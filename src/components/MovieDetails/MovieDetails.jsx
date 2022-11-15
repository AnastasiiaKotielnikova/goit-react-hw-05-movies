import PropTypes from 'prop-types';
import { Outlet, useLocation } from 'react-router-dom';

import {
  Container,
  ImageWrap,
  Image,
  InfoWrap,
  Title,
  Raiting,
  Description,
  OtherInfo,
  StyledNavLink,
} from './MovieDetails.styled';

const MovieDetails = ({ info }) => {
  const {
    original_title,
    genres,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = info;
  const imageBaseUrl = `https://image.tmdb.org/t/p/w500`;
  const releaseDate = release_date.slice(0, 4);
  const voteAverage = Math.floor(vote_average * 10);
  const movieGanres = genres.map(genre => genre.name);
  const location = useLocation();

  return (
    <Container>
      <ImageWrap>
        <Image src={imageBaseUrl + poster_path} alt={original_title} />
      </ImageWrap>
      <InfoWrap>
        <Title>
          {original_title} ({releaseDate ? releaseDate : 'N/A'})
        </Title>
        <p>{movieGanres.join(' , ')}</p>
        <Raiting>
          <p>User score:</p>
          {''}
          {voteAverage ? voteAverage + '%' : 'No information'}
        </Raiting>
        <Description>{overview}</Description>
        <OtherInfo>
          <li>
            <StyledNavLink to="cast" state={location.state}>
              CAST
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="review" state={location.state}>
              REVIEW
            </StyledNavLink>
          </li>
        </OtherInfo>
      </InfoWrap>
      <Outlet />
    </Container>
  );
};

export default MovieDetails;

MovieDetails.propTypes = {
  info: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    release_date: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired,
  }).isRequired,
};
