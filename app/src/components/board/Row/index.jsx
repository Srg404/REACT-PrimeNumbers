import './index.scss';
import PropTypes from 'prop-types';
import Number from '../Number';

function Row() {
  return (
    <div className="row">
      <Number val={1} status="empty" />
      <Number val={5} status="empty" />
      <Number val={7} status="empty" />
      <Number val={0} status="empty" />
      <Number val={2} status="empty" />
    </div>
  );
}

Row.defaultProps = {

}

Row.propTypes = {

}

export default Row;
