import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from 'src/app/moldel/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  post: IPost = {
    name: "",
    title: "",
    image: ""
  }
  constructor(
   private postService: PostService,
   private router: Router,
   private activeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if (id) {
      // nếu có id thì call service get product để lấy thông tin trả về form
      this.postService.getPost(id).subscribe(data => this.post = data);
    }
  }
    onSubmit() {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    if (id) {
      this.postService.updatePost(this.post).subscribe(data => console.log(data));
      this.router.navigateByUrl('/admin/listpost');
      alert("sua thanh cong");
    } else {
      // call service add product
      this.postService.addPost(this.post).subscribe(data => {
        // chuyển hướng router
        alert("them thanh cong");
        this.router.navigateByUrl('/admin/listpost');
      })
    }
  }
}
