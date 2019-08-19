import { Directive, ElementRef } from '@angular/core';
import { QuoteComponent } from './quote/quote.component';
import { Quote } from './quote';


@Directive({
  selector: '[appTopQuote]'
})
export class TopQuoteDirective {

  constructor() {
    
   }

}
