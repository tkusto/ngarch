# Phonebook
This small app created only for proof-of-concept another kind of AngularJS app architecture.

## How to working with
first of all, you need to install dependencies:
`npm install`
### Development environment
then start a development server:
`grunt dev`
### "Production" build
`grunt` *(doesn't start a server)*

## Architecture
### Directory structure
The root directorty of app is src
* phonebook/
	* editItem/
		* controllers/
			* EditItemCtrl.js *(ng module "phonebook.editItem.EditItemCtrl")*
			* index.js *(ng module "phonebook.editItem.controllers")*
		* partials/
			* addItem.html
			* editItem.html
		* editItem.js *(ng module "phonebook.editItem", requires childs, load templates)*
		* editItem.less *(entry point of styles for module, wrapped with `.module-editItem`)*
		* package.json *(points to "editItem.js")*
	* itemList/
		* controllers/
			* ItemListCtrl.js
			* index.js
		* partials/
			* itemList.html
		* itemList.js
		* itemList.less
		* package.json
	* storage/
		* services/
			* StorageProvider.js
			* index.js
		* storage.js
		* storage.less
		* package.json
	* phonebook.js *(ng module "phonebook", requires child modules)*
	* phonebook.less *(includes main .less files of child modules)*
	* package.json
* index.html
* main.js *(entry point for scripts)*
* main.less *(entry point for styles)*
