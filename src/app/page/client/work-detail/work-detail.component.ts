import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/moldel/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-work-detail',
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.css']
})
export class WorkDetailComponent implements OnInit {
// @Input() product!: IProduct
post!: IPost
constructor(
  private router: ActivatedRoute,
  private postService: PostService
) {
  const id = this.router.snapshot.paramMap.get('id');
  // this.product = this.productService.getProduct(id)!;
  this.postService.getPost(id).subscribe((data) => {
    this.post = data
  })
}
  ngOnInit(): void {
  }
}
