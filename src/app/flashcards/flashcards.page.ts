import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CreateFlashcardCardComponent } from './components/create-flashcard-card/create-flashcard-card.component';

@Component({
  selector: 'app-language',
  templateUrl: './flashcards.page.html',
  styleUrls: ['./flashcards.page.scss'],
})
export class FlashcardsPage implements OnInit {
  routeName: string;

  constructor(private router: Router, private modalController: ModalController) { }

  ngOnInit() {
    this.routeName = this.router.url;
  }

  async showCreateModal(){
    const modal = await this.modalController.create({
      component: CreateFlashcardCardComponent
    });

    await modal.present();
  }

}
