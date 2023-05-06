import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FileSystemService} from "@service/filesystem/file-system.service";

@Component({
  selector: 'lthn-files-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{

  file: string = '';

  mode: string = 'markdown';

  constructor(private route: ActivatedRoute, private fs: FileSystemService){
    this.file = this.route.snapshot.queryParamMap.has('file')? this.route.snapshot.queryParamMap.get('file') : '';
  }
  content: any;

  async ngOnInit() {
    if (this.file) {
      console.log(this.file, await this.fs.readFile(this.file))
      this.mode = 'javascript'
      this.content = await this.fs.readFile(this.file)
    }
  }

  editorOptions(file: string){

    if(file.endsWith('.js') || file.endsWith('.json')){
      this.mode = 'javascript'
    }else if(file.endsWith('.md')){
      this.mode = 'markdown'

    }

  }
}
