import HeroSection from '../HeroSection';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { resetAllForm} from '../../actions';

function Home (props) {
  useEffect(() => {
    props.resetAllForm();
  }, []);
  return (
    <>
      <HeroSection />
      {/* <Cards /> */}
    </>
  )
}

export default connect(null, { resetAllForm })(Home);