import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute, Router} from "@angular/router";
import {FileSystemService} from "@service/filesystem/file-system.service";

@Component({
  selector: 'lthn-files-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{

  file: string = '';

  mode: string = 'markdown';

  constructor(private route: ActivatedRoute, private location: Location, private fs: FileSystemService){
    this.file = this.route.snapshot.queryParamMap.has('file')? this.route.snapshot.queryParamMap.get('file') : '';
  }
  content: any;

  async ngOnInit() {
    if (this.file) {
      console.log(this.file, await this.fs.readFile(this.file))
      this.mode = 'javascript'
      this.content = await this.fs.readFile(this.file)
      this.editorOptions(this.file);
    }
  }

  back(): void {
    this.location.back()
  }

  editorOptions(file: string){

    if(file.endsWith('.js') || file.endsWith('.json')){
      this.mode = 'javascript'
    }else if(file.endsWith('.md')){
      this.mode = 'markdown'
    }else if(file.endsWith('.ini')){
      this.mode = 'properties'
    }else if(file.endsWith('.html')){
      this.mode = 'htmlmixed'
    }else if(file.endsWith('.css')){
      this.mode = 'css'
    }else if(file.endsWith('.scss')){
      this.mode = 'sass'
    }else if(file.endsWith('.sh') || file.endsWith('.bash')){
      this.mode = 'shell'
    }else if(file.endsWith('.key') || file.endsWith('.rev')|| file.endsWith('.pub') || file.endsWith('.lthn')) {
      this.mode = 'asciiarmor'
    }
  }
}
