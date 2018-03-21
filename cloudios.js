/*
* Cloudios v0.1
* This is the Pre-releace
* By The349
* Goto http://mrjay.oyosite.com/cloudios.html for build and test info
*/
var cloudiosVersion = "v0.1"
function cloudios(i) {
    self.element = document.querySelector(i)
    self.html = function (i) {
        if(!i) {return self.element}
        if(i) {self.element.innerHTML = i}
        return self
    }
    self.attr = function (name, value) {
        if(!value) {self.element.getAttribute(name)}
        if(value) {self.element.setAttribute(name, value)}
        return self
    }
    self.on = function (type, callback) {
        self.element["on" + type] = callback
        return self
    }
    self.htmlAdd = function (i) {
        if(!i) {return self.element}
        if(i) {self.element.innerHTML = self.element.innerHTML + i}
        return self
    }
    return self
}