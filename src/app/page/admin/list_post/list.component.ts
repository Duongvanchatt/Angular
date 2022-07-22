import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/moldel/post';
import { PostService } from 'src/app/service/post.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  postList! : IPost[];
  constructor(private postService: PostService) { 
    
  }

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts() {
    this.postService.getPosts().subscribe(data => {
      this.postList = data;
      console.log(data);
      
    })
  }
  onHandleRemove(id: number) {
    this.postService.removePost(id).subscribe(() => {
      this.postList = this.postList.filter(item => item.id !== id);
    })
  }

}
