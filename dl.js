#! /usr/bin/env node

const fs = require('fs');
const ytdl = require('ytdl-core');
const { argParser } = require('@onivoro/nodejs-cli-sdk');
const { name, hash } = argParser(process.argv);
const folder = 'output'

if (!hash) {
  console.log("missing --hash blahblahblah'");
  console.log("optionally add --name blahblahblah'");
  return;
}
ytdl(`https://www.youtube.com/watch?v=${hash}`)
  .pipe(fs.createWriteStream(`${folder}/${name}.mp4`));