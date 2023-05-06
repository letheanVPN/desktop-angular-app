import {AfterViewInit, Component, OnInit} from '@angular/core';
import {InputOutputService} from "../../../../typescript-angular";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'lthn-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent {

  group: string = '';
  config: any = [];
  constructor(private fs: InputOutputService , private route: ActivatedRoute) {
    //this.getConfig();
    this.group = this.route.snapshot.queryParamMap.has('group')? '/'+this.route.snapshot.queryParamMap.get('group') : '';
    this.getConfig(this.group);
  }

  getConfig(group = '') {
    this.fs.getDetailedDirectoryList({ path: `data/objects${group}`}).subscribe((data: any) => {
        for (const v of data) {
          if (v.name.startsWith('.')){
            data.splice(data.indexOf(v), 1);
          }
        }
        this.config = data;
    });
  }



}
