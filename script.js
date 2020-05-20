// global array that every function has access to
 var memeBox =[];

 // function definition that will create a url for the meme
 function uploadMeme(){

   // create variables to get the value of the inputs in order to construct the object
    var n = document.getElementById("name").value.toLowerCase();
    var t = document.getElementById("tag").value.split(" ");
    var u = document.getElementById("url").value;

    // Object construct
    var meme = {
      name: n,
      tag: t,
      url: u
    }

    // push the object to the array
    memeBox.push(meme);

    // call the function that is going to display all memes that we defined a few lines below
    displayAllMemes()

    alert(meme.name + " was just pushed!");
    console.log('Log of the search array ==>', memeBox)
  };

  // function definition that shows the meme on the page
  function displayAllMemes(){

    // clear the results from the page, prevents duplicates from new search and previous search
    var display = document.getElementById("result");
    display.innerHTML = " ";

    // loop through the array and appen the img URL and img html element node to the DOM
    for(var i = 0; i < memeBox.length; i++){
      display.innerHTML += `<li class='list-group-item'><img src=${memeBox[i].url} /></li>`
    }
  };

// this function sole purpose is to grab the input and find the img url
  function search(){

    // get the value that is inputed in the input box
    var searchText = document.getElementById("search").value.toLowerCase();

    // clear the results before the search is started
    document.getElementById('result').innerHTML = '';

    // take the stored value in variable search the array for a match
    for (var i = 0; i < memeBox.length; i ++){

      // if the the name of the meme is the same as the input text or the tags include
      // the input text add the meme to the DOM.
      if(memeBox[i].name == searchText ||  memeBox[i].tag.includes(searchText)){
        document.getElementById('result').innerHTML = '<img src="' + memeBox[i].url +'" />'
      }
    }
  }