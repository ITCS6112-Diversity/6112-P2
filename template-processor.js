'use strict';


class TemplateProcessor {

  constructor(template){
    this.template = template;
  }

  fillIn(dictionary) {

    //Get process dictionary
    var result = Object.keys(dictionary).map(k => ({ [k]: dictionary[k]}));

    //For each KV, replace template with KV
    // foreach...
    this.template.replace(/\{[^}]*\}\}/g, dictionary);

  }

}