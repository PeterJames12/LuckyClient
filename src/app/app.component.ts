import {Component, ViewContainerRef} from '@angular/core';
import {ToastsManager} from 'ng2-toastr';
import {CacheService} from 'ionic-cache/src/cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(public toastr: ToastsManager,
              vRef: ViewContainerRef,
              public cache: CacheService) {
    this.toastr.setRootViewContainerRef(vRef);
    this.cache.setDefaultTTL(60 * 60);
  }
}
