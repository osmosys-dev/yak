import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Flashcard } from 'src/app/model/flashcard';
import { EditFlashcardCardComponent } from '../edit-flashcard-card/edit-flashcard-card.component';


@Component({
  selector: 'flashcard-card',
  templateUrl: './flashcard-card.component.html',
  styleUrls: ['./flashcard-card.component.scss'],
})
export class FlashcardCardComponent implements OnInit {

  @Input()
  flashcards: Flashcard[];
  constructor(private modalController: ModalController) { }

  async showEditModal() {
    const modal = await this.modalController.create({
      component: EditFlashcardCardComponent
    });
    await modal.present();
  }
  ngOnInit() {}

}
