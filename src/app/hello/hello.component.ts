import { Component } from '@angular/core'
@Component({
    selector: 'hello',
    templateUrl: './hello.component.html'
})
export class HelloComponent{
    numeros: number[];

    constructor() {
        this.numeros = [1,2]
    }

}