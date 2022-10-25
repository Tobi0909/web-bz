import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  toBlog() {
    document.getElementById("blog").scrollIntoView({behavior:"smooth"});
  }
  toContact() {
    document.getElementById("contact").scrollIntoView({behavior:"smooth"});
  }
  toAboutus() {
    document.getElementById("aboutus").scrollIntoView({behavior:"smooth"});
  }
  toLogin() {
    document.getElementById("login").scrollIntoView({behavior:"smooth"});
  }
  toSignup() {
    document.getElementById("signup").scrollIntoView({behavior:"smooth"});
  }
  toProduct() {
    document.getElementById("product").scrollIntoView({behavior:"smooth"});
  }

}
