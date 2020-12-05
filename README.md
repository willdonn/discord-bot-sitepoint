A Discord bot created to get prices from Steam. 

## Useage
!price title of game [--3]
    - !price - command to retrieve the game price
    - title of game - the game to search for on steam
    - --3 - optional argument to get more than one search result, 3 results will be returned if they are found in this case
!score title of game
    - !score - command to retrieve the overall score/ review of the game
    - title of game - the game to search for on steam

index.js contains the code to retrieve prices from steam, it is hard coded to return english results in canadian dollars, to change the language or currency, change arguments in the provider.search function on lines 22 and 29

## Created from the following tutorial:

Link to article on SitePoint: [https://www.sitepoint.com/discord-bot-node-js/](https://www.sitepoint.com/discord-bot-node-js/)

## Requirements

- [Node.js](http://nodejs.org/)
- [Discord](https://discordapp.com/) account

## Installation Steps (if applicable)

1. Clone repo
2. Run `npm install`
3. Add Discord credentials in a `.env` file
3. Run `node index.js`
4. Interact with your Discord bot via your web browser

## License

SitePoint's code archives and code examples are licensed under the MIT license.

Copyright © 2020 SitePoint

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
