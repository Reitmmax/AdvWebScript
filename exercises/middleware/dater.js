// JavaScript Document
//dater function
const dater = (req, res, next) => {
    const today = new Date();
    const yyyy = today.getFullYear(); //get year
    let mm = today.getMonth() + 1; // adds 1 because index starts at 0
    let dd = today.getDate(); //gets date
    
    if (dd < 10) dd = '0' + dd; //puts 0 at the beginning if its jan-oct
    if (mm < 10) mm = '0' + mm; // puts 0 at the beginning if its 1-9
    
	//cannot send variable directly, therefore a request rather than a var.
    req.formattedToday = dd + '/' + mm + '/' + yyyy;
	//moves to next middleware
    next();
};

module.exports = dater;