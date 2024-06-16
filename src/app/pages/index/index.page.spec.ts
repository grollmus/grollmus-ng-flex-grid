import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndexPage, LinkStyleDirective } from './index.page';
import { RouterModule } from '@angular/router';

describe('IndexPage', () => {
  let component: IndexPage;
  let fixture: ComponentFixture<IndexPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndexPage, LinkStyleDirective, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(IndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
