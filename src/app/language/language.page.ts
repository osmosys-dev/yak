import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateLanguageCardComponent } from './components/create-language-card/create-language-card.component';

@Component({
  selector: 'app-language',
  templateUrl: './language.page.html',
  styleUrls: ['./language.page.scss'],
})
export class LanguagePage implements OnInit {
  category: string;
  routeName: string;

  constructor(private router: Router, private modalController: ModalController) { }

  ngOnInit() {
    this.category = 'conversation';
    this.routeName = this.router.url;
  }

  async showCreateModal(){
    const modal = await this.modalController.create({
      component: CreateLanguageCardComponent
    });

    await modal.present();
  }

}
