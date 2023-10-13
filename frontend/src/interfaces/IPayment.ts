import { BasketInterface } from "./IBasket";
import {StatusInterface} from './IStatus'

export interface PaymentInterface {
  ID?: number;
  Image: string;
  Date?: Date | null;

  Basket_id?: number;
  Basket?: BasketInterface;

  Status_id?: number;
  Status?: StatusInterface;
}
