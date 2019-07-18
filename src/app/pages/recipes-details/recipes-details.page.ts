import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router} from '@angular/router'
import {RecipesService , Recipe} from 'src/app/services/recipes.service'
import {ToastController} from '@ionic/angular'
@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.page.html',
  styleUrls: ['./recipes-details.page.scss'],
})
export class RecipesDetailsPage implements OnInit {

  recipe: Recipe= {
    name: '',
    notes: ''
  }

  constructor(private activatedRoute: ActivatedRoute , private recipeService: RecipesService,
    private toastCtrl: ToastController , private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
    let id = this.activatedRoute.snapshot.paramMap.get('id')
    if(id){
      this.recipeService.getRecipe(id).subscribe(recipe => {
        this.recipe = recipe
      })
    }
  }

  addRecipe(){
    this.recipeService.addRecipe(this.recipe)
    .then(() => {
      this.router.navigateByUrl('/')
      this.showToast('Recipe added')
    }, err => {
      this.showToast('There was a problem adding your recipe :(')
    })
  }

  deleteRecipe(){
    this.recipeService.deleteRecipe(this.recipe.id)
    .then(() => {
      this.router.navigateByUrl('/')
      this.showToast('recipe deleted')
    }, err => {
      this.showToast('There was a problem deleting your recipe')
    })
  }

  updateRecipe(){
    this.recipeService.updateRecipe(this.recipe)
    .then(() => {
      this.showToast('Recipe updated')
    }, err => {
      this.showToast('There was a problem updating your recipes :(')
    })
  }

  showToast(msg){
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    })
    .then(toast => toast.present())
  }

}
