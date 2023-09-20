
import 'cypress-file-upload'
describe("uploading files",()=>{

    it("single file upload",()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#file-upload").attachFile("file-sample_150kB.pdf")
        cy.get("#file-submit").click()
        cy.wait(3000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')



    })

    it('Upload file using Drag & Drop',()=>{


    
    
        cy.visit("https://the-internet.herokuapp.com/upload")
        cy.get("#drag-drop-upload").attachFile("Free_Test_data_100KB_PDF.pdf",{subjectType:'drag-n-drop'})

        cy.wait(3000)
        cy.get("#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span").contains('Free_Test_data_100KB_PDF.pdf')
    })

    it("uploading mutiple files",()=>{


        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
    
        cy.get("#filesToUpload").attachFile(['260KB.pdf','file-sample_150kB.pdf'])
    
        cy.wait(5000)
        cy.get(":nth-child(6) > strong").contains("Files You Selected:")
})

it.only("uploding file in shadow dom",()=>{


    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
    cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile("260KB.pdf")
    cy.get(".smart-item-name",{includeShadowDom:true}).contains("260KB.pdf")
})
})