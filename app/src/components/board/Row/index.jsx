import './index.scss';
import PropTypes from 'prop-types';
import Number from '../Number';

function Row({row}) {
  return (
    <div className="row">
      {row.map(
        (number, index) => (
          <Number key={index} val={number[1]} status={number[0]} />
        )
      )}
    </div>
  );
}

Row.propTypes = {
  row: PropTypes.array.isRequired,
}

export default Row;
