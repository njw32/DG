import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CourseRoundInfoPage } from './course-round-info.page';

describe('CourseRoundInfoPage', () => {
  let component: CourseRoundInfoPage;
  let fixture: ComponentFixture<CourseRoundInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseRoundInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseRoundInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
