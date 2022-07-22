import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/moldel/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  componentName: string = "Hi, I am Chat,Website Developer";
  componentDes: string = "Currently, I'm a student at FPT College, majoring in Font-end website design, consequatur quasi!"
  
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
