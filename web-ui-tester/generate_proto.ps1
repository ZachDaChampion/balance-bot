npx pbjs -t static-module -w es6 --es6 -p ../proto -o proto/proto.js ../proto/web2bot.proto ../proto/bot2web.proto
(Get-Content proto/proto.js).replace('@exports', '@name') | Out-File -encoding ASCII proto/proto.js
npx pbts -o proto/proto.d.ts proto/proto.js
(Get-Content proto/proto.js).replace('import * as $protobuf from "protobufjs/minimal";', 'import $protobuf from "protobufjs/minimal.js";') | Out-File -encoding ASCII proto/proto.js