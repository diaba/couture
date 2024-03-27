import { Injectable } from '@angular/core';
import { Model } from './Model';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
 readonly baseUrl = "";

  protected model: Model[] = []

  constructor() { }
}
