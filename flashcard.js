function BasicCard(front,back){
	this.front=front;
	this.back=back;

	this.backed = function(){
		console.log("Back: "+this.back);
	};

	this.fronted = function(){
		console.log("Front: "+this.front);
	};


};

function ClozeCard(text,cloze){
	this.text = text;
	this.cloze=cloze;
	var clozearr = this.cloze.split(" ");
	var textarr = this.text.split(" ");

	this.partialed = function(){
		
		for(var i = 0; i<clozearr.length; i++){
			textarr.shift();
		}

		textarr.unshift("...");
		console.log("Partial: "+textarr.join(" "));

	};

	this.clozed = function(){
		console.log("Cloze: "+clozearr.join(" "));

	};

	this.fulled = function(){
		console.log("Full Text: "+this.text);

	};

};

var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");
firstPresidentCloze.clozed();
firstPresidentCloze.fulled();
firstPresidentCloze.partialed();

var firstPresident = new BasicCard("Who was the first president of the United States?", "George Washington");
firstPresident.fronted();
firstPresident.backed();