import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSkusComponent } from './list-skus.component';

describe('ListSkusComponent', () => {
  let component: ListSkusComponent;
  let fixture: ComponentFixture<ListSkusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSkusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSkusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
