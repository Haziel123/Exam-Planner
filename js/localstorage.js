function SaveItem() {
			
	var first = document.forms.fillup.first.value;
    var data=[];
    data.push(document.forms.fillup.last.value);
    data.push(document.forms.fillup.school.value);
    data.push(document.forms.fillup.address.value);
    data.push(document.forms.fillup.schoolid.value);
	localStorage.setItem(first, JSON.stringify(data));
	doShowAll();
	
}

function savesched()
{
    var subject=document.forms.sched.sub.value;
    var data=[];
    data.push(document.forms.sched.prof.value);
    data.push(document.forms.sched.room.value);
    data.push(document.forms.sched.time.value);
    localStorage.setItem(subject,JSON.stringify(data));
    
}

function ModifyItem() {
    
	var date = document.forms.ReminderForm.date.value;
	document.forms.ReminderForm.amount.value=JSON.parse(localStorage.getItem(date))[0];
     document.forms.ReminderForm.reminder.value= JSON.parse(localStorage.getItem(date))[1];                                                    
	doShowAll();
}

function RemoveItem() {
            var date = document.forms.ReminderForm.date.value;
            document.forms.ReminderForm.reminder.value = localStorage.removeItem(date);
            doShowAll();


}

function ClearAll() {
	localStorage.clear();
	doShowAll();
}

// dynamically draw the table
      
function select()
{
    var name=document.forms.fillup.name.value;
   if (localStorage.getItem(name)!=null){ if(Object.keys(JSON.parse(localStorage.getItem(name))).length==4){ document.forms.fillup.last.value=JSON.parse(localStorage.getItem(name))[0];
     document.forms.fillup.school.value=JSON.parse(localStorage.getItem(name))[1];
     document.forms.fillup.address.value=JSON.parse(localStorage.getItem(name))[2];
     document.forms.fillup.schoolid.value=JSON.parse(localStorage.getItem(name))[3];                                   }
                                        }
}
function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list ="<tr> <th>Subject</th> <th><th>Proffesor</th><th>Room</th><th>Time/Date</th></tr>\n";
		var i = 0;
        var obj;
		for (i = 0; i <= localStorage.length - 1; i++) {
			key = localStorage.key(i);
            obj=JSON.parse(localStorage.getItem(key))
            if(Object.keys(obj).length==3){
			list += "<tr><td>" + key + "</td><td><td>" + JSON.parse(localStorage.getItem(key))[0]  + "</td></td>\n<td>"+ JSON.parse(localStorage.getItem(key))[1] +  "</td></td>\n<td>"+ JSON.parse(localStorage.getItem(key))[2] + "</td></tr>\n"
					;
            }
		}
		if (list == "<tr> <th>Subject</th> <th><th>Proffesor</th><th>Room</th><th>Time/Date</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td>\n<td><i>empty</i></td><td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot store ListOfDebt as your browser do not support local storage');
	}
}


/*
 * Checking the browser compatibility.
 * 
 * Alternately can use Modernizr scripts- JavaScript library that helps us to
 * detect the browser support for HTML5 and CSS features Example - <script
 * type="text/javascript" src="modernizr.min.js"></script>
 * 
 * if (Modernizr.localstorage) { //use localStorage object to store data } else {
 * alert('Cannot store user preferences as your browser do not support local
 * storage'); }
 */
function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		// we can use localStorage object to store data
		return true;
	} else {
			return false;
	}
}