var count = 1;

function addBlog(){
	console.log("Event fired ...");
	
	var cardContainer = document.getElementById('cardDeck');
	var title = document.getElementById('title').value;
	var desc = document.getElementById('description').value;
	var cont = document.getElementById('content').value;
	var blogImg = document.getElementById('customImg').value;
	//console.log('Blog Image = '+blogImg);

	
	var card = document.createElement('div');
	card.setAttribute("id",count);
    card.className = 'card shadow cursor-pointer';

    var cardBody = document.createElement('div');
    cardBody.className = 'card-body text-center';

    var titleHtml = document.createElement('h4');
    titleHtml.innerText = title;
    titleHtml.className = 'card-title';
	
	var descHtml = document.createElement('p');
    descHtml.innerText = desc;
    descHtml.className = 'card-text';
	
	
	var imgHtml = document.createElement('img');
	//imgHtml.setAttribute("src","img/blog_img.jpg");
	imgHtml.setAttribute("src",blogImg);
	imgHtml.className="img-thumbnail";
	imgHtml.alt="Blog Image";
	imgHtml.width="200";
	imgHtml.height="300";

	
	var blogHtml = document.createElement('a');
    blogHtml.setAttribute("href","#");
    blogHtml.className = 'btn btn-primary';
    blogHtml.innerText = 'See Blog';
	
	
	var deleteNode = document.createElement("a");
	var deleteNodeValue = document.createTextNode("X");
	deleteNode.appendChild(deleteNodeValue);
	deleteNode.setAttribute("id","delete");
	deleteNode.setAttribute("href","#");
	deleteNode.setAttribute("onclick","deleteTag("+count+")");
	console.log("card = "+card);
	
	cardBody.appendChild(titleHtml);
    cardBody.appendChild(imgHtml);
    cardBody.appendChild(descHtml);
    cardBody.appendChild(blogHtml);
	card.appendChild(deleteNode);
    card.appendChild(cardBody);	
    cardContainer.appendChild(card);	
	
	count++;
	
	reset();
	
}

function reset() {
	document.getElementById("title").value = "";
	document.getElementById("description").value = "";
	document.getElementById("content").value = "";
	document.getElementById("customImg").value = "";
}

function deleteTag(idValue) {
	console.log("Delete event fires ...");
	var obj = document.getElementById(idValue);
	obj.remove();
}