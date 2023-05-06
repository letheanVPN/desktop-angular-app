import {Component, OnInit, ViewChild} from '@angular/core';
import {FileSystemService} from "@service/filesystem/file-system.service";
import {MultidimensionalArray} from "@ui/@theme/components/tree-menu/tree-menu.component";
import {ActivatedRoute, NavigationEnd, NavigationStart, Router} from "@angular/router";

interface Node {
  readonly title: string;
  readonly icon: string;
}
@Component({
  selector: 'lthn-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent  {
  public fileTree = [];
  public nodes: any = [];
  public options = {};
  public path = '';
  constructor(private fs: FileSystemService, private route: ActivatedRoute, private router:Router) {
    this.path = this.route.snapshot.queryParamMap.has('path')? this.route.snapshot.queryParamMap.get('path') : '';
    router.events.forEach((event) => {
      if(event instanceof NavigationEnd) {
        this.path = this.route.snapshot.queryParamMap.has('path')? this.route.snapshot.queryParamMap.get('path') : '';
         this.getFiles().catch(r => console.log(r))
      }
    });
  }

  async ngOnInit() {
     return this.getFiles()
    }

    async getFiles() {
      this.fileTree = await this.fs.listFilesDetailed(this.path)
      for (const v of this.fileTree) {
        if (v.isDirectory) {
          this.nodes.push({title: v.name, icon: 'folder-outline', children: []})
        } else {
          this.nodes.push({title: v.name, icon: 'file-outline'})
        }
      }

    }
  content: any;

  async openFile(file: any) {
    this.content = await this.fs.readFile(file.name)
  }
}
