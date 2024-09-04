import { HeroComponent } from "../components/simplyRecipe/HeroComponent";


class SimplyHomePage{


    //Tạo các component
    heroComponent(){
        return new HeroComponent(cy.get(HeroComponent.COMP_SEL))
    }

    getHeroCompTitle(){
        let title =''
        cy.get('.showcase__hero .card__title').then($title => {
            title = $title.text().trim();
        })
        return new Cypress.Promise(resolve => cy.wrap('').then(()=> resolve(title))
        )
    }

    //Tạo các element
    get leftPictureWithinMethod(){
        return cy.get('.showcase__hero').within(()=>{
            cy.get('.card__title');
        });
    }

    get leftPictureFindMethod(){
        return cy.get('.showcase__hero').find('.card__title');
    }

    get headingTitle(){
        return cy.get('.heading__title')
    }

    leftPictureClick(){
        this.leftPictureWithinMethod.click();
    }

    leftPictureClickFindMethod(){
        this.leftPictureFindMethod.click();
    }

    verifyHeadingTitle (){
        this.headingTitle.should('have.text','My Cowboy Casserole Is a Southwestern Favorite');
    }
}

module.exports = new SimplyHomePage();