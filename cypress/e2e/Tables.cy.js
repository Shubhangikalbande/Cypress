describe("handling tables",()=>{

    beforeEach("login",()=>{

        cy.visit("https://demo.opencart.com/admin/")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click();
        cy.get(".btn-close[data-bs-dismiss='modal']").click();
        cy.get(".parent.collapsed[href='#collapse-5']").click();//customer main menu
        cy.get("li[id='menu-customer'] li:nth-child(1) a:nth-child(1)").click()//customer sub menu

    })

    it("check number of rows and column",()=>{
        cy.get(" table.table.table-bordered.table-hover>tbody>tr").should('have.length',10)
        cy.get(" table.table.table-bordered.table-hover>thead>tr>td").should('have.length',7)

    })

    it("check data in a particular cell",()=>{


        cy.get("td.text-start").contains("gorankrezic90@gmail.com")
    })

    it("read  all rows and columns on the 1st page",()=>{

        cy.get(" table.table.table-bordered.table-hover>tbody>tr")
        .each(( $row,index,$rows)=>{

            cy.wrap($row).within(()=>{

                cy.get("td").each(($col,index,$cols)=>{

                    cy.log($col.text());
                })
            })
        })

    })

   /* it.only("pagination",()=>{
            //Finding toal no. of pages
        let totalpages ;
            cy.get(".col-sm-6.text-end").then((e)=>{
        
            let mytext= e.text()//entire text "Showing 1 to 10 of 15049 (1505 Pages)"
            totalpages=mytext.substring(mytext.indexOf ( "(")+1 ,mytext.indexOf("Pages")-1); //capturing 1st & last index of pages
            cy.log("total number of pages are...." + totalpages)//printing
        })


    })*/

    it.only("read data from each table",()=>{
    let totalpages=5
    for(let i=1 ;i<= totalpages ;i++)
    {

    
                                         if (totalpages >1)


     {
        cy.log( "activet page is ..."+i)
        cy.get("span[class='page-link']").click();
        
     }

     cy.wait(2000);
        cy.get(" table.table.table-bordered.table-hover>tbody>tr")
        .each(( $row,index,$rows)=>{

            cy.wrap($row).within(()=>{


                cy.get("td.text-start").then((e)=>{

                    cy.log(e.text());// fetch email id from each row
                })
            })

        })
     }

    
    })
})


  
