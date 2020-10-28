import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  category = 'verb';
  tense = 'present';

  presentMasculine = ['jem', 'jesz', 'je', 'jemy', 'jecie', 'jedzą'];
  presentFeminine = [];
  pastMasculine = ['jadłem', 'jadłeś', 'jadł', 'jedliśmy', 'jedliście', 'jedli'];
  pastFeminine = ['jadłam', 'jadłaś', 'jadła', 'jadłyśmy', 'jadłyście', 'jadły'];
  futureMasculine = ['będę jadł', 'będziesz jadł', 'będzie jadł', 'będziemy jedli', 'będziecie jedli', 'będą jedli'];
  futureFeminine = ['będę jadła', 'będziesz jadła', 'będzie jadła', 'będziemy jadły', 'będziecie jadły', 'będą jadły'];

  present = ['Ja', 'Ty', 'On/Ona/Ono', 'My', 'Wy', 'Oni/One'];
  masculine = ['Ja', 'Ty', 'On', 'My', 'Wy', 'Oni'];
  feminine = ['Ja', 'Ty', 'Ona', 'My', 'Wy', 'One'];
  constructor() { }

  ngOnInit() {
  }

}
