# mui-search-bar

## Installation

```shell
npm i --save @mkyy/mui-search-bar
```

or

```shell
yarn add @mkyy/mui-search-bar
```

Note: This component is intended to projects using Material-UI v5+, if you're still using an older version, I recommend [material-ui-search-bar.](https://github.com/TeamWertarbyte/material-ui-search-bar)

## Usage

The `SearchBar` is a _controlled input_, meaning that you need to keep the input state. This allows for much flexibility, e.g. you can change and clear the search input just by changing its props.

```js
import SearchBar from 'material-ui-search-bar';

return (
  <SearchBar
    value={textFieldValue}
    onChange={newValue => setTextFieldValue(newValue)}
    onSearch={() => handleSearch(textFieldValue)}
  />
);
```

### SearchBar Properties

| Name             | Type               | Default    | Description                                        |
| ---------------- | ------------------ | ---------- | -------------------------------------------------- |
| className        | `string`           | `''`       | Custom top-level class.                            |
| width            | `string or number` | `'300px'`  | Sets the width of SearchBar.                       |
| height           | `string or number` | `'40px'`   | Sets the height of SearchBar.                      |
| disabled         | `bool`             | `false`    | Disables text field.                               |
| onCancelResearch | `func`             |            | Fired when the search is cancelled.                |
| onChange         | `func`             |            | Fired when the text value changes.                 |
| onSearch         | `func`             |            | Fired when enter button is pressed.                |
| placeholder      | `string`           | `'Search'` | Sets placeholder text for the embedded text field. |
| style            | `object`           | `null`     | Override the inline-styles of the root element.    |
| value            | `string`           | `''`       | The value of the text field.                       |

\* no required properties

## License

The files included in this repository are licensed under the MIT license.

## Contributions

Feel free to open an issue or add a pull request. Anytime. Really, I mean it.
