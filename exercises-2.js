// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x,y){
    arguments[0]
	arguments[1]
if (x>y){
	return x
}else{
	return y
}}

max(9,7)



// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x,y,z){
    if ((x >= y) && (x >= z)) { 
        return x
    } else if ((y >= x) && (y >= z)) {
        return y
    } else {
        return z
    }
}

maxOfThree(5,8,2)

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
        if(char == "a"||char== "e"|| char == "i"|| char == "o"|| char == "u"){
            return true
         }else{

    return false}

}




// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
	
	phrase.foreach(isvowel(x){
		if(true){}
			else(false){}
	}
	
}

rovarspraket("this")

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(x){ 
	var s = ""
    for (var i = x.length - 1; i >= 0; i--){
    	s += x[i]
    }
    return x
    }
    


reverse("aldskjfbpaw")
