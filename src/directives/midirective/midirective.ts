import { Directive } from '@angular/core';

/**
 * Generated class for the MidirectiveDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[midirective]' // Attribute selector
})
export class MidirectiveDirective {

  constructor() {
    console.log('Hello MidirectiveDirective Directive');
  }

}
