/**
 * The Coin Class sets up each coin to have its
 * own position on the screen
 */
function Coin(){
	//properties to let each coin store its own x/y position
	this.x = Math.floor(Math.random()*600); 
	this.y = Math.floor(Math.random()*400);
	//property that keeps track of the item on the screen
	this.item_on_page;
	/**
	 * The create method put a visual of the coin on the screen
	 */ 
	 this.create = function(){
		 this.item_on_page = document.createElement("img");
		 this.item_on_page.src = "img/coin.png";
		 this.item_on_page.style.position = "absolute";
		 this.item_on_page.style.top = this.y + "px";
		 this.item_on_page.style.left = this.x + "px";
		 //put the img on the page as a child of the body
		 document.body.appendChild(this.item_on_page);
	 }//end function create()
	 /**
	 * The destroy method removes a visual of the coin on the screen
	 */ 
	 this.destroy = function(){
		 
	 }//end function destroy()

}