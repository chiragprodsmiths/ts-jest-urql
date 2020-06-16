/* eslint-disable react/jsx-props-no-spreading */
import React, { CSSProperties } from 'react';
import Select, { components, CommonProps } from 'react-select';
import { Flex, Text } from 'theme-ui';
import Colors from 'theme/theme.colors'; // TODO: @ankit use theme ui hook useTheme

const ValueContainer: React.FC<CommonProps<any>> = (props) => {
  const defaultLabel =
    props.hasValue || props.selectProps.menuIsOpen ? 'selectPlaceholderHasValue' : 'selectPlaceholder';
  const errorLabel = props.hasValue ? 'selectPlaceholderHasValueError' : 'selectPlaceholderError';
  const placeholderVariant = props.selectProps.error ? errorLabel : defaultLabel;
  return (
    <Flex sx={{ flex: 1 }}>
      <Text variant={placeholderVariant}>{props.selectProps.placeholder}</Text>
      <components.ValueContainer {...props}>{props.children}</components.ValueContainer>
    </Flex>
  );
};

// Select Custom Styles
const CustomStyles = (error: boolean): object => {
  return {
    container: (base: CSSProperties): object => ({
      ...base,
      width: '100%',
    }),
    control: (base: CSSProperties, state: any): object => {
      const defaultBorder = state.menuIsOpen || state.hasValue ? Colors.link : Colors.border;
      return {
        ...base,
        borderWidth: 1,
        borderColor: error ? Colors.error : defaultBorder,
        borderRadius: 4,
        background: 'white',
        boxShadow: 'none',
        minHeight: 48,
        ':hover': {
          borderColor: error ? Colors.error : Colors.link,
        },
      };
    },
    dropdownIndicator: (base: CSSProperties, state: { selectProps: { menuIsOpen: any } }): object => ({
      ...base,
      padding: '7px 8px',
      ...(state.selectProps.menuIsOpen
        ? {
            transition: 'all .2s ease',
            transform: 'rotate(180deg)',
          }
        : {}),
    }),
    indicatorSeparator: (): object => ({}),
    menu: (base: CSSProperties): object => ({
      ...base,
      margin: 0,
      backgroundColor: Colors.white,
      borderRadius: 0,
      width: '100%',
      right: 0,
    }),
    singleValue: (base: CSSProperties): object => ({
      ...base,
      overflow: 'initial',
      color: Colors.text,
      lineHeight: 1.4,
      fontSize: 16,
    }),
    option: (base: CSSProperties, state: { isSelected: any; isFocused: any }): object => {
      const defaultBg = state.isFocused ? Colors.primary : Colors.white;
      const defaultColor = state.isFocused ? Colors.white : Colors.text;
      return {
        ...base,
        padding: '12px 16px',
        fontSize: 16,
        backgroundColor: state.isSelected ? Colors.white : defaultBg,
        color: state.isSelected ? Colors.primary : defaultColor,
      };
    },
    valueContainer: (base: CSSProperties): object => ({
      ...base,
      padding: '12px',
      overflow: 'initial',
    }),
    placeholder: (base: CSSProperties, state: any): object => ({
      ...base,
      color: state.hasValue ? Colors.link : Colors.textLight,
      transform: state.hasValue ? 'translate(0, -31px)' : 'translate(0, -11px)',
      fontSize: state.hasValue ? 14 : 16,
      backgroundColor: Colors.white,
      paddingLeft: 2,
      paddingRight: 2,
    }),
  };
};

type OptionType = {
  label: string;
  value: string;
};

type PropTypes = {
  error: boolean;
  placeholder?: string;
  id: string;
  options: OptionType[];
};

const SelectDropdown: React.FC<PropTypes> = (props: PropTypes) => {
  return (
    <Select
      classNamePrefix="select"
      isSearchable={false}
      components={{ ValueContainer }}
      styles={{ ...CustomStyles(props.error) }}
      {...props}
    />
  );
};
/* eslint-enable react/jsx-props-no-spreading */

SelectDropdown.defaultProps = {
  error: false,
  placeholder: 'Select',
  options: [],
};

export default SelectDropdown;
