import renderer from 'react-test-renderer';
import Headline from '../components/Headline';

test('renders headline', () => {
  const tree = renderer.create(<Headline />).toJSON();
  expect(tree).toMatchSnapshot();
});
