import PropTypes from 'prop-types';
import { CastList, CastItem, Image, Info, Role } from './Cast.styled';

const Cast = ({ items }) => {
  const baseUrl = 'https://image.tmdb.org/t/p/w500';
  return (
    <CastList>
      {items.map(({ id, character, name, profile_path }) => {
        return (
          <CastItem key={id}>
            <div>
              <Image
                src={
                  profile_path
                    ? baseUrl + profile_path
                    : './images/no-photo_info'
                }
                alt="actor"
                width="200"
                height="200"
              />
            </div>
            <Info>
              <p>Name: {name}</p>
              <Role>Character: {character}</Role>
            </Info>
          </CastItem>
        );
      })}
    </CastList>
  );
};

export default Cast;

Cast.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    }).isRequired
  ),
};
