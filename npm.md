# Modularity in Node.js - npm (Node package manager)

Like Java, Ubuntu, and Ruby have Maven, apt-get, and Gem respectively, Node does have its module manager --- npm.

## Getting Started

These tutorials explain how to create and manage packaged module, which can be seen in *"[building the **web of things**](https://webofthings.org/book/)"* by Dominique D. Guinard and Vlad M. Trifa.

### Basic Term Description

**Patterns of modules** : *MAJOR.MINOR.PATCH*
* _**MAJOR**_ - When making incompatible API changes
* _**MINOR**_ - When adding functionality
* _**PATCH**_ - When making bug fixes

### Module file management

Begin creating a folder for the project called _**modules**_. Generally, there exist 3 files in the folder _**modules**_: _**package.json**_, _**module-clinet.js**_, and a folder called _**lib**_.
* **package.json** specify the module with "name", "version", "description", "dependencies", "engine", and so on.
* **module-clinet.js** shows importing the new module by `require`.
* **lib** contains the module. In the module, **lib/module.js**, the `exports` object makes the function available to the module users. While others won't be available to others.  



