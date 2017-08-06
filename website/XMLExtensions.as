
// FILE      XmlExtensions.as
// VERSION   2.0 (compatible with Flash MX)
// MODIFIED  27 October 2002
// SUMMARY   Misc utility functions that
//           extend the XML class.

 
XML.prototype.getRootNode = function()
{

    // ----- The document root node is
    // ----- the first with nodeType 1
    for(i in this.childNodes)

        if(this.childNodes[i].nodeType == 1)

            return this.childNodes[i];

}
 

XMLNode.prototype.sendNodes = function(searchName, callback)

{

    // ----- Send all nodes matching searchName

    // ----- to the client's callback function.

    // ----- Recurse to visit all nested nodes.

    for(var i = 0; i < this.childNodes.length; i++)

    {

        var currentNode = this.childNodes[i];

 

        if(currentNode.nodeName == searchName)
            callback(currentNode);

 

        if(currentNode.childNodes.length > 0)
            currentNode.sendNodes(searchName, callback);

    }

}

 

// ----- 27 October 2002  Added the function named initHandlers

// ----- 27 October 2002  Added the function named defineHandler

// ----- 27 October 2002  Added the function named processNodes

 

XMLNode.prototype.initHandlers = function()

{

    // The null lines seem unnecessary until you want to process the

    // same XML nodes using different handlers in a single session.

 

    XMLNode.mySearch = null; // Assures new Array doesn’t point to old data.

    XMLNode.mySearch = new Array();

 

    XMLNode.myCallback = null; // Same here.

    XMLNode.myCallback = new Array();

}

 

XMLNode.prototype.defineHandler = function(search, callback)

{

    XMLNode.mySearch.push(search);

    XMLNode.myCallback.push(callback);

}

 

XMLNode.prototype.processNodes = function()

{

    for(var i = 0; i < this.childNodes.length; i++)

    {

        var currentNode = this.childNodes[i];

 

        for(var j = 0; j < XMLNode.mySearch.length; j++)

            if(currentNode.nodeName == XMLNode.mySearch[j])

                XMLNode.myCallback[j](currentNode);

 

        if(currentNode.childNodes.length > 0)

            currentNode.processNodes();

    }

}


