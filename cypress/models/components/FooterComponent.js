

export default class FooterComponent{
    getColumns = () => cy.get('#fotcont .caption');
    getColumnHeader = () => cy.get('h4');
    getColumnDesc = () => cy.get('p');

    getAboutUsData(){
        let aboutUsData = {};

        this.getColumns().eq(0).within(()=>{
            this.getColumnHeader().then($header => aboutUsData.header =$header.text().trim());
            this.getColumnDesc().then($desc => aboutUsData.desc =$desc.text().trim())
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(()=> resolve(aboutUsData))
        })
    }

    getContactUsData(){
        let contactUsData = {};

        this.getColumns().eq(1).within(()=>{
            this.getColumnHeader().then($header => contactUsData.header =$header.text().trim());
            this.getColumnDesc().each($desc => {
                contactUsData.desc = contactUsData.desc + $desc.text().trim() +" ";
            })
        })

        return new Cypress.Promise(resolve => {
            cy.wrap('').then(()=> resolve(contactUsData))
        })
    }
}