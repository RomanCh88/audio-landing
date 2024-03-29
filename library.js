'use strict'

class KeyFrame extends HTMLElement {

    get time() {
        return this.getAttribute('time')
    }

    set time(val) {
        this.setAttribute('time',val)
    }

    get son() {
        var dependentDOMElement = document.getElementById(this.getAttribute('for'))
        return dependentDOMElement
    }

    set son(val) {
        this.setAttribute('for',val)
    }
}

window.customElements.define('key-frame', TimeCode)

var audioST = document.getElementById('audio-st')

var allTC = document.getElementsByTagName("key-frame")

for (let i = 0; i < allTC.length; i++) {
    allTC[i].style.display = "none"
    allTC[i].son.style.display = "block"
  }
