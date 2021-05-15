var name_people=[];
function submit(){
    var Guestname=document.getElementById("enterguest").value;
    name_people.push(Guestname);
    console.log(Guestname);
    console.log(name_people);
    document.getElementById("Guestname").innerHTML=name_people.toString();
}
function sorting(){
    name_people.sort();
    var i=name_people.join("<br>");
    console.log(name_people);
    document.getElementById("abc").innerHTML=i.toString();
}
function show(){
    var k=name_people.join("<br>");
    console.log(name_people);
    document.getElementById("showlist").innerHTML=k.toString();
}
function search(){
    var search=document.getElementById("searchgeust").value;
    var success=0;
    var m;
    for (m = 0; m < name_people.length; m++) {
       if(search==name_people[m]){
           success=success+1;
       }
        
    }
    var print="Name Found " +success+ " time/s";
    document.getElementById("p1").innerHTML=print;
}