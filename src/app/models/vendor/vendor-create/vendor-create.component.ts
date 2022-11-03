import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

pageTitle:string="Create Vendor"
vend: Vendor = new Vendor();



  save():void{
    this.vendsvc.create(this.vend).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl("/Vendors")
      },
      error: (err) => {
        console.debug(err);
      }
    })
  }

  constructor(
    private vendsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

}
