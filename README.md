CARPETA Style Guide
===================

arquitectura itcss.

Explicacion de la arquitectura itcss

ITCSS (Inverted Triangle CSS) es una metodología para organizar y nombrar los archivos y carpetas de estilos en un proyecto de desarrollo web. La idea principal detrás de ITCSS es construir una jerarquía lógica para los estilos, de tal manera que los estilos más específicos y genéricos estén al final de la jerarquía.

De acuerdo con la metodología ITCSS, el archivo principal de estilos se debe llamar "main.scss" y se deben crear diferentes carpetas dentro de la carpeta "src/styles" para organizar los estilos en diferentes categorías. Por ejemplo, se podría tener una carpeta para estilos globales, una carpeta para estilos de componentes, una carpeta para estilos de tipografía, etc.

En cuanto a la creación de carpetas con el mismo nombre de los archivos scss, esto no es necesario para seguir la metodología ITCSS. La idea es que los estilos se organizan en carpetas según su nivel de especificidad y no necesariamente según el nombre de los archivos. Por ejemplo, se podría tener un archivo "buttons.scss" dentro de la carpeta "components" y un archivo "forms.scss" dentro de la carpeta "components", en lugar de crear una carpeta "buttons" y otra carpeta "forms".

Aquí te presento un ejemplo de esquema de carpetas que podrías utilizar siguiendo la metodología ITCSS:

src/styles
settings
_colors.scss
_typography.scss
tools
_functions.scss
_mixins.scss
generic
_reset.scss
_normalize.scss
elements
_button.scss
_form.scss
objects
_layout.scss
_grid.scss
components
_header.scss
_footer.scss
utilities
_display.scss
_text-align.scss
main.scss
Este esquema consta de varias carpetas con diferentes categorías de estilos:

La carpeta "settings" incluye archivos con variables para colores y tipografía.
La carpeta "tools" incluye archivos con funciones y mixins.
La carpeta "generic" incluye archivos con estilos genéricos, como reset y normalize.
La carpeta "elements" incluye archivos con estilos para elementos HTML comunes, como botones y formularios.
La carpeta "objects" incluye archivos con estilos para objetos de diseño, como layout y grid.
La carpeta "components" incluye archivos con estilos para componentes de la interfaz de usuario, como header y footer.
La carpeta "utilities" incluye archivos con estilos de utilidad, como display y text-align.
El archivo "main.scss" es el archivo principal que se utiliza para importar todos los demás archivos de estilos.
Es importante tener en cuenta que este es solo un ejemplo y puedes modificarlo según tus necesidades. La idea principal es seguir la jerarquía lógica de ITCSS y organizar tus estilos de manera clara y coherente.

###

STYLES METODOLOGY SUITCSS

SUITCSS es una metodología para escribir y organizar estilos de cascada (CSS) de manera consistente y modular. Se basa en algunas ideas clave:

Los nombres de clase deben ser explícitos y específicos.
Los estilos deben estar vinculados a un componente específico.
Los estilos deben ser reutilizables y modulares.
Con SUITCSS, se suele seguir una convención de nombres que incluye el nombre del componente y una descripción del estilo. Por ejemplo, un estilo para un botón podría tener un nombre como "Button--primary".

SUITCSS también promueve la creación de archivos de estilo separados para cada componente, en lugar de tener un archivo monolítico con todos los estilos del proyecto. De esta manera, se pueden reutilizar los estilos de cada componente en diferentes contextos y se mantiene la modularidad y la escalabilidad del proyecto.

En cuanto a la organización de los archivos y carpetas de estilos, SUITCSS no tiene un esquema de carpetas específico, sino que se enfoca más en la convención de nombres y en la creación de archivos para cada componente. Sin embargo, puedes utilizar cualquier esquema de carpetas que te resulte útil para organizar tus estilos de manera lógica y coherente.

EJEMPLO DE SUICTSS

Supongamos que quieres crear un componente de botón. Podrías crear un archivo "Button.css" con el siguiente contenido:

.Button {
  display: inline-block;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;

  &--primary {
    background-color: #337ab7;
    color: #fff;
  }

  &--secondary {
    background-color: #fff;
    color: #337ab7;
  }

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}

Con esto, podrías utilizar el componente de botón en tu HTML de la siguiente manera:

<button class="Button Button--primary">Primary button</button>
<button class="Button Button--secondary">Secondary button</button>
En este ejemplo, el componente de botón se compone de dos estilos: uno para el botón en sí y otro para los estados de hover y focus. Además, se incluyen dos modificadores para los botones primarios y secundarios.



