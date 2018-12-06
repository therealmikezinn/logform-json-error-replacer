# logform-json-error-replacer

A simple helper function to help serialize errors in winston.

## Example

```js
const logformJsonErrorReplacer = require('logform-json-error-replacer');
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, json } = format;

const logger = createLogger({
  format: combine(
    timestamp(),
    json({ replacer: logformJsonErrorReplacer })
  ),
  transports: [new transports.Console()]
});


```