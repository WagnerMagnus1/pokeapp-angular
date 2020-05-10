import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDontFindComponent } from './page-dont-find.component';

describe('PageDontFindComponent', () => {
  let component: PageDontFindComponent;
  let fixture: ComponentFixture<PageDontFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDontFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDontFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
