

export class HeroComponent{
    //unique 
    static COMP_SEL ='.showcase__hero';

    constructor(component){
        this.component = component
    }

    get cardTitle(){
        return this.component.find('.card_title');
    }
}