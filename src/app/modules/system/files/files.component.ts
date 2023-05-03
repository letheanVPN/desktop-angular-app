import {Component, OnInit, ViewChild} from '@angular/core';
import {FileSystemService} from "@service/filesystem/file-system.service";
import {TreeComponent} from "@circlon/angular-tree-component";

@Component({
  selector: 'lthn-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
  public fileTree;
  public nodes: any = [];
  @ViewChild(TreeComponent)
  private tree: TreeComponent;
  constructor(private fs: FileSystemService) {
  }

  async ngOnInit() {
    this.fileTree = await this.fs.listFilesDetailed('.')
    this.fileTree.forEach((v) => {
        this.nodes.push({name: v.name, hasChildren: v.isDirectory})
    })
    this.tree.treeModel.update();
    console.log(this.fileTree)
  }

}
