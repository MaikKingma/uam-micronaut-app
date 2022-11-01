import {ComponentFixture, TestBed} from '@angular/core/testing';

import {OidcDisplayComponent} from './oidc-display.component';

describe('OidcDisplayComponent', () => {
  let component: OidcDisplayComponent;
  let fixture: ComponentFixture<OidcDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OidcDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OidcDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
