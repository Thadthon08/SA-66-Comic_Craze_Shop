import { CategoryInterface } from "./ICategory";
import { AdminInterface } from "./IAdmin";

export interface ComicInterface {
  ID?: number,
  Image?: string,
  Titel?: string,
  Description?: string,
  Link?: string,
  Price?: number,

  Category_id?: number,
  Category?: CategoryInterface,
  
  Admin_id ?: number,
  Admin?: AdminInterface,
}
