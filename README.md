<img alt="React Native Flex Divider" src="assets/logo.png" width="1050"/>

[![React Native Flex Divider](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/WrathChaos/react-native-flex-divider)

[![npm version](https://img.shields.io/npm/v/react-native-flex-divider.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-flex-divider)
[![npm](https://img.shields.io/npm/dt/react-native-flex-divider.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-flex-divider)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<table>
  <tr>
    <td align="center">
      <img alt="React Native Flex Divider" src="assets/Screenshots/react-native-flex-divider.png" />
    </td>
    <td align="center">
      <img alt="React Native Flex Divider" src="assets/Screenshots/react-native-flex-divider-2.png"  />
    </td>
   </tr>
  
</table>

# Installation

Add the dependency:

```bash
npm i react-native-flex-divider
```

## Peer Dependencies

Zero Dependency

# Usage

## Import

```jsx
import FlexDivider from "react-native-flex-divider";
```

## Fundamental Usage

```jsx
<FlexDivider text="Settings" />
```

## Customization Usage

```jsx
<FlexDivider
  text="USER SETTINGS"
  textStyle={{ fontFamily: "SuezOne-Regular" }}
  rightDividerStyle={{ flex: 5 }}
/>
```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property |  Type  |  Default  | Description     |
| -------- | :----: | :-------: | --------------- |
| text     | string | undefined | change the text |

## Customization (Optionals)

| Property          |   Type    | Default | Description                                                             |
| ----------------- | :-------: | :-----: | ----------------------------------------------------------------------- |
| style             | ViewStyle | default | set or override the style object for the main container                 |
| text              | ViewStyle | default | set or override the style object for the `text style`                   |
| leftDividerStyle  | ViewStyle | default | set or override the style object for the `left divider style`           |
| rightDividerStyle | ViewStyle | default | set or override the style object for the `right divider style`          |
| TextComponent     |   Text    | default | set your own component instead of default react-native `Text` component |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Flex Divider is available under the MIT license. See the LICENSE file for more info.
