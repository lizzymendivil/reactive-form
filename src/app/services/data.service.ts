import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Contact } from '../modelds/contact';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private contactCollection:  AngularFirestoreCollection<Contact>;

  constructor(private afs:  AngularFirestore) { 
    this.contactCollection = this.afs.collection<Contact>('contacts');
  }

  save(newContact: Contact) {
    this.contactCollection.add(newContact);
  }
}
