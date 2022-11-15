import PropTypes from 'prop-types';
import {
  Container,
  ReviewList,
  ReviewItem,
  ReviewText,
  Author,
  Text,
} from './Review.styled';

const Review = ({ items }) => {
  return (
    <Container>
      <p>MOVIE REVIEWS</p>
      <ReviewList>
        {items.map(({ id, author, content }) => {
          return (
            <ReviewItem key={id}>
              <ReviewText>
                <Author>Author: {author}</Author>
                <Text>{content}</Text>
              </ReviewText>
            </ReviewItem>
          );
        })}
      </ReviewList>
    </Container>
  );
};

export default Review;

Review.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string,
    }).isRequired
  ),
};
