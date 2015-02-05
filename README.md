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

## Naming
* Module - camelcase, starts from lowercase letter. Split parent modules by dot.
`phonebook`, `phonebook.editItem`, `phonebook.editItem`
* Controller - camelcase, starts from uppercase letter (the same for using in module name). Ends with "Ctrl".
`EditItemCtrl`, but the module name for this contoller should be `phonebook.editItem.EditItemCtrl`
* Service - the same, but ends with "Service", "Provider", "Factory", "Constants" or "Values" depends on service type.
`StorageProvider` (and `phonebook.storage.StorageProvider` for module name)
* Directive - as previous, but ends with "Directive".
`PhoneLinkDirective` (and `phonebook.editItem.PhoneLinkDirective` for module name)
* Partials - camlcase, starts from lowercase and '.html' as extension
