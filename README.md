# chrome-extensions
Implementation of sample Chrome extensions:

## Getting started plugin

Implements https://developer.chrome.com/extensions/getstarted tutorial.

## TLS error capture plugin

Detects net::ERR_CONNECTION_RESET on HTTPS connections and show a custom error page as
a result.

References:
1. https://developer.chrome.com/extensions/webRequest
2. https://bugs.chromium.org/p/chromium/issues/detail?id=129353
3. http://stackoverflow.com/questions/8514883/create-a-custom-dns-error-page/8517197#8517197
