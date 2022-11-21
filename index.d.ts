// Type definitions for Mui Search Bar
// Project: https://github.com/mkyy/mui-search-bar

/// <reference types="react" />

declare module '@mkyy/mui-search-bar' {
  export interface SearchBarProps {
    // custom top-level class
    className?: string;
    // changes the default width of component
    width?: number | string;
    // changes the default height of component
    height?: number | string;
    // override the placeholder
    placeholder?: string;
    // value of input text field
    value?: string | null;
    // fired when input value changes
    onChange?(query: string): void;
    // fired when the search is canceled
    onCancelResearch?(): void;
    // fired when press enter
    onSearch?(labelOptionValue?: string | null): void;
    // override styles of the root element
    style?: object;
    // disable text field
    disabled?: boolean;
    //options of autocomplete sugestions
    options?: string[];
  }

  const SearchBar: React.ComponentType<SearchBarProps>;
  export default SearchBar;
}
