import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-language-card',
  templateUrl: './edit-flashcard-card.component.html',
  styleUrls: ['./edit-flashcard-card.component.scss'],
})
export class EditFlashcardCardComponent implements OnInit {

  textLabel: string;
  category = 'conversation';

  constructor(private modalController: ModalController, private alertController: AlertController) { }

  ngOnInit() {
    this.switchTextLabel(this.category);
  }

  closeModal(){
    this.modalController.dismiss();
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      message: 'Are you sure you want to delete this flashcard?',
      buttons: ['Yes', 'No']
    });

    await alert.present();
  }

  onChange(selectedValue: string){
    this.category = selectedValue;
    this.switchTextLabel(selectedValue);
  }

  switchTextLabel(key){
    switch (key) {
      case 'conversation':
        this.textLabel = 'Sentence';
        break;
      case 'vocabulary':
        this.textLabel = 'Word';
        break;
      case 'verb':
        this.textLabel = 'Verb';
        break;
    }
  }
}
