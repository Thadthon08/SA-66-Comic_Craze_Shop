import { MemberInterface } from "./IMember";
import {ComicInterface} from "./IComic";

export interface BasketInterface {
  ID?: number,
  Total?: number,

  Member_id?: number
  Member?: MemberInterface

  Comic_id?: number
  Comic ?: ComicInterface
}