

STYLES METODOLOGY SUITCSS



# COMAND LINE

Inicializar un proyecto de node
npm init

SASS
npm install -g sass
SCRIPT: "run-sass": "sass --watch ./src/scss:./dist/css"


Babel
npm install --save-dev @babel/core @babel/cli @babel/preset-env
SCRIPT: "run-babel": "babel ./src/js -d ./dist/js"


#
#
#
COMIENZA AQUI
# Interactive Rating Component

- [About the project](#about-the-project)
- [Architectures](#architectures)
  - [ITCSS](#itcss)
- [Metodologies](#metodologies)
  - [SUITCSS](#suitcss)
- [Tools](#tools)


## About the project

* This is a nice, small project to practice handling user interactions and updating the DOM. It is a simple project to implement the new technologies that I am learning in a single project.

- [x] SASS
- [x] Babel
- [x] Jsdoc
- [x] Figma
- [x] SuitCSS
- [x] ITCSS


<div align="center">

#

[![My Skills](https://skillicons.dev/icons?i=html,css,sass,js,figma)](https://skillicons.dev)
#

<img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/nikolaiKoz/FrontendMentor_Interactive_Rating_Component.github.io" />
<img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/nikolaiKoz/FrontendMentor_Interactive_Rating_Component.github.io" />
<img alt="" src="https://img.shields.io/github/repo-size/nikolaiKoz/FrontendMentor_Interactive_Rating_Component.github.io" />
<img alt="GitHub Issues" src="https://img.shields.io/github/issues/nikolaiKoz/FrontendMentor_Interactive_Rating_Component.github.io" />
<img alt="GitHub Closed Issues" src="https://img.shields.io/github/issues-closed/nikolaiKoz/FrontendMentor_Interactive_Rating_Component.github.io" />
<img alt="GitHub Pull Requests" src="https://img.shields.io/github/issues-pr/nikolaiKoz/FrontendMentor_Interactive_Rating_Component.github.io" />
<img alt="GitHub Closed Pull Requests" src="https://img.shields.io/github/issues-pr-closed/nikolaiKoz/FrontendMentor_Interactive_Rating_Component.github.io" />
<img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/nikolaiKoz/FrontendMentor_Interactive_Rating_Component.github.io" />
<img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/nikolaiKoz/FrontendMentor_Interactive_Rating_Component.github.io" />
<img alt="GitHub Commit Activity (Week)" src="https://img.shields.io/github/commit-activity/w/nikolaiKoz/FrontendMentor_Interactive_Rating_Component.github.io" />
<img alt="Github License" src="https://img.shields.io/github/license/nikolaiKoz/FrontendMentor_Interactive_Rating_Component.github.io" />

</div>

#

## Architectures

### ITCSS

* **ITCSS** (Inverted Triangle CSS) is a methodology for organizing and naming **style files and folders in a web development project**. The main idea behind ITCSS is to build a logical hierarchy for styles, in such a way that the most specific and generic styles are at the bottom of the hierarchy.

According to the ITCSS methodology, the main styles file should be called "main.scss" and different folders should be created inside the "src/styles" folder to organize the styles into different categories. For example, you might have a folder for global styles, a folder for component styles, a folder for font styles, and so on.

As for creating folders with the same name as scss files, it is not necessary to follow the ITCSS methodology. The idea is that styles are organized into folders based on their level of specificity and not necessarily based on file names. For example, you could have a "buttons.scss" file inside the "components" folder and a "forms.scss" file inside the "components" folder, instead of creating a "buttons" folder and a "forms" folder. . ".

* Here I present an example of a folder scheme that you could use following the ITCSS methodology:

- 📁 src
  - 📁 scss
    - 📁 01-settings
      - 📄 _colors.scss
      - 📄 _typography.scss
    - 📁 02-tools
      - 📄 _functions.scss
      - 📄 _mixins.scss
    - 📁 03-generic
      - 📄 _reset.scss
      - 📄 _normalize.scss
    - 📁 04-elements
      - 📄 _button.scss
      - 📄 _form.scss
    - 📁 05-objects
      - 📄 _layout.scss
      - 📄 _grid.scss
    - 📁 06-components
      - 📄 _header.scss
      - 📄 _footer.scss
    - 📁 07-utilities
      - 📄 _display.scss
      - 📄 _text-align.scss

    - 📄 main.scss

- 📁 dist
  - 📁 css
    - 📄 main.css

* **This scheme consists of several folders with different categories of styles:**

  - The "settings" folder includes files with variables for colors and fonts.
  - The "tools" folder includes files with functions and mixins.
  - The "generic" folder includes files with generic styles, such as reset and normalize.
  - The "elements" folder contains files with styles for common HTML elements, such as buttons and forms.
  - The "objects" folder includes files with styles for layout objects, such as layout and grid.
  - The "components" folder contains files with styles for UI components, such as the header and footer.
  - The "utilities" folder includes files with utility styles, such as display and text alignment.
  - The "main.scss" file is the main file that is used to import all other style files.
  - It is important to note that this is just an example and you can modify it according to your needs.
  - The main idea is to follow the logical hierarchy of ITCSS and to organize its styles in a clear and coherent way.
  - All imported files in main.scss will be compiled and transformed into a single main.css file

- [x] [IT CSS architecture](https://developer.helpscout.com/seed/glossary/itcss/#:~:text=ITCSS%20is%20a%20CSS%20architecture%20created%20by%20Harry%20Roberts.&text=It's%20a%20modern%2C%20and%20very,as%20an%20upside%2Ddown%20triangle.)

#

## Methodologies

### SuitCSS

* **SUITCSS** is a methodology for **writing and organizing Cascading Styles (CSS)** in a consistent and modular way. It is based on a few key ideas:

- Class names must be explicit and specific.
* Styles must be bound to a specific component.
* Styles should be reusable and modular.
* With SUITCSS, a naming convention is usually followed that includes the name of the component and a description of the style. For example, a style for a button might have a name like "Btn--primary".

SUITCSS also promotes creating separate style files for each component, rather than having a monolithic file with all the styles in the project. In this way, the styles of each component can be reused in different contexts and the modularity and scalability of the project is maintained.

Regarding the organization of the style files and folders, SUITCSS does not have a specific folder scheme, but focuses more on the naming convention and the creation of files for each component. However, you can use any folder scheme that works for you to organize your styles in a logical and coherent way.

**Example SUITCSS methodology:**

<code>

.MyComponent {}

.MyComponent.is-animating {}

.MyComponent--modifier {}

.MyComponent-part {}

.MyComponent-anotherPart {}

</code>

[x] [SUIT CSS naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)

#

## Tools

#


