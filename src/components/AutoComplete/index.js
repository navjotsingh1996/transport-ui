import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';


function AutoComplete(props) {
  const { options, title, onTextChange, onOptionChange, value, id } = props;
  const [open, setOpen] = React.useState(false);
  const loading = open && options.length === 0 && value !== '';

  return (
    <Autocomplete
      id={`${id}-autocomplete`}
      freeSolo
      style={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(e, val) => onOptionChange(val)}
      getOptionSelected={(option, value) => option.object === value.object}
      getOptionLabel={(option) => option.text}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(e) => onTextChange(e)}
          label={title}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

function areEqual(prev, next) {
  return prev.options === next.options && prev.value === next.value
}

AutoComplete.propTypes = {
  options: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onOptionChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default React.memo(AutoComplete, areEqual);