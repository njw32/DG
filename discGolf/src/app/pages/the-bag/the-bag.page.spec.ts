import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheBagPage } from './the-bag.page';

describe('TheBagPage', () => {
  let component: TheBagPage;
  let fixture: ComponentFixture<TheBagPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheBagPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheBagPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
