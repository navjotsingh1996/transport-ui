import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';


function AutoComplete(props) {
  const { options, heading, onTextChange, onOptionChange, value, id, loading } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <Autocomplete
      id={`${id}-autocomplete`}
      freeSolo
      style={{ width: '100%' }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      onChange={(e, val) => onOptionChange(val, e)}
      getOptionSelected={(option, value) => option.object === value.object}
      getOptionLabel={(option) => option.text ? option.text : option}
      options={options}
      loading={loading}
      inputValue={value}
      value={value}
      renderInput={(params) => (
        <TextField
          {...params}
          style={{ width: '100%' }}
          onChange={(e) => onTextChange(e)}
          label={heading}
          value={value}
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
  heading: PropTypes.string.isRequired,
  onTextChange: PropTypes.func.isRequired,
  onOptionChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};

export default React.memo(AutoComplete, areEqual);