import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendSelectiveMessageStudentsPage } from './send-selective-message-students.page';

describe('SendSelectiveMessageStudentsPage', () => {
  let component: SendSelectiveMessageStudentsPage;
  let fixture: ComponentFixture<SendSelectiveMessageStudentsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SendSelectiveMessageStudentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendSelectiveMessageStudentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
