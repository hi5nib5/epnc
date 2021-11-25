/**
 * Filename:epncSession.js
 * Version:V1.00
 * Copyright (c) 2012 EPNC Energy Ltd. All Rights Reserved.
 * Written by Euan Clifford.
 * Date: 16/11/2021
 */

function showPage(pageName)
{
	console.log ("in showPage = " + pageName);
	currentPage = document.getElementById(pageName);
	
	console.log("current page = " + currentPage);
	
	//currentPage.className = "deselected";
	//document.getElementById("myDropdown").classList.toggle("show");
	//currentPage.classList.toggle("show");
	
	//(currentPage == "all_about"? document.getElementById("aboutEpncDrop").classList.toggle("show"): console.log("not this one"););
	/*if(pageName === "all_about"){
		document.getElementById("aboutEpncDrop").classList.toggle("show");
		console.log("this one");
	}*/
	
	document.getElementById("home").className = "deselected";
	document.getElementById("all_about").className = "deselected";
	document.getElementById("contact_us").className = "deselected";
	document.getElementById("about_us").className = "deselected";
	
	currentPage.className = "selected";
}