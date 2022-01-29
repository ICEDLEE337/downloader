#! /usr/bin/env node

const { createWriteStream } = require('fs');
const { resolve } = require('path');
const ytdl = require('ytdl-core');
const { argParser } = require('@onivoro/nodejs-cli-sdk');

const { name, hash, filter, begin } = argParser(process.argv);
const resolvedFolder = resolve(process.cwd())

if (!hash) {
  console.log(`
USEAGE:

dl --hash 'ghjys34sdf64f' --name 'my video.mp3' --filter audioonly --begin '1:00'
`);  
  return;
}

ytdl(`https://www.youtube.com/watch?v=${hash.replace('https://www.youtube.com/watch?v=', '')}`, {filter , begin})
  .pipe(createWriteStream(`${resolvedFolder}/${name}`));