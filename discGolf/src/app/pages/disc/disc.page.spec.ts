import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DiscPage } from './disc.page';

describe('DiscPage', () => {
  let component: DiscPage;
  let fixture: ComponentFixture<DiscPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DiscPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
