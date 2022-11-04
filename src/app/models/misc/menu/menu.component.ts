import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/common/system.service';
import { User } from '../../user/user.class';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user:User = this.syssvc.user;
  
  menus: Menu[] = [
    new Menu("Home","/home"),
    new Menu("Products","/Products"),
    new Menu("Vendors","/Vendors"),
    new Menu("Users","/Users"),
    new Menu("Requests","/Requests"),
    new Menu("Reviews","/review"),
    new Menu("About","/about"),
  ]

  constructor(
    private syssvc: SystemService
  ) { }

  ngOnInit(): void {
  }

}
