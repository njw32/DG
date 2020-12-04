import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewDiscPage } from './new-disc.page';

describe('NewDiscPage', () => {
  let component: NewDiscPage;
  let fixture: ComponentFixture<NewDiscPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDiscPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewDiscPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
