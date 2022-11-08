import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {
  showVerifyButton:boolean = false;
  titlePage="Request Edit";
  req: Request = new Request;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save():void{
    this.reqsvc.change(this.req).subscribe({
      next:(res) => {
        console.debug("Request Changed")
        this.router.navigateByUrl("/Requests")
      },
      error:(err)=>{
        console.error(err);
      }
    })
  }
  ngOnInit(): void {
  }

}
