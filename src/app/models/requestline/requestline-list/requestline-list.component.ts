import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request/request.service';
import { RequestlineService } from '../requestline.service';
import { Request } from '../../request/request.class';
import { Requestline } from '../requestline.class';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-requestline-list',
  templateUrl: './requestline-list.component.html',
  styleUrls: ['./requestline-list.component.css']
})
export class RequestlineListComponent implements OnInit {

  pageTitle:string="Request Lines"
  reqlines: Requestline[] = [];
  req!: Request;
  constructor(
    private reqlsvc:RequestlineService,
    private reqsvc:RequestService,
    private prodsvc:ProductService,
  ) { }

  ngOnInit(): void {
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
