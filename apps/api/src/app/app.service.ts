import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import * as ytdl from 'ytdl-core';
import { InitDownloadDto } from './dto/init-download.dto';

@Injectable()
export class AppService {
  download({ url, name }: InitDownloadDto) {
    ytdl(url)
      .pipe(createWriteStream(name));
  }
}
