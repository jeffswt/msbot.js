# msbot.js

`msbot.js` is an intelligent bot designed for [Minesweeper](https://minesweeper.io/). This bot incorporates automatic flagging and automatic revealing, which injects itself into the minesweeper API. Note that this project is only intendef for educational purposes, and not intended for proper gameplay. The author urges you not to use this in regular gaming, as this will break the balance between players.

This bot automates mine sweeping and revealing, which has little to no probability of stepping onto mines, reaching an exasperating level of score atop other players.

## Controls

This tool has no controls, all operations are fully automated.

## Installation

There are, however, a few methods of installation which we may go through with you.

### Developer Console

1.  Download the `msbot.js` file to your local computer or view it on GitHub.
2.  Open the **Developer Console** in your Minesweeper tab (This is usually `F12` for most browsers).
3.  Copy all content in `msbot.js` to the **Developer Console** and press `Enter` to execute the script.
4.  Your instance of Minesweeper should be automated by now.
5.  If you reloaded your browser window, you may have to redo the process.

### Bookmarklet

1.  Drag this code to your bookmarks bar (and rename it): `javascript:eval('function f(){i=document.createElement(\'script\');i.src=\'//jeffswt.tk/meta/msbot.js\';document.body.appendChild(i);}f();')`
2.  Click the link on the bookmarks bar when in [minesweeper.io](https://minesweeper.io/).
3.  Your instance of Minesweeper should be automated by now.

### Tampermonkey

Because the official documentation for Tampermonkey is being abstruse to an awful extent, we decided that we are not developing an interface as a userscript for Tampermonkey. Feel free to make PRs to this project if you have interfaces.

## License

```
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
```
