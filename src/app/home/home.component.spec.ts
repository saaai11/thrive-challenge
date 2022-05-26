import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Info } from '../futuruma.interface';
import { FuturumaService } from '../services/futuruma.service';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let futurumaService: FuturumaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [HttpClientModule],
      providers: [FuturumaService],
    }).compileComponents();
    futurumaService = TestBed.get(FuturumaService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    let info: Info[] = [
      {
        creators: [
          { name: 'David X. Cohen', url: 'http://www.imdb.com/name/nm0169326' },
          { name: 'Matt Groening', url: 'http://www.imdb.com/name/nm0004981' },
        ],
        id: 1,
        synopsis:
          'Philip J. Fry is a 25 year old delivery boy living in New York City',
        yearsAired: '1999-2013',
      },
    ];
    component.info$ = of(info);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check is info is available and updating', () => {
    const element =
      fixture.debugElement.nativeElement.querySelector('.synopsis');
    expect(element.textContent).toContain('Synopsis :');
  });
  it('should check is synopsis is available and updating', () => {
    const element =
      fixture.debugElement.nativeElement.querySelector('.synopsis-info');
    expect(element.textContent).not.toBeNull();
  });
  it('should check is yearsAired is showing up', () => {
    const element = fixture.debugElement.nativeElement.querySelector('.years');
    expect(element.textContent).not.toBeNull();
  });

  it('should check is yearsAired is showing showing correct data', () => {
    const element = fixture.debugElement.nativeElement.querySelector('.years');

    expect(element.textContent).not.toBeNull();
  });
});
