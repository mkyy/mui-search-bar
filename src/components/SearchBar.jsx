import React from 'react';
import { useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';

const Search = styled('div')(() => ({
  borderRadius: '5px',
  backgroundColor: '#fefefe',
  position: 'relative',
  width: '300px',
  height: '40px',

  '&:hover': {
    backgroundColor: alpha('#fefefe', 0.85),
  },
}));

const SearchIconWrapper = styled('div')(() => ({
  height: '100%',
  position: 'absolute',
  padding: '0 10px',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const CloseIconWrapper = styled('div')(() => ({
  position: 'absolute',
  height: '100%',
  right: 0,
  top: 0,
  padding: '0 10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:hover': {
    cursor: 'pointer',
  },
}));

const StyledInputBase = styled(InputBase)(() => ({
  color: 'inherit',
  width: '100%',
  paddingLeft: '40px',
  paddingRight: '40px',
  paddingTop: '3px',
  height: '100%',
}));

const SearchBar = ({
  value,
  width,
  onChange,
  placeholder,
  height,
  onCancelResearch,
  onSearch,
  className,
  style,
  disabled,
}) => {
  const [internalValue, setInternalValue] = useState(value || '');

  const handleChange = e => {
    setInternalValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  const handleCancel = () => {
    setInternalValue('');
    if (onCancelResearch) {
      onCancelResearch(internalValue);
    }
  };

  const handleKeyUp = e => {
    if (e.keyCode === 13 || (e.code === 'Enter' && onSearch)) {
      onSearch();
    } else if (e.keyCode === 27 || e.code === 'Escape') {
      handleCancel();
    }
  };

  return (
    <>
      <Search
        key={'SearchBarComponent-root'}
        style={{ ...style, width: width || '300px', height: height || '40px' }}
        className={`SearchBarComponent-root ${className}`}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          onChange={handleChange}
          value={internalValue}
          placeholder={placeholder || 'Search'}
          onKeyUp={handleKeyUp}
          disabled={disabled}
          key={'inputBaseComponent-root'}
        />
        <CloseIconWrapper onClick={handleCancel}>
          {internalValue ? <CloseIcon /> : null}
        </CloseIconWrapper>
      </Search>
    </>
  );
};

SearchBar.propTypes = {
  // custom top-level class
  className: PropTypes.string,
  // changes the default width of component
  width: PropTypes.node,
  // changes the default height of component
  height: PropTypes.node,
  // override the placeholder
  placeholder: PropTypes.string,
  // value of input text field
  value: PropTypes.string,
  // fired when input value changes
  onChange: PropTypes.func,
  // fired when the search is canceled
  onCancelResearch: PropTypes.func,
  // fired when press enter
  onSearch: PropTypes.func,
  // override styles of the root element
  style: PropTypes.object,
  // disable text field
  disabled: PropTypes.bool,
};

export default SearchBar;
