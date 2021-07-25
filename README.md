# universal-numbers-formatter

Universal numbers formatter converts supplied number into different local format based on provided parameters. See below list of parameters.

## Installation

### NPM

```bash
npm install --save universal-numbers-formatter
```

## Usage

```jsx
import { universalNumbersFormatter } from 'universal-numbers-formatter';

const modifiedNumberObject1 = universalNumbersFormatter(
  13546595.12344,
  'en',
  'IN'
);
console.log('Test=1', modifiedNumberObject1);

// Result:
// {
//     longNotation: "1,35,46,595.12",
//     shortNotation: "1.35Cr"
// }

const modifiedNumberObject2 = universalNumbersFormatter(
  13546595.12344,
  'en',
  'US',
  true,
  'USD'
);
console.log('Test=2', modifiedNumberObject2);

// Result:
// {
//     longNotation: "$13,546,595.12",
//     shortNotation: "$13.55M"
// }
```

## Using RequireJS:

```js
define(['universal-numbers-formatter'], function (
  universalNumbersFormatter
) {});
// or
define(function (require) {
  var universalNumbersFormatter = require('universal-numbers-formatter');
});
```

## In a node application:

```js
const universalNumbersFormatter = require('universal-numbers-formatter');
universalNumbersFormatter.universalNumbersFormatter();
// or
const { universalNumbersFormatter } = require('universal-numbers-formatter');
universalNumbersFormatter();
```

## Options

```js
universalNumbersFormatter =
  (number, langaugeCode, countryCode, isCurrency, currencyCode);
```

## Usage explanation

### `number` : Number

`(Mandatory)` First argument must be `number` which is supposed to be converted.

### `langaugeCode` : String

`(Mandatory)` Second argument must be `string` which denotes language code. Example `en` for English and `de` for German and so on. Deatils - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/numberingSystem

### `countryCode`: String

`(Mandatory)` Third argument must be `string` which denotes country code. Example `US` for USA and `IN` for India and so on. Details

### `isCurrency`: Boolean

`(Optional)` Fourth argument is optional. By default its value is `false`. If you need currency denotation then supply it as `true` and followed by `currencyCode`.

### `currencyCode`: String

`(Optional)` Fifth argument is optional. If you need currency denotation, then first enable `isCurrency` as `true` and then supply `currencyCode`. For example - `USD` for Dollars and `INR` for Rupees and so on. The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB.

## Support

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/satyendra10)

## License

MIT © [Satyendra Pandit](https://github.com/satyendra2013)
