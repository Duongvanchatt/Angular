import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/moldel/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  postList! : IPost[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.showProducts();
  }
  showProducts() {
    this.postService.getPosts().subscribe(data => {
      this.postList = data;
      console.log(data);
      
    })
  }

}
