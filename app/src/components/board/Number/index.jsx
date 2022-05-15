import './index.scss';
import PropTypes from 'prop-types';

function Number({status,val}) {
  return (
    <div className={`number ${status}`}><span>{val}</span></div>
  );
}

Number.propTypes = {
  status: PropTypes.string.isRequired,
  val: PropTypes.number.isRequired,
}

export default Number;
