import { Component, OnInit } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.page.html',
  styleUrls: ['./recipes-list.page.scss'],
})
export class RecipesListPage implements OnInit {

  constructor(private firestore: AngularFirestore) { }

  ngOnInit() {

    this.onReadRecipes().subscribe(data => {
      data.map(res => {
        console.log(res.payload.doc.data()['content']);
        
      });
    });

  }

  onReadRecipes() {
    return this.firestore.collection('recipes').snapshotChanges();
  }

}


//Read base64 string
/*
images:any[] = [];
  constructor(private firestore: AngularFirestore) { }
  
  ngOnInit() {

    this.onReadRecipes().subscribe(data => {
      data.map(res => {
        this.images.push(res.payload.doc.data()['recipeImage']);
        //console.log(res.payload.doc.data()['content']);
      });
    });

  }

  onReadRecipes() {
    return this.firestore.collection('recipes').snapshotChanges();
  }

*/
