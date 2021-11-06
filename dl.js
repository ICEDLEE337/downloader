#! /usr/bin/env node

const { createWriteStream } = require('fs');
const { resolve } = require('path');
const ytdl = require('ytdl-core');
const { argParser } = require('@onivoro/nodejs-cli-sdk');

const { name, hash } = argParser(process.argv);
const resolvedFolder = resolve(process.cwd())

if (!hash) {
  console.log(`
USEAGE:

dl --hash 'ghjys34sdf64f' --name 'my video'
`);  
  return;
}

ytdl(`https://www.youtube.com/watch?v=${hash}`)
  .pipe(createWriteStream(`${resolvedFolder}/${name}.mp4`));