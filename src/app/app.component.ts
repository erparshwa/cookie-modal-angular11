import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { AppService } from './app.service';
import { SpModalComponent } from './components/sp-modal/sp-modal.component';
import { CookieCategory } from './models/cookie-category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  title = 'secure-privacy';
  cookieCategoryApiHandler: Subscription;
  cookieCategories: CookieCategory[];

  @ViewChild('cookieModal')
  cookieModal!: SpModalComponent;

  constructor(private appService: AppService, private activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.cookieCategoryApiHandler = this.appService.getCookieBanner()
      .subscribe((data: CookieCategory[]) => {
        this.cookieCategories = data;
        console.log(this.cookieCategories);
      });
  }

  ngAfterViewInit() {
    this.openCookieModal();
  }

  openCookieModal() {
    this.cookieModal.open();
  }

  onAccept() {
    console.log("Accpeted");
    this.cookieModal.dismiss();
  }

  onCategoryBlockingChange(category: CookieCategory) {
    category.PluginList.map(p => p.BlockingEnabled = category.IsMandatory);
  }

  onPluginBlockingChange(category: CookieCategory) {
    category.IsMandatory = category.PluginList.some(p => p.BlockingEnabled);
  }

  ngOnDestroy() {
    this.cookieCategoryApiHandler.unsubscribe();
  }
}
