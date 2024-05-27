npx pbjs -t static-module -w es6 --es6 -p ../proto -o src/lib/proto/proto.js ../proto/global.proto
(Get-Content src/lib/proto/proto.js).replace('@exports', '@name') | Out-File -encoding ASCII src/lib/proto/proto.js
npx pbts -o src/lib/proto/proto.d.ts src/lib/proto/proto.js
(Get-Content src/lib/proto/proto.js).replace('import * as $protobuf from', 'import $protobuf from') | Out-File -encoding ASCII src/lib/proto/proto.js