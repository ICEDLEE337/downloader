import { Body, Controller, Get, Post } from '@nestjs/common';

import { Message } from '@gg/api-interfaces';

import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';
import { InitDownloadDto } from './dto/init-download.dto';

const prefix = 'download';

@ApiTags(prefix)
@Controller(prefix)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  download(@Body() body: InitDownloadDto) {
    return this.appService.download(body);
  }
}
