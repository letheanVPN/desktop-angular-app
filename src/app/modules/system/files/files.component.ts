import {Component, OnInit, ViewChild} from '@angular/core';
import {FileSystemService} from "@service/filesystem/file-system.service";
import {MultidimensionalArray} from "@ui/@theme/components/tree-menu/tree-menu.component";

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
  constructor(private fs: FileSystemService) {
  }

  async ngOnInit() {
    this.fileTree = await this.fs.listFilesDetailed('.')
    for (const v of this.fileTree) {
      if(v.isDirectory){
        let childFileTree = await this.fs.listFilesDetailed(v.name)
        childFileTree.forEach((v) => {
            if(v.isDirectory){
                this.nodes.push({title: v.name, icon: 'folder-outline', children: [{title: 'Loading...', icon: 'loader-outline'}]})
            }else{
                this.nodes.push({title: v.name, icon: 'file-outline'})
            }
        })
        this.nodes.push({title: v.name, icon: 'folder-outline', children: [childFileTree]})
      }else{
        this.nodes.push({title: v.name, icon: 'file-outline'})
      }
    }

  }
  content: any;

  async openFile(file: any) {
    this.content = await this.fs.readFile(file.name)
  }
}
