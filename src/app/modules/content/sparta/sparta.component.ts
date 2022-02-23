import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'lthn-app-sparta',
  templateUrl: './sparta.component.html',
  styleUrls: ['./sparta.component.scss']
})
export class SpartaComponent implements OnInit {
  public fetchedHtml: any;
  id: string
  slug: string
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.slug = this.route.snapshot.paramMap.get('slug')
console.log('d')
    this.loadPost(this.slug, this.id)

  }

  loadPost(slug, id){
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    const requestOptions: Object = {
      headers: headers,
      responseType: 'text'
    }
    this.http.get<string>(`https://sparta.lt.hn/t/${slug}/${id}`, requestOptions).subscribe((data: any) => {
      this.fetchedHtml = data
    });
  }

}
