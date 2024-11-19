
function testScope() {

    let x = 50;
    
    if (true) {
        
        let x = 30;

        console.log(x); 
    }
    
    console.log(x); 
}

testScope();
