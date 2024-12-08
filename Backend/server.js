const express = require('express');
const app = express();
const port = 3000;


// Middle Ware to Parse JSON
app.use(express.json());



// Example API Endpoint 
app.get('/api/data',(req,res) => {
   res.json({ message: 'Hello From the Backend!.'});
});


// Start the server 
app.listen(port, () => {
	console.log(`Server is running on ${port}`);
});
