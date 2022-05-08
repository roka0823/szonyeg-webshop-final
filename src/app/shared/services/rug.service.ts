import { Injectable } from '@angular/core';
import { AngularFirestore} from "@angular/fire/compat/firestore";
import { Rug } from "../model/Rug";
import { DefaultRugs } from "../model/Rug";

@Injectable({
  providedIn: 'root'
})
export class RugService {
  collectionName = 'Rugs';

  constructor(private afs: AngularFirestore) { }

  create(rug: Rug) {
    return this.afs.collection<Rug>(this.collectionName).doc(rug.id).set(rug);
  }

  createDefaultRugs() {
    for (const rug of DefaultRugs) {
      rug.id = this.afs.createId();
      this.create(rug);
    }
  }

  getAll() {
    return this.afs.collection<Rug>(this.collectionName).valueChanges();
  }

  getById(id: string) {
    return this.afs.collection<Rug>(this.collectionName).doc(id).valueChanges();
  }

  update(rug: Rug) {
    return this.afs.collection<Rug>(this.collectionName).doc(rug.id).set(rug);
  }

  delete(id: string) {
    return this.afs.collection<Rug>(this.collectionName).doc(id).delete();
  }
}
