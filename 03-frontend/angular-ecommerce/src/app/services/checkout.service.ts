import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Purchase } from '../common/purchase';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaymentInfo } from '../common/payment-info';


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private purchaseUrl = environment.luv2ShopApiUrl + '/checkout/purchase';

  private paymentIntentUrl = environment.luv2ShopApiUrl + '/checkout/payment-intent';

  constructor(private httpClient: HttpClient) { }

  placeOrder(purhcase: Purchase): Observable<any> {
    return this.httpClient.post<Purchase>(this.purchaseUrl, purhcase);
  }

  createPaymentIntent(PaymentInfo: PaymentInfo): Observable<any> {
    return this.httpClient.post<PaymentInfo>(this.paymentIntentUrl, PaymentInfo);
  }
  
}
