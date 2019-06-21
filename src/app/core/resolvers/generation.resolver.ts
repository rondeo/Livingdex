import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Injectable()
export class GenerationResolver implements Resolve<any> {

  constructor(public firebaseService: FirebaseService) { }

  resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
      const id = route.paramMap.get('id');
      this.firebaseService.getGenerationResolver(id)
      .subscribe(
        data => {
          resolve(data);
        }
      );
    });
  }
}
