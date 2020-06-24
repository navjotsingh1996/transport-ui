import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import GenericDateDisplay from './GenericDateDisplay';
import GenericAddressDisplay from './GenericAddressDisplay';
import {stopTypes} from "../constants";

const useStyles = makeStyles({
  addButton: {
    textAlign: 'center',
  },
  deleteButton: {
    float: 'right',
    marginTop: '-10px'
  }
});

export default function StopTypeDisplay(props) {
  const { stops, stopsSetter, id, readOnly, onChange, type, onDelete, onAdd } = props;
  const classes = useStyles();
  return (
    <div id={id}>
      {stops.map((stop, i) => {
        return (
          <div id={`${id}-${i}`} key={`${id}-${i}`}>
            <h3>
              {`${type === stopTypes.pickup ? 'Pickup #' : 'Delivery #'}${i + 1}`}
              {readOnly ? '' : (
                <IconButton
                  aria-label="add"
                  className={classes.deleteButton}
                  disabled={stops.length <= 1}
                  onClick={() => onDelete(stop, i)}
                >
                  <DeleteIcon />
                </IconButton>)}
              </h3>
            <GenericDateDisplay
              id={`${id}-date-${type}-${i}`}
              heading={`${type === stopTypes.pickup ? 'Pickup Date' : 'Delivery Date'} ${i + 1}`}
              readOnly={readOnly}
              value={stop.date}
              onChange={(e, setter, oldObj, key) => onChange(e, setter, stops, key, i, true)}
              setter={stopsSetter}
              oldObj={stop}
              objKey='date'
            />
            <GenericAddressDisplay
              id={`${id}-address-${type}-${i}`}
              heading={''}
              readOnly={readOnly}
              object={stop}
              onChange={(e, setter, oldObj, key) => onChange(e, setter, stops, key, i)}
              objSetter={stopsSetter}
            /><br />
          </div>
        )
      })}
      {readOnly ? '' : (
        <div className={classes.addButton}>
          <Divider /><br />
          <IconButton aria-label="add" onClick={() => onAdd(type)}>
            <AddIcon />
          </IconButton>
        </div>
      )}
    </div>
  )
}


StopTypeDisplay.propTypes = {
  stops: PropTypes.array.isRequired,
  stopsSetter: PropTypes.func.isRequired,
  readOnly: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.any.isRequired,
  onDelete: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
};
