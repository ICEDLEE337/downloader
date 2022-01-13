#! /usr/bin/env node

const { createWriteStream } = require('fs');
const { resolve } = require('path');
const ytdl = require('ytdl-core');
const { argParser } = require('@onivoro/nodejs-cli-sdk');

const { name, hash, filter } = argParser(process.argv);
const resolvedFolder = resolve(process.cwd())

if (!hash) {
  console.log(`
USEAGE:

dl --hash 'ghjys34sdf64f' --name 'my video.mp3' --filter audioonly
`);  
  return;
}

ytdl(`https://www.youtube.com/watch?v=${hash}`, {filter: 'audioonly'})
  .pipe(createWriteStream(`${resolvedFolder}/${name}`));