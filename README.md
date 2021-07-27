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

`(Mandatory)` Second argument must be `string` which denotes language code. Example `en` for English and `de` for German and so on. [Show Details](https://github.com/satyendra2013/universal-numbers-formatter#supported-language-codes).

### `countryCode`: String

`(Mandatory)` Third argument must be `string` which denotes country code. Example `US` for USA and `IN` for India and so on. Details. [Show Details](https://github.com/satyendra2013/universal-numbers-formatter#supported-country-codes).

### `isCurrency`: Boolean

`(Optional)` Fourth argument is optional. By default its value is `false`. If you need currency denotation then supply it as `true` and followed by `currencyCode`.

### `currencyCode`: String

`(Optional)` Fifth argument is optional. If you need currency denotation, then first enable `isCurrency` as `true` and then supply `currencyCode`. For example - `USD` for Dollars and `INR` for Rupees and so on. The currency to use in currency formatting. Possible values are the ISO 4217 currency codes, such as "USD" for the US dollar, "EUR" for the euro, or "CNY" for the Chinese RMB. [Show Details](https://github.com/satyendra2013/universal-numbers-formatter#supported-currency-codes)

## Support

If my work made your life easier. You can support via

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/satyendra10)

## Supported Language Codes

| Language                           | languageCode(ISO Code) |
| ---------------------------------- | ---------------------- |
| Abkhazian                          | ab                     |
| Afar                               | aa                     |
| Afrikaans                          | af                     |
| Akan                               | ak                     |
| Albanian                           | sq                     |
| Amharic                            | am                     |
| Arabic                             | ar                     |
| Aragonese                          | an                     |
| Armenian                           | hy                     |
| Assamese                           | as                     |
| Avaric                             | av                     |
| Avestan                            | ae                     |
| Aymara                             | ay                     |
| Azerbaijani                        | az                     |
| Bambara                            | bm                     |
| Bashkir                            | ba                     |
| Basque                             | eu                     |
| Belarusian                         | be                     |
| Bengali (Bangla)                   | bn                     |
| Bihari                             | bh                     |
| Bislama                            | bi                     |
| Bosnian                            | bs                     |
| Breton                             | br                     |
| Bulgarian                          | bg                     |
| Burmese                            | my                     |
| Catalan                            | ca                     |
| Chamorro                           | ch                     |
| Chechen                            | ce                     |
| Chichewa, Chewa, Nyanja            | ny                     |
| Chinese                            | zh                     |
| Chinese (Simplified)               | zh-Hans                |
| Chinese (Traditional)              | zh-Hant                |
| Chuvash                            | cv                     |
| Cornish                            | kw                     |
| Corsican                           | co                     |
| Cree                               | cr                     |
| Croatian                           | hr                     |
| Czech                              | cs                     |
| Danish                             | da                     |
| Divehi, Dhivehi, Maldivian         | dv                     |
| Dutch                              | nl                     |
| Dzongkha                           | dz                     |
| English                            | en                     |
| Esperanto                          | eo                     |
| Estonian                           | et                     |
| Ewe                                | ee                     |
| Faroese                            | fo                     |
| Fijian                             | fj                     |
| Finnish                            | fi                     |
| French                             | fr                     |
| Fula, Fulah, Pulaar, Pular         | ff                     |
| Galician                           | gl                     |
| Gaelic (Scottish)                  | gd                     |
| Gaelic (Manx)                      | gv                     |
| Georgian                           | ka                     |
| German                             | de                     |
| Greek                              | el                     |
| Greenlandic                        | kl                     |
| Guarani                            | gn                     |
| Gujarati                           | gu                     |
| Haitian Creole                     | ht                     |
| Hausa                              | ha                     |
| Hebrew                             | he                     |
| Herero                             | hz                     |
| Hindi                              | hi                     |
| Hiri Motu                          | ho                     |
| Hungarian                          | hu                     |
| Icelandic                          | is                     |
| Ido                                | io                     |
| Igbo                               | ig                     |
| Indonesian                         | id, in                 |
| Interlingua                        | ia                     |
| Interlingue                        | ie                     |
| Inuktitut                          | iu                     |
| Inupiak                            | ik                     |
| Irish                              | ga                     |
| Italian                            | it                     |
| Japanese                           | ja                     |
| Javanese                           | jv                     |
| Kalaallisut, Greenlandic           | kl                     |
| Kannada                            | kn                     |
| Kanuri                             | kr                     |
| Kashmiri                           | ks                     |
| Kazakh                             | kk                     |
| Khmer                              | km                     |
| Kikuyu                             | ki                     |
| Kinyarwanda (Rwanda)               | rw                     |
| Kirundi                            | rn                     |
| Kyrgyz                             | ky                     |
| Komi                               | kv                     |
| Kongo                              | kg                     |
| Korean                             | ko                     |
| Kurdish                            | ku                     |
| Kwanyama                           | kj                     |
| Lao                                | lo                     |
| Latin                              | la                     |
| Latvian (Lettish)                  | lv                     |
| Limburgish ( Limburger)            | li                     |
| Lingala                            | ln                     |
| Lithuanian                         | lt                     |
| Luga-Katanga                       | lu                     |
| Luganda, Ganda                     | lg                     |
| Luxembourgish                      | lb                     |
| Manx                               | gv                     |
| Macedonian                         | mk                     |
| Malagasy                           | mg                     |
| Malay                              | ms                     |
| Malayalam                          | ml                     |
| Maltese                            | mt                     |
| Maori                              | mi                     |
| Marathi                            | mr                     |
| Marshallese                        | mh                     |
| Moldavian                          | mo                     |
| Mongolian                          | mn                     |
| Nauru                              | na                     |
| Navajo                             | nv                     |
| Ndonga                             | ng                     |
| Northern Ndebele                   | nd                     |
| Nepali                             | ne                     |
| Norwegian                          | no                     |
| Norwegian bokmål                   | nb                     |
| Norwegian nynorsk                  | nn                     |
| Nuosu                              | ii                     |
| Occitan                            | oc                     |
| Ojibwe                             | oj                     |
| Old Church Slavonic, Old Bulgarian | cu                     |
| Oriya                              | or                     |
| Oromo (Afaan Oromo)                | om                     |
| Ossetian                           | os                     |
| Pāli                               | pi                     |
| Pashto, Pushto                     | ps                     |
| Persian (Farsi)                    | fa                     |
| Polish                             | pl                     |
| Portuguese                         | pt                     |
| Punjabi (Eastern)                  | pa                     |
| Quechua                            | qu                     |
| Romansh                            | rm                     |
| Romanian                           | ro                     |
| Russian                            | ru                     |
| Sami                               | se                     |
| Samoan                             | sm                     |
| Sango                              | sg                     |
| Sanskrit                           | sa                     |
| Serbian                            | sr                     |
| Serbo-Croatian                     | sh                     |
| Sesotho                            | st                     |
| Setswana                           | tn                     |
| Shona                              | sn                     |
| Sichuan Yi                         | ii                     |
| Sindhi                             | sd                     |
| Sinhalese                          | si                     |
| Siswati                            | ss                     |
| Slovak                             | sk                     |
| Slovenian                          | sl                     |
| Somali                             | so                     |
| Southern Ndebele                   | nr                     |
| Spanish                            | es                     |
| Sundanese                          | su                     |
| Swahili (Kiswahili)                | sw                     |
| Swati                              | ss                     |
| Swedish                            | sv                     |
| Tagalog                            | tl                     |
| Tahitian                           | ty                     |
| Tajik                              | tg                     |
| Tamil                              | ta                     |
| Tatar                              | tt                     |
| Telugu                             | te                     |
| Thai                               | th                     |
| Tibetan                            | bo                     |
| Tigrinya                           | ti                     |
| Tonga                              | to                     |
| Tsonga                             | ts                     |
| Turkish                            | tr                     |
| Turkmen                            | tk                     |
| Twi                                | tw                     |
| Uyghur                             | ug                     |
| Ukrainian                          | uk                     |
| Urdu                               | ur                     |
| Uzbek                              | uz                     |
| Venda                              | ve                     |
| Vietnamese                         | vi                     |
| Volapük                            | vo                     |
| Wallon                             | wa                     |
| Welsh                              | cy                     |
| Wolof                              | wo                     |
| Western Frisian                    | fy                     |
| Xhosa                              | xh                     |
| Yiddish                            | yi, ji                 |
| Yoruba                             | yo                     |
| Zhuang, Chuang                     | za                     |
| Zulu                               | zu                     |

## Supported Country Codes

| Country                                      | countryCode(ISO Code) |
| -------------------------------------------- | --------------------- |
| AFGHANISTAN                                  | AF                    |
| ALBANIA                                      | AL                    |
| ALGERIA                                      | DZ                    |
| AMERICAN SAMOA                               | AS                    |
| ANDORRA                                      | AD                    |
| ANGOLA                                       | AO                    |
| ANTARCTICA                                   | AQ                    |
| ANTIGUA AND BARBUDA                          | AG                    |
| ARGENTINA                                    | AR                    |
| ARMENIA                                      | AM                    |
| ARUBA                                        | AW                    |
| AUSTRALIA                                    | AU                    |
| AUSTRIA                                      | AT                    |
| AZERBAIJAN                                   | AZ                    |
| BAHAMAS                                      | BS                    |
| BAHRAIN                                      | BH                    |
| BANGLADESH                                   | BD                    |
| BARBADOS                                     | BB                    |
| BELARUS                                      | BY                    |
| BELGIUM                                      | BE                    |
| BELIZE                                       | BZ                    |
| BENIN                                        | BJ                    |
| BERMUDA                                      | BM                    |
| BHUTAN                                       | BT                    |
| BOLIVIA                                      | BO                    |
| BOSNIA AND HERZEGOVINA                       | BA                    |
| BOTSWANA                                     | BW                    |
| BOUVET ISLAND                                | BV                    |
| BRAZIL                                       | BR                    |
| BRITISH INDIAN OCEAN TERRITORY               | IO                    |
| BRUNEI DARUSSALAM                            | BN                    |
| BULGARIA                                     | BG                    |
| BURKINA FASO                                 | BF                    |
| BURUNDI                                      | BI                    |
| CAMBODIA                                     | KH                    |
| CAMEROON                                     | CM                    |
| CANADA                                       | CA                    |
| CAPE VERDE                                   | CV                    |
| CAYMAN ISLANDS                               | KY                    |
| CENTRAL AFRICAN REPUBLIC                     | CF                    |
| CHAD                                         | TD                    |
| CHILE                                        | CL                    |
| CHINA                                        | CN                    |
| CHRISTMAS ISLAND                             | CX                    |
| COCOS (KEELING) ISLANDS                      | CC                    |
| COLOMBIA                                     | CO                    |
| COMOROS                                      | KM                    |
| CONGO                                        | CG                    |
| CONGO, THE DEMOCRATIC REPUBLIC OF THE        | CD                    |
| COOK ISLANDS                                 | CK                    |
| COSTA RICA                                   | CR                    |
| CÔTE D'IVOIRE                                | CI                    |
| CROATIA                                      | HR                    |
| CUBA                                         | CU                    |
| CYPRUS                                       | CY                    |
| CZECH REPUBLIC                               | CZ                    |
| DENMARK                                      | DK                    |
| DJIBOUTI                                     | DJ                    |
| DOMINICA                                     | DM                    |
| DOMINICAN REPUBLIC                           | DO                    |
| ECUADOR                                      | EC                    |
| EGYPT                                        | EG                    |
| EL SALVADOR                                  | SV                    |
| EQUATORIAL GUINEA                            | GQ                    |
| ERITREA                                      | ER                    |
| ESTONIA                                      | EE                    |
| ETHIOPIA                                     | ET                    |
| FALKLAND ISLANDS (MALVINAS)                  | FK                    |
| FAROE ISLANDS                                | FO                    |
| FIJI                                         | FJ                    |
| FINLAND                                      | FI                    |
| FRANCE                                       | FR                    |
| FRENCH GUIANA                                | GF                    |
| FRENCH POLYNESIA                             | PF                    |
| FRENCH SOUTHERN TERRITORIES                  | TF                    |
| GABON                                        | GA                    |
| GAMBIA                                       | GM                    |
| GEORGIA                                      | GE                    |
| GERMANY                                      | DE                    |
| GHANA                                        | GH                    |
| GIBRALTAR                                    | GI                    |
| GREECE                                       | GR                    |
| GREENLAND                                    | GL                    |
| GRENADA                                      | GD                    |
| GUADELOUPE                                   | GP                    |
| GUAM                                         | GU                    |
| GUATEMALA                                    | GT                    |
| GUINEA                                       | GN                    |
| GUINEA-BISSAU                                | GW                    |
| GUYANA                                       | GY                    |
| HAITI                                        | HT                    |
| HEARD ISLAND AND MCDONALD ISLANDS            | HM                    |
| HONDURAS                                     | HN                    |
| HONG KONG                                    | HK                    |
| HUNGARY                                      | HU                    |
| ICELAND                                      | IS                    |
| INDIA                                        | IN                    |
| INDONESIA                                    | ID                    |
| IRAN, ISLAMIC REPUBLIC OF                    | IR                    |
| IRAQ                                         | IQ                    |
| IRELAND                                      | IE                    |
| ISRAEL                                       | IL                    |
| ITALY                                        | IT                    |
| JAMAICA                                      | JM                    |
| JAPAN                                        | JP                    |
| JORDAN                                       | JO                    |
| KAZAKHSTAN                                   | KZ                    |
| KENYA                                        | KE                    |
| KIRIBATI                                     | KI                    |
| KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF       | KP                    |
| KOREA, REPUBLIC OF                           | KR                    |
| KUWAIT                                       | KW                    |
| KYRGYZSTAN                                   | KG                    |
| LAO PEOPLE'S DEMOCRATIC REPUBLIC (LAOS)      | LA                    |
| LATVIA                                       | LV                    |
| LEBANON                                      | LB                    |
| LESOTHO                                      | LS                    |
| LIBERIA                                      | LR                    |
| LIBYA, STATE OF                              | LY                    |
| LIECHTENSTEIN                                | LI                    |
| LITHUANIA                                    | LT                    |
| LUXEMBOURG                                   | LU                    |
| MACAO                                        | MO                    |
| MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF   | MK                    |
| MADAGASCAR                                   | MG                    |
| MALAWI                                       | MW                    |
| MALAYSIA                                     | MY                    |
| MALDIVES                                     | MV                    |
| MALI                                         | ML                    |
| MALTA                                        | MT                    |
| MARSHALL ISLANDS                             | MH                    |
| MARTINIQUE                                   | MQ                    |
| MAURITANIA                                   | MR                    |
| MAURITIUS                                    | MU                    |
| MAYOTTE                                      | YT                    |
| MEXICO                                       | MX                    |
| MICRONESIA, FEDERATED STATES OF              | FM                    |
| MOLDOVA, REPUBLIC OF                         | MD                    |
| MONACO                                       | MC                    |
| MONGOLIA                                     | MN                    |
| MONTENEGRO                                   | ME                    |
| MONTSERRAT                                   | MS                    |
| MOROCCO                                      | MA                    |
| MOZAMBIQUE                                   | MZ                    |
| MYANMAR                                      | MM                    |
| NAMIBIA                                      | NA                    |
| NAURU                                        | NR                    |
| NEPAL, FEDERAL DEMOCRATIC REPUBLIC OF        | NP                    |
| NETHERLANDS                                  | NL                    |
| NETHERLANDS ANTILLES                         | AN                    |
| NEW CALEDONIA                                | NC                    |
| NEW ZEALAND                                  | NZ                    |
| NICARAGUA                                    | NI                    |
| NIGER                                        | NE                    |
| NIGERIA                                      | NG                    |
| NIUE                                         | NU                    |
| NORFOLK ISLAND                               | NF                    |
| NORTHERN MARIANA ISLANDS                     | MP                    |
| NORWAY                                       | NO                    |
| OMAN                                         | OM                    |
| PAKISTAN                                     | PK                    |
| PALAU                                        | PW                    |
| PALESTINE, STATE OF                          | PS                    |
| PANAMA                                       | PA                    |
| PAPUA NEW GUINEA                             | PG                    |
| PARAGUAY                                     | PY                    |
| PERU                                         | PE                    |
| PHILIPPINES                                  | PH                    |
| PITCAIRN                                     | PN                    |
| POLAND                                       | PL                    |
| PORTUGAL                                     | PT                    |
| PUERTO RICO                                  | PR                    |
| QATAR                                        | QA                    |
| RÉUNION                                      | RE                    |
| ROMANIA                                      | RO                    |
| RUSSIAN FEDERATION                           | RU                    |
| RWANDA                                       | RW                    |
| SAINT HELENA                                 | SH                    |
| SAINT KITTS AND NEVIS                        | KN                    |
| SAINT LUCIA                                  | LC                    |
| SAINT PIERRE AND MIQUELON                    | PM                    |
| SAINT VINCENT AND THE GRENADINES             | VC                    |
| SAMOA                                        | WS                    |
| SAN MARINO                                   | SM                    |
| SAO TOME AND PRINCIPE                        | ST                    |
| SAUDI ARABIA                                 | SA                    |
| SENEGAL                                      | SN                    |
| SERBIA                                       | RS                    |
| SEYCHELLES                                   | SC                    |
| SIERRA LEONE                                 | SL                    |
| SINGAPORE                                    | SG                    |
| SLOVAKIA                                     | SK                    |
| SLOVENIA                                     | SI                    |
| SOLOMON ISLANDS                              | SB                    |
| SOMALIA                                      | SO                    |
| SOUTH AFRICA                                 | ZA                    |
| SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS | GS                    |
| SOUTH SUDAN                                  | SS                    |
| SPAIN                                        | ES                    |
| SRI LANKA                                    | LK                    |
| SUDAN                                        | SD                    |
| SURINAME                                     | SR                    |
| SVALBARD AND JAN MAYEN                       | SJ                    |
| SWAZILAND                                    | SZ                    |
| SWEDEN                                       | SE                    |
| SWITZERLAND                                  | CH                    |
| SYRIAN ARAB REPUBLIC                         | SY                    |
| TAIWAN                                       | TW                    |
| TAJIKISTAN                                   | TJ                    |
| TANZANIA, UNITED REPUBLIC OF                 | TZ                    |
| THAILAND                                     | TH                    |
| TIMOR-LESTE                                  | TL                    |
| TOGO                                         | TG                    |
| TOKELAU                                      | TK                    |
| TONGA                                        | TO                    |
| TRINIDAD AND TOBAGO                          | TT                    |
| TUNISIA                                      | TN                    |
| TURKEY                                       | TR                    |
| TURKMENISTAN                                 | TM                    |
| TURKS AND CAICOS ISLANDS                     | TC                    |
| TUVALU                                       | TV                    |
| UGANDA                                       | UG                    |
| UKRAINE                                      | UA                    |
| UNITED ARAB EMIRATES                         | AE                    |
| UNITED KINGDOM                               | GB                    |
| UNITED STATES                                | US                    |
| UNITED STATES MINOR OUTLYING ISLANDS         | UM                    |
| URUGUAY                                      | UY                    |
| UZBEKISTAN                                   | UZ                    |
| VANUATU                                      | VU                    |
| VENEZUELA                                    | VE                    |
| VIET NAM                                     | VN                    |
| VIRGIN ISLANDS, BRITISH                      | VG                    |
| VIRGIN ISLANDS, U.S.                         | VI                    |
| WALLIS AND FUTUNA                            | WF                    |
| WESTERN SAHARA                               | EH                    |
| YEMEN                                        | YE                    |
| ZAMBIA                                       | ZM                    |
| ZIMBABWE                                     | ZW                    |

## Supported Currency Codes

| Country (or Region)                                        | Currency                                      | currencyCode |
| ---------------------------------------------------------- | --------------------------------------------- | ------------ |
| AFGHANISTAN                                                | Afghani                                       | AFN          |
| ÅLAND ISLANDS                                              | Euro                                          | EUR          |
| ALBANIA                                                    | Lek                                           | ALL          |
| ALGERIA                                                    | Algerian Dinar                                | DZD          |
| AMERICAN SAMOA                                             | US Dollar                                     | USD          |
| ANDORRA                                                    | Euro                                          | EUR          |
| ANGOLA                                                     | Kwanza                                        | AOA          |
| ANGUILLA                                                   | East Caribbean Dollar                         | XCD          |
| ANTARCTICA                                                 | No universal currency                         | None         |
| ANTIGUA AND BARBUDA                                        | East Caribbean Dollar                         | XCD          |
| ARGENTINA                                                  | Argentine Peso                                | ARS          |
| ARMENIA                                                    | Armenian Dram                                 | AMD          |
| ARUBA                                                      | Aruban Florin                                 | AWG          |
| AUSTRALIA                                                  | Australian Dollar                             | AUD          |
| AUSTRIA                                                    | Euro                                          | EUR          |
| AZERBAIJAN                                                 | Azerbaijanian Manat                           | AZN          |
| BAHAMAS                                                    | Bahamian Dollar                               | BSD          |
| BAHRAIN                                                    | Bahraini Dinar                                | BHD          |
| BANGLADESH                                                 | Taka                                          | BDT          |
| BARBADOS                                                   | Barbados Dollar                               | BBD          |
| BELARUS                                                    | Belarussian Ruble                             | BYR          |
| BELGIUM                                                    | Euro                                          | EUR          |
| BELIZE                                                     | Belize Dollar                                 | BZD          |
| BENIN                                                      | CFA Franc BCEAO                               | XOF          |
| BERMUDA                                                    | Bermudian Dollar                              | BMD          |
| BHUTAN                                                     | Ngultrum                                      | BTN          |
| BHUTAN                                                     | Indian Rupee                                  | INR          |
| BOLIVIA, PLURINATIONAL STATE OF                            | Boliviano                                     | BOB          |
| BOLIVIA, PLURINATIONAL STATE OF                            | Mvdol                                         | BOV          |
| BONAIRE, SINT EUSTATIUS AND SABA                           | US Dollar                                     | USD          |
| BOSNIA AND HERZEGOVINA                                     | Convertible Mark                              | BAM          |
| BOTSWANA                                                   | Pula                                          | BWP          |
| BOUVET ISLAND                                              | Norwegian Krone                               | NOK          |
| BRAZIL                                                     | Brazilian Real                                | BRL          |
| BRITISH INDIAN OCEAN TERRITORY                             | US Dollar                                     | USD          |
| BRUNEI DARUSSALAM                                          | Brunei Dollar                                 | BND          |
| BULGARIA                                                   | Bulgarian Lev                                 | BGN          |
| BURKINA FASO                                               | CFA Franc BCEAO                               | XOF          |
| BURUNDI                                                    | Burundi Franc                                 | BIF          |
| CAMBODIA                                                   | Riel                                          | KHR          |
| CAMEROON                                                   | CFA Franc BEAC                                | XAF          |
| CANADA                                                     | Canadian Dollar                               | CAD          |
| CABO VERDE                                                 | Cabo Verde Escudo                             | CVE          |
| CAYMAN ISLANDS                                             | Cayman Islands Dollar                         | KYD          |
| CENTRAL AFRICAN REPUBLIC                                   | CFA Franc BEAC                                | XAF          |
| CHAD                                                       | CFA Franc BEAC                                | XAF          |
| CHILE                                                      | Unidad de Fomento                             | CLF          |
| CHILE                                                      | Chilean Peso                                  | CLP          |
| CHINA                                                      | Yuan Renminbi                                 | CNY          |
| CHRISTMAS ISLAND                                           | Australian Dollar                             | AUD          |
| COCOS (KEELING) ISLANDS                                    | Australian Dollar                             | AUD          |
| COLOMBIA                                                   | Colombian Peso                                | COP          |
| COLOMBIA                                                   | Unidad de Valor Real                          | COU          |
| COMOROS                                                    | Comoro Franc                                  | KMF          |
| CONGO                                                      | CFA Franc BEAC                                | XAF          |
| CONGO, DEMOCRATIC REPUBLIC OF THE                          | Congolese Franc                               | CDF          |
| COOK ISLANDS                                               | New Zealand Dollar                            | NZD          |
| COSTA RICA                                                 | Costa Rican Colon                             | CRC          |
| CÔTE D'IVOIRE                                              | CFA Franc BCEAO                               | XOF          |
| CROATIA                                                    | Croatian Kuna                                 | HRK          |
| CUBA                                                       | Peso Convertible                              | CUC          |
| CUBA                                                       | Cuban Peso                                    | CUP          |
| CURAÇAO                                                    | Netherlands Antillean Guilder                 | ANG          |
| CYPRUS                                                     | Euro                                          | EUR          |
| CZECH REPUBLIC                                             | Czech Koruna                                  | CZK          |
| DENMARK                                                    | Danish Krone                                  | DKK          |
| DJIBOUTI                                                   | Djibouti Franc                                | DJF          |
| DOMINICA                                                   | East Caribbean Dollar                         | XCD          |
| DOMINICAN REPUBLIC                                         | Dominican Peso                                | DOP          |
| ECUADOR                                                    | US Dollar                                     | USD          |
| EGYPT                                                      | Egyptian Pound                                | EGP          |
| EL SALVADOR El                                             | Salvador Colon                                | SVC          |
| EL SALVADOR                                                | US Dollar                                     | USD          |
| EQUATORIAL GUINEA                                          | CFA Franc BEAC                                | XAF          |
| ERITREA                                                    | Nakfa                                         | ERN          |
| ESTONIA                                                    | Euro                                          | EUR          |
| ETHIOPIA                                                   | Ethiopian Birr                                | ETB          |
| EUROPEAN UNION                                             | Euro                                          | EUR          |
| FALKLAND ISLANDS (MALVINAS)                                | Falkland Islands Pound                        | FKP          |
| FAROE ISLANDS                                              | Danish Krone                                  | DKK          |
| FIJI                                                       | Fiji Dollar                                   | FJD          |
| FINLAND                                                    | Euro                                          | EUR          |
| FRANCE                                                     | Euro                                          | EUR          |
| FRENCH GUIANA                                              | Euro                                          | EUR          |
| FRENCH POLYNESIA                                           | CFP Franc                                     | XPF          |
| FRENCH SOUTHERN TERRITORIES                                | Euro                                          | EUR          |
| GABON                                                      | CFA Franc BEAC                                | XAF          |
| GAMBIA                                                     | Dalasi                                        | GMD          |
| GEORGIA                                                    | Lari                                          | GEL          |
| GERMANY                                                    | Euro                                          | EUR          |
| GHANA                                                      | Ghana Cedi                                    | GHS          |
| GIBRALTAR                                                  | Gibraltar Pound                               | GIP          |
| GREECE                                                     | Euro                                          | EUR          |
| GREENLAND                                                  | Danish Krone                                  | DKK          |
| GRENADA                                                    | East Caribbean Dollar                         | XCD          |
| GUADELOUPE                                                 | Euro                                          | EUR          |
| GUAM                                                       | US Dollar                                     | USD          |
| GUATEMALA                                                  | Quetzal                                       | GTQ          |
| GUERNSEY                                                   | Pound Sterling                                | GBP          |
| GUINEA                                                     | Guinea Franc                                  | GNF          |
| GUINEA-BISSAU                                              | CFA Franc BCEAO                               | XOF          |
| GUYANA                                                     | Guyana Dollar                                 | GYD          |
| HAITI                                                      | Gourde                                        | HTG          |
| HAITI                                                      | US Dollar                                     | USD          |
| HEARD ISLAND AND McDONALD ISLANDS                          | Australian Dollar                             | AUD          |
| HOLY SEE (VATICAN CITY STATE)                              | Euro                                          | EUR          |
| HONDURAS                                                   | Lempira                                       | HNL          |
| HONG KONG                                                  | Hong Kong Dollar                              | HKD          |
| HUNGARY                                                    | Forint                                        | HUF          |
| ICELAND                                                    | Iceland Krona                                 | ISK          |
| INDIA                                                      | Indian Rupee                                  | INR          |
| INDONESIA                                                  | Rupiah                                        | IDR          |
| IRAN, ISLAMIC REPUBLIC OF                                  | Iranian Rial                                  | IRR          |
| IRAQ                                                       | Iraqi Dinar                                   | IQD          |
| IRELAND                                                    | Euro                                          | EUR          |
| ISLE OF MAN                                                | Pound Sterling                                | GBP          |
| ISRAEL New                                                 | Israeli Sheqel                                | ILS          |
| ITALY                                                      | Euro                                          | EUR          |
| JAMAICA                                                    | Jamaican Dollar                               | JMD          |
| JAPAN                                                      | Yen                                           | JPY          |
| JERSEY                                                     | Pound Sterling                                | GBP          |
| JORDAN                                                     | Jordanian Dinar                               | JOD          |
| KAZAKHSTAN                                                 | Tenge                                         | KZT          |
| KENYA                                                      | Kenyan Shilling                               | KES          |
| KIRIBATI                                                   | Australian Dollar                             | AUD          |
| KOREA, DEMOCRATIC PEOPLE’S REPUBLIC OF                     | North Korean Won                              | KPW          |
| KOREA, REPUBLIC OF                                         | Won                                           | KRW          |
| KUWAIT                                                     | Kuwaiti Dinar                                 | KWD          |
| KYRGYZSTAN                                                 | Som                                           | KGS          |
| LAO PEOPLE’S DEMOCRATIC REPUBLIC                           | Kip                                           | LAK          |
| LATVIA                                                     | Euro                                          | EUR          |
| LEBANON                                                    | Lebanese Pound                                | LBP          |
| LESOTHO                                                    | Loti                                          | LSL          |
| LESOTHO                                                    | Rand                                          | ZAR          |
| LIBERIA                                                    | Liberian Dollar                               | LRD          |
| LIBYA                                                      | Libyan Dinar                                  | LYD          |
| LIECHTENSTEIN                                              | Swiss Franc                                   | CHF          |
| LITHUANIA                                                  | Euro                                          | EUR          |
| LUXEMBOURG                                                 | Euro                                          | EUR          |
| MACAO                                                      | Pataca                                        | MOP          |
| MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF                 | Denar                                         | MKD          |
| MADAGASCAR                                                 | Malagasy Ariary                               | MGA          |
| MALAWI                                                     | Kwacha                                        | MWK          |
| MALAYSIA                                                   | Malaysian Ringgit                             | MYR          |
| MALDIVES                                                   | Rufiyaa                                       | MVR          |
| MALI                                                       | CFA Franc BCEAO                               | XOF          |
| MALTA                                                      | Euro                                          | EUR          |
| MARSHALL ISLANDS                                           | US Dollar                                     | USD          |
| MARTINIQUE                                                 | Euro                                          | EUR          |
| MAURITANIA                                                 | Ouguiya                                       | MRO          |
| MAURITIUS                                                  | Mauritius Rupee                               | MUR          |
| MAYOTTE                                                    | Euro                                          | EUR          |
| MEMBER COUNTRIES OF THE AFRICAN DEVELOPMENT BANK GROUP ADB | Unit of Account                               | XUA          |
| MEXICO                                                     | Mexican Peso                                  | MXN          |
| MEXICO                                                     | Mexican Unidad de Inversion (UDI)             | MXV          |
| MICRONESIA, FEDERATED STATES OF                            | US Dollar                                     | USD          |
| MOLDOVA, REPUBLIC OF                                       | Moldovan Leu                                  | MDL          |
| MONACO                                                     | Euro                                          | EUR          |
| MONGOLIA                                                   | Tugrik                                        | MNT          |
| MONTENEGRO                                                 | Euro                                          | EUR          |
| MONTSERRAT                                                 | East Caribbean Dollar                         | XCD          |
| MOROCCO                                                    | Moroccan Dirham                               | MAD          |
| MOZAMBIQUE                                                 | Mozambique Metical                            | MZN          |
| MYANMAR                                                    | Kyat                                          | MMK          |
| NAMIBIA                                                    | Namibia Dollar                                | NAD          |
| NAMIBIA                                                    | Rand                                          | ZAR          |
| NAURU                                                      | Australian Dollar                             | AUD          |
| NEPAL                                                      | Nepalese Rupee                                | NPR          |
| NETHERLANDS                                                | Euro                                          | EUR          |
| NEW CALEDONIA                                              | CFP Franc                                     | XPF          |
| NEW ZEALAND                                                | New Zealand Dollar                            | NZD          |
| NICARAGUA                                                  | Cordoba Oro                                   | NIO          |
| NIGER                                                      | CFA Franc BCEAO                               | XOF          |
| NIGERIA                                                    | Naira                                         | NGN          |
| NIUE                                                       | New Zealand Dollar                            | NZD          |
| NORFOLK ISLAND                                             | Australian Dollar                             | AUD          |
| NORTHERN MARIANA ISLANDS                                   | US Dollar                                     | USD          |
| NORWAY                                                     | Norwegian Krone                               | NOK          |
| OMAN                                                       | Rial Omani                                    | OMR          |
| PAKISTAN                                                   | Pakistan Rupee                                | PKR          |
| PALAU                                                      | US Dollar                                     | USD          |
| PALESTINE, STATE OF                                        | No universal currency                         | None         |
| PANAMA                                                     | Balboa                                        | PAB          |
| PANAMA                                                     | US Dollar                                     | USD          |
| PAPUA NEW GUINEA                                           | Kina                                          | PGK          |
| PARAGUAY                                                   | Guarani                                       | PYG          |
| PERU                                                       | Nuevo Sol                                     | PEN          |
| PHILIPPINES                                                | Philippine Peso                               | PHP          |
| PITCAIRN                                                   | New Zealand Dollar                            | NZD          |
| POLAND                                                     | Zloty                                         | PLN          |
| PORTUGAL                                                   | Euro                                          | EUR          |
| PUERTO RICO                                                | US Dollar                                     | USD          |
| QATAR                                                      | Qatari Rial                                   | QAR          |
| RÉUNION                                                    | Euro                                          | EUR          |
| ROMANIA                                                    | New Romanian Leu                              | RON          |
| RUSSIAN FEDERATION                                         | Russian Ruble                                 | RUB          |
| RWANDA                                                     | Rwanda Franc                                  | RWF          |
| SAINT BARTHÉLEMY                                           | Euro                                          | EUR          |
| SAINT HELENA, ASCENSION AND TRISTAN DA CUNHA               | Saint Helena Pound                            | SHP          |
| SAINT KITTS AND NEVIS                                      | East Caribbean Dollar                         | XCD          |
| SAINT LUCIA                                                | East Caribbean Dollar                         | XCD          |
| SAINT MARTIN (FRENCH PART)                                 | Euro                                          | EUR          |
| SAINT PIERRE AND MIQUELON                                  | Euro                                          | EUR          |
| SAINT VINCENT AND THE GRENADINES                           | East Caribbean Dollar                         | XCD          |
| SAMOA                                                      | Tala                                          | WST          |
| SAN MARINO                                                 | Euro                                          | EUR          |
| SAO TOME AND PRINCIPE                                      | Dobra                                         | STD          |
| SAUDI ARABIA                                               | Saudi Riyal                                   | SAR          |
| SENEGAL                                                    | CFA Franc BCEAO                               | XOF          |
| SERBIA                                                     | Serbian Dinar                                 | RSD          |
| SEYCHELLES                                                 | Seychelles Rupee                              | SCR          |
| SIERRA LEONE                                               | Leone                                         | SLL          |
| SINGAPORE                                                  | Singapore Dollar                              | SGD          |
| SINT MAARTEN (DUTCH PART)                                  | Netherlands Antillean Guilder                 | ANG          |
| SISTEMA UNITARIO DE COMPENSACION REGIONAL DE PAGOS "SUCRE" | Sucre                                         | XSU          |
| SLOVAKIA                                                   | Euro                                          | EUR          |
| SLOVENIA                                                   | Euro                                          | EUR          |
| SOLOMON ISLANDS                                            | Solomon Islands Dollar                        | SBD          |
| SOMALIA                                                    | Somali Shilling                               | SOS          |
| SOUTH AFRICA                                               | Rand                                          | ZAR          |
| SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS               | No universal currency                         | None         |
| SOUTH SUDAN                                                | South Sudanese Pound                          | SSP          |
| SPAIN                                                      | Euro                                          | EUR          |
| SRI LANKA                                                  | Sri Lanka Rupee                               | LKR          |
| SUDAN                                                      | Sudanese Pound                                | SDG          |
| SURINAME                                                   | Surinam Dollar                                | SRD          |
| SVALBARD AND JAN MAYEN                                     | Norwegian Krone                               | NOK          |
| SWAZILAND                                                  | Lilangeni                                     | SZL          |
| SWEDEN                                                     | Swedish Krona                                 | SEK          |
| SWITZERLAND                                                | WIR Euro                                      | CHE          |
| SWITZERLAND                                                | Swiss Franc                                   | CHF          |
| SWITZERLAND                                                | WIR Franc                                     | CHW          |
| SYRIAN ARAB REPUBLIC                                       | Syrian Pound                                  | SYP          |
| TAIWAN, PROVINCE OF CHINA                                  | New Taiwan Dollar                             | TWD          |
| TAJIKISTAN                                                 | Somoni                                        | TJS          |
| TANZANIA, UNITED REPUBLIC OF                               | Tanzanian Shilling                            | TZS          |
| THAILAND                                                   | Baht                                          | THB          |
| TIMOR-LESTE                                                | US Dollar                                     | USD          |
| TOGO                                                       | CFA Franc BCEAO                               | XOF          |
| TOKELAU                                                    | New Zealand Dollar                            | NZD          |
| TONGA                                                      | Pa’anga                                       | TOP          |
| TRINIDAD AND TOBAGO                                        | Trinidad and Tobago Dollar                    | TTD          |
| TUNISIA                                                    | Tunisian Dinar                                | TND          |
| TURKEY                                                     | Turkish Lira                                  | TRY          |
| TURKMENISTAN                                               | Turkmenistan New Manat                        | TMT          |
| TURKS AND CAICOS ISLANDS                                   | US Dollar                                     | USD          |
| TUVALU                                                     | Australian Dollar                             | AUD          |
| UGANDA                                                     | Uganda Shilling                               | UGX          |
| UKRAINE                                                    | Hryvnia                                       | UAH          |
| UNITED ARAB EMIRATES                                       | UAE Dirham                                    | AED          |
| UNITED KINGDOM                                             | Pound Sterling                                | GBP          |
| UNITED STATES                                              | US Dollar                                     | USD          |
| UNITED STATES                                              | US Dollar (Next day)                          | USN          |
| UNITED STATES MINOR OUTLYING ISLANDS                       | US Dollar                                     | USD          |
| URUGUAY                                                    | Uruguay Peso en Unidades Indexadas (URUIURUI) | UYI          |
| URUGUAY                                                    | Peso Uruguayo                                 | UYU          |
| UZBEKISTAN                                                 | Uzbekistan Sum                                | UZS          |
| VANUATU                                                    | Vatu                                          | VUV          |
| VENEZUELA, BOLIVARIAN REPUBLIC OF                          | Bolivar                                       | VEF          |
| VIET NAM                                                   | Dong                                          | VND          |
| VIRGIN ISLANDS (BRITISH)                                   | US Dollar                                     | USD          |
| VIRGIN ISLANDS (U.S.)                                      | US Dollar                                     | USD          |
| WALLIS AND FUTUNA                                          | CFP Franc                                     | XPF          |
| WESTERN SAHARA                                             | Moroccan Dirham                               | MAD          |
| YEMEN                                                      | Yemeni Rial                                   | YER          |
| ZAMBIA                                                     | Zambian Kwacha                                | ZMW          |
| ZIMBABWE                                                   | Zimbabwe Dollar                               | ZWL          |

## License

MIT © [Satyendra Pandit](https://github.com/satyendra2013)
