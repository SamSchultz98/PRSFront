import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product/product.service';
import { RequestService } from '../../request/request.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';
import { Request } from '../../request/request.class';

@Component({
  selector: 'app-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {

  pageTitle:string="Request Lines"
  reqlines: Requestline[] = [];
  req!: Request;
  reql!:Requestline;

  constructor(
    private reqlsvc:RequestlineService,
    private reqsvc:RequestService,
    private prodsvc:ProductService,
    private route: ActivatedRoute,
  ) { }

    accept():void{
      this.req.status = "APPROVED"
      this.reqsvc.change(this.req).subscribe({
        next:(res)=>{
          console.log(res)
          this.refresh()
        },
        error:(err)=>{
          console.error(err)
        }
      })
    }

    refresh(): void{
      let reqid = +this.route.snapshot.params["id"];
    this.reqsvc.get(reqid).subscribe({
      next:(res)=>{
        console.log(res)
        this.req = res
      },
      error:(err)=>{
        console.error(err)
      }
    })
    this.reqlsvc.list().subscribe({
      next: (res) => {
        console.log("Requestlines:",res)
        this.reqlines = res;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

  ngOnInit(): void {
    let reqid = +this.route.snapshot.params["id"];
    this.reqsvc.get(reqid).subscribe({
      next:(res)=>{
        console.log(res)
        this.req = res
      },
      error:(err)=>{
        console.error(err)
      }
    })
    this.reqlsvc.list().subscribe({
      next: (res) => {
        console.log("Requestlines:",res)
        this.reqlines = res;
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}
