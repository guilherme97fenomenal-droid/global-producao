import {test} from 'node:test';import assert from 'node:assert/strict';import path from 'node:path';import {insidePath} from '../server/paths.mjs';
test('arquivos do Windows são aceitos e saídas da pasta são bloqueadas',()=>{
 const root='C:\\Users\\Gui\\Global-Producao\\dist';
 assert.equal(insidePath(root,'index.html',path.win32),root+'\\index.html');
 assert.equal(insidePath(root,'assets/app.js',path.win32),root+'\\assets\\app.js');
 assert.equal(insidePath(root,'../data/global.sqlite',path.win32),null);
 assert.equal(insidePath(root,'..\\data\\global.sqlite',path.win32),null);
 assert.equal(insidePath(root,'D:\\data\\global.sqlite',path.win32),null);
 assert.equal(insidePath(root,root+'-outro\\segredo',path.win32),null);
 assert.equal(insidePath('\\\\servidor\\pasta\\dist','assets/app.js',path.win32),'\\\\servidor\\pasta\\dist\\assets\\app.js');
});
test('POSIX e arquivos inexistentes não ampliam pasta permitida',()=>{assert.equal(insidePath('/app/dist','index.html',path.posix),'/app/dist/index.html');assert.equal(insidePath('/app/dist','../data/a',path.posix),null);assert.equal(insidePath('/app/dist','/etc/passwd',path.posix),null);assert.equal(insidePath('/app/dist','.',path.posix),null)});
