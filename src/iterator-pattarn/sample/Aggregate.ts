import {Iterator} from "./Iterator";

export abstract class Aggregate {
    abstract iterator():Iterator;
}