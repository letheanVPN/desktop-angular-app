import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
	selector: 'lthn-app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
	public posts:any;
	private sub;

	constructor(private http: HttpClient) {}

	ngOnInit(): void {

		this.sub = this.getLatestPosts()
			.subscribe((data: any) => this.posts = data);
	}


	getLatestPosts() {
		return this.http.get<any>("https://sparta.lt.hn/latest.json");
	}

	loadPost(slug, id){
		this.http.get<any>(`https://sparta.lt.hn/${slug}/${id}.json`).subscribe((data: any) => {
			this.posts = data
		});
	}

	public ngOnDestroy(): void {
		this.sub.unsubscribe();
	}
}
