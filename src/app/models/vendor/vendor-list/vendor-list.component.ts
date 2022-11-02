import { Component, OnInit } from '@angular/core';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  pageTitle:string="Employee List"
  vends: Vendor[] = [];


  constructor(
    private vendsvc: VendorService
  ) { }

  ngOnInit(): void {
  }

}
