import { Component, OnInit, Injectable } from '@angular/core'; // Component以外は追加
import { HttpClient } from '@angular/common/http'; // 追加
import { Observable, of, Subject } from 'rxjs'; // 追加

// 追加
@Injectable({
  providedIn: 'root',
})

// 追加
class ApiData {
  data: any;
}


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  posts: any = [];
  testData: any = new Subject();

  constructor(private http: HttpClient){}

  ngOnInit() {
    this.getPostData();
    setInterval(() => this.getPostData(), 5000);
  }

  getPostData() {
    this.http.get("http://localhost:3000/api/v1/posts")
    .subscribe((result: ApiData) => {
      this.posts = result.data;
      console.log(this.posts);
    });
  }
  
}
