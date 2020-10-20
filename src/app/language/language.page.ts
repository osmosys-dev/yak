import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  category: string;
  routeName: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.category = 'conversation';
    this.routeName = this.router.url;
  }


}
