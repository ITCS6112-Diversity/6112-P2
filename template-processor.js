'use strict';

class TemplateProcessor {
    constructor(template) {
        this.template = template;
    }
    
    fillIn(dictionary) {
        console.log(this.template);
        var updated = "";
        for (var i = 0; i<this.template.length; i++) {
            var c = this.template[i];
            if (c == '{') {
                var c2 = this.template[i+1];
                if (c2 != '{') {
                    updated += c2;
                    ++i;
                    continue;
                }
                i++;
                
                var keyword = "";
                for (var j = i+1; j<this.template.length; j++, i++) {
                    var c1 = this.template[j];
                    var c2 = this.template[j+1];
                    if (c1 == '}' && c2 == '}') {
                        i += 2;
                        break;
                    } else {
                        keyword += c1;
                    }
                }
                
                if (keyword in dictionary) {
                    updated += dictionary[keyword];
                } else {
                    updated += "";
                }
            } else {
                updated += c;
            }
        }
        console.log(updated);
        return updated;
    }
}

exports.TemplateProcessor = TemplateProcessor;

