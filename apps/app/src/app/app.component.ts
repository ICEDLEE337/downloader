import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { concatMap, map, Subject, tap } from 'rxjs';
import { DownloadApi } from './api';

@Component({
  selector: 'gg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data!: void;
  form!: FormGroup;
  readonly downloadClient = new DownloadApi({ basePath: 'http://localhost:3333', isJsonMime: () => true });
  readonly submit$$ = new Subject();
  readonly submit$ = this.submit$$.asObservable().pipe(
    map(() => this.form.value),
    concatMap(v => this.download(v)),
    map(() => 'Download Complete')
  );

  async ngOnInit() {
    this.form = this.formBuilder.group({
      url: [undefined, Validators.required],
      name: [undefined, Validators.required],
    });
  }

  async download({ url, name }: any) {
    this.data = (await this.downloadClient.appControllerDownload({ url, name })).data;
  }

  constructor(
    private formBuilder: FormBuilder
  ) { }
}
