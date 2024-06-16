import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexPage } from './flex.page';

describe('FlexPage', () => {
  let component: FlexPage;
  let fixture: ComponentFixture<FlexPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FlexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
