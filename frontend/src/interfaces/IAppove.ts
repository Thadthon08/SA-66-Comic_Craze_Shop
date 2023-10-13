import {AdminInterface} from './IAdmin'
import {PaymentInterface} from './IPayment'
import {StatusInterface} from './IStatus'

export interface AppoveInterface {
    ID ?: number,
    Note ?: string,

    Admin_id ?: number,
    Admin?: AdminInterface,

    Payment_id ?: number,
    Payment?: PaymentInterface,

    Status_id ?: number,
    Status ?: StatusInterface

}