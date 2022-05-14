import './index.scss';
import PropTypes from 'prop-types';

function Number({status,val}) {
  return (
    <div className={`number ${status}`}><span>{val}</span></div>
  );
}

Number.defaultProps = {
  status: 'empty',
}

Number.propTypes = {
  status: PropTypes.string,
  val: PropTypes.number,
}

export default Number;
