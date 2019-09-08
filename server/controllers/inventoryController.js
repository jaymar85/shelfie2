module.exports = {
    //read
    getInventory: (req, res) => {
        const dbInstance = req.app.get("db");
    
        dbInstance.get_inventory()
        .then(list => res.status(200).send(list))
        .catch(err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. What did you do?"});
            console.log(err)
        });        
    },
    //create
    addProduct: (req, res, next ) => {
        const dbInstance = req.app.get("db");
        const { product_name, price, image_url } = req.body;
        // res.status(200).send("Whoa! It works! Great!");

        dbInstance.create_product([product_name, price, image_url])
         .then( response => res.status(200).send(response) )
         .catch(err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. What did you do?"});
            console.log(err)
        });
    }
}
/* To test the endpoints in index.js nodemon should be running and Postman should be open. Once we get 
the test string back it means it's working. */

/* Use link for reference https://github.com/jaymar85/node-3-afternoon 
To connect the db with the server... 
https://pgweb-demo.herokuapp.com - Database - Use Query to create list, table, products
rows to view. If you run query and no error show it means it worked.

*/
