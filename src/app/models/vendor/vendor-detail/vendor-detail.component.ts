import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  showVerifyButton:boolean = false;
  titlePage="Vendor Detail"
  vend!:Vendor;
  constructor(
    private vendsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  warning():void{
    this.showVerifyButton = !this.showVerifyButton
  }




  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.vendsvc.get(id).subscribe({
      next:(res)=>{
        console.log("Employee:",res)
        this.vend = res
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
}
