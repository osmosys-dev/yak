import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Language } from 'src/app/model/language';
import { EditLanguageCardComponent } from '../edit-language-card/edit-language-card.component';


@Component({
  selector: 'language-card',
  templateUrl: './language-card.component.html',
  styleUrls: ['./language-card.component.scss'],
})
export class LanguageCardComponent implements OnInit {

  @Input()
  languages: Language[];
  constructor(private modalController: ModalController) { }

  async showEditModal() {
    const modal = await this.modalController.create({
      component: EditLanguageCardComponent
    });
    await modal.present();
  }
  ngOnInit() {}

}
