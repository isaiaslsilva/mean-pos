import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdSearchBarComponent } from './fd-search-bar.component';

describe('FdSearchBarComponent', () => {
  let component: FdSearchBarComponent;
  let fixture: ComponentFixture<FdSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
