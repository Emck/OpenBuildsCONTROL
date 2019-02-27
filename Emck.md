1. 解决 Electron 提示版本错误无法运行的错误
   npm run no-install

2. 解决 nodemon 提示版本错误无法运行的错误
   新建一个项目来编译serialport,然后复制  新项目node_modules/@serialport目录到当前目录即可
   mkdir createserialport
   cd createserialport
   npm init
   npm install serialport --unsafe-perm --build-from-source
   rm -rf /youproject/node_modules/@serialport
   cp -r node_modules/@serialport /youproject/node_modules/@serialport

3. 彻底解决这个问题,就要等serialport包的releases什么时候出了 bindings node darwin-x64.tar.gz对应node版本的二进制包了
   https://github.com/node-serialport/node-serialport/releases

特别说明:
   解决Electron和nodemon的版本错误的方案是冲突的,那么只需要额外备份一套@serialport目录即可
   也就是当需要使用nodemon时,复制新项目的@serialport到当前项目中
   而运行Electron时则先执行npm run no-install即可
   
   建议等调试的差不多了再使用Electron测试看效果,避免频繁切换的麻烦