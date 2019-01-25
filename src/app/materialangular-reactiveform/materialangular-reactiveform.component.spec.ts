import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialangularReactiveformComponent } from './materialangular-reactiveform.component';

describe('MaterialangularReactiveformComponent', () => {
  let component: MaterialangularReactiveformComponent;
  let fixture: ComponentFixture<MaterialangularReactiveformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialangularReactiveformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialangularReactiveformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
