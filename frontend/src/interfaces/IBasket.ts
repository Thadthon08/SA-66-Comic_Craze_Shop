import { MemberInterface } from "./IMember";
import { ComicsInterface } from "./IComics";

export interface BasketInterface {
  ID?: number;
  Total?: number;

  Member_id?: number;
  Member?: MemberInterface;

  ComicID?: number;
  Comic?: ComicsInterface;
}
