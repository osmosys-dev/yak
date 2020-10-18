import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LanguagesHomePage } from './languages-home.page';

describe('LanguagesHomePage', () => {
  let component: LanguagesHomePage;
  let fixture: ComponentFixture<LanguagesHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguagesHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LanguagesHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
