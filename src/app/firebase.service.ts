import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }

  createTask(value){
    return new Promise<any>((resolve , reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('chefs')
      .doc(currentUser.uid)
      .collection('recipes')
      .add({
        title: value.title,
        description: value.description,
        image: value.image
      })
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
  encodeImageUri(imageUri , callback){
    let storageRef = firebase.storage().ref()
    let imageRef = storageRef.child('image').child('imageName')

    let c = document.createElement('canvas')
    let ctx = c.getContext("2d")
    let img = new Image()
    img.onload = () =>{
      let aux:any = this 
      c.width = aux.width;
      c.height = aux.height;
      ctx.drawImage(img , 0 , 0)
      let dataURL = c.toDataURL("image/jpeg")
      callback(dataURL)
    }
    img.src = imageUri
  }

  uploadImage(imageURI , randomId){
    return new Promise<any>((resolve , reject) => {
      let storageRef = firebase.storage().ref()
      let imageRef = storageRef.child('image').child(randomId);

      this.encodeImageUri(imageURI , function(image64){
        imageRef.putString(image64 , 'data_url')
        .then(snapshot => {
          snapshot.ref.getDownloadURL()
          .then(res => resolve(res))
        }, err => [
          reject(err)
        ])
        
      })
    })
  }

  getTasks(){
    return new Promise<any>((resolve , reject) => {
      this.afAuth.user.subscribe(currentUser => {
        if(currentUser){
          this.snapshotChangesSubscription = this.afs.collection('chefs').doc(currentUser.uid)
          .collection('recipes')
          .snapshotChanges()

          resolve(this.snapshotChangesSubscription)
        }
      })
    })
  }

  updateRecipes(recipeKey , value){
    return new Promise<any>((resolve , reject) => {
      let currentUser = firebase.auth().currentUser
      this.afs.collection('chefs')
      .doc(currentUser.uid)
      .collection('recipes')
      .doc(recipeKey).set(value)
      .then(
        res => resolve(res),
        err => reject(err)
      )

    })
  }

  deleteRecipes(recipeKey){
    return new Promise<any>((resolve , reject) => {
      let currentUser = firebase.auth().currentUser
      this.afs.collection('chefs')
      .doc(currentUser.uid)
      .collection('recipes')
      .doc(recipeKey)
      .delete()
      .then(
        res => resolve(res),
        err => reject(err)
      )
    })
  }
}
