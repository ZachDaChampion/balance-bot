# Compiling Proto

## Automatic

### Windows (Powershell)

Run `./genearte_proto.ps1` from within the `web-ui` directory.

## Manual

First, generate an initial JS file with:

```bash
npx pbjs -t static-module -w es6 --es6 -p ../proto -o src/lib/proto/proto.js ../proto/web2bot.proto ../proto/bot2web.proto
```

Next, search-and-replace all instances of `@exports` in `src/lib/proto/proto.js` with `@name`
(see [this GitHub issue](https://github.com/protobufjs/protobuf.js/issues/1414#issuecomment-1290725151)).

Now run:

```bash
npx pbts -o src/lib/proto/proto.d.ts src/lib/proto/proto.js
```

Finally, change the second line of `src/lib/proto/proto.js` from

```js
import * as $protobuf from 'protobufjs/minimal';
```

to

```js
import $protobuf from 'protobufjs/minimal';
```
