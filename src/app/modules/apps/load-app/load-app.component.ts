import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'lthn-app-load-app',
  templateUrl: './load-app.component.html',
  styleUrls: ['./load-app.component.scss']
})
export class LoadAppComponent implements OnInit {

  app: string
  constructor(private route: ActivatedRoute) {
    this.app = this.route.snapshot.url[1].path
  }

  async ngOnInit() {

    console.log(this.route.snapshot.url[1].path)
  }

  sourceUrl(){
    return `http://localhost:36911/${this.app.split('-').join('/')}/index.html`
  }

}
