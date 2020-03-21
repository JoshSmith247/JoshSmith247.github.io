//alert("TEST");
function read_text_file (file) {	
	if(file !=null) {
		var all_string = "";

		file.open("r");
		while(!file.eof) { 
			all_string += (file.readln() + "\n") ;
		};
		file.close();
	};	
	var file_contents = all_string;
};

read_text_file("description.txt);
console.log(file_contents);
