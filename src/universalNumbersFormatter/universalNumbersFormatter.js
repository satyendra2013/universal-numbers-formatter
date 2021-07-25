const universalNumbersFormatter = (
  number,
  langaugeCode,
  countryCode,
  isCurrency,
  currencyCode
) => {
  let longNotation = '',
    shortNotation = '';
  if (typeof number !== 'number') {
    return {
      error: 'Invalid number format.',
    };
  } else if (typeof number === 'number' && langaugeCode && countryCode) {
    if (isCurrency) {
      if (currencyCode) {
        longNotation = new Intl.NumberFormat(`${langaugeCode}-${countryCode}`, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
          style: 'currency',
          currency: `${currencyCode}`,
        }).format(number);
        shortNotation = new Intl.NumberFormat(
          `${langaugeCode}-${countryCode}`,
          {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
            notation: 'compact',
            style: 'currency',
            currency: `${currencyCode}`,
          }
        ).format(number);
        return {
          longNotation: longNotation,
          shortNotation: shortNotation,
        };
      } else {
        return {
          error: 'Invalid currency denotation.',
        };
      }
    } else {
      longNotation = new Intl.NumberFormat(`${langaugeCode}-${countryCode}`, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(number);
      shortNotation = new Intl.NumberFormat(`${langaugeCode}-${countryCode}`, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        notation: 'compact',
      }).format(number);
      return {
        longNotation: longNotation,
        shortNotation: shortNotation,
      };
    }
  } else {
    return {
      error: 'Invalid langauge or country code.',
    };
  }
};

export default universalNumbersFormatter;
