var x = 20;
var y = 496;
var idle=true;
var walk=false;
var zielx = Math.floor(Math.random()*28)*20+20;
var ziely = 460;
var siegpunkte = 0;
var spielzeit = 45;
var restzeit = 0;
var startzeit = new Date();
var gegnerpositionen = [1, 10, 60, 100, 150, 296];  
var gegnerbewegung = [2, 3, -2, 4, 5, -3];
var movec=0;
var mover=1; 
var level=-1;
var mausx,mausy;
var oldmausx,oldmausy,oldmausx2,oldmausy2;
var a2=0;
var a3=0;
var a4=0;
var a5=0;
var a6=0;
var energygiven=false;
var energytaken=false;
var clockgiven=false;
var clocktaken=false;
var rosegiven=false;
var rosetaken=false;
var needlegiven=false;
var needletaken=false;
var teagiven=false;
var teataken=false;
var bookgiven=false;
var booktaken=false;
var gamegiven=false;
var gametaken=false;

$(document).ready(function() {
	takt = window.setInterval(taktung, 30);
	//$("#meinsong").play();
	$('audio')[0].play();
    var spielbrett = document.getElementById('leinwand');
    var spielfeld = spielbrett.getContext('2d');
	 //var spielfigur=new Image();
	 //spielfigur.src='bilder/spielfigur.png';
	 var title=new Image();
	 var intro=new Image();
	 var back1=new Image();
	 var back2=new Image();
	 var back3=new Image();
	 var back4=new Image();
	 var back5=new Image();
	 var back6=new Image();
	 var back7=new Image();
	 var back8=new Image();
	 var playerl=new Image();
	 var playerr=new Image();
	 var energy=new Image();
	 var clock=new Image();
	 var rose=new Image();
	 var needle=new Image();
	 var game=new Image();
	 var book=new Image();
	 var tea=new Image();
	 var char1=new Image();
	 var char2=new Image();
	 var char3=new Image();
	 var char4=new Image();
	 var char5=new Image();
	 var char6=new Image();
	 var char7=new Image();
	 var char8=new Image();
	 var win=new Image();
	 win.src='gfx/win.png';
	 char8.src='gfx/char8.png';
	 char7.src='gfx/char7.png';
	 char6.src='gfx/char6.png';
	 char5.src='gfx/char5.png';
	 char4.src='gfx/char4.png';
	 char3.src='gfx/char3.png';
	 char2.src='gfx/char2.png';
	 char1.src='gfx/char1.png';
	 tea.src='gfx/tea.png';
	 book.src='gfx/book.png';
	 game.src='gfx/game.png';
	 needle.src='gfx/needle.png';
	 rose.src='gfx/rose.png';
	 clock.src='gfx/clock.png';
	 energy.src='gfx/energy.png';
	 playerr.src='gfx/playerr.png';
	 playerl.src='gfx/playerl.png';
	 back1.src='gfx/back1.png';
	 back2.src='gfx/back2.png';
	 back3.src='gfx/back3.png';
	 back4.src='gfx/back4.png';
	 back5.src='gfx/back5.png';
	 back6.src='gfx/back6.png';
	 back7.src='gfx/back7.png';
	 back8.src='gfx/back8.png';
	 intro.src='gfx/intro.png';
	 title.src='gfx/title.png';
	 
	function taktung() {
		$('#punktestand').html('Points: '+siegpunkte);
	    //spielfeld.clearRect(0, 0, 640, 480);
		//zeichneZielfeld();   
		
		var box = document.querySelector(".box");
var pageX = document.getElementById("x");
var pageY = document.getElementById("y");

function updateDisplay(event) {
  pageX.innerText = event.pageX;
  pageY.innerText = event.pageY;
  mausx=event.pageX-window.innerWidth/2+400;
  mausy=event.pageY-window.innerHeight/2+320;

}

leinwand.addEventListener("mousemove", updateDisplay, false);
leinwand.addEventListener("mouseenter", updateDisplay, false);
leinwand.addEventListener("mouseleave", updateDisplay, false);

		a2++;
		if(a2==20) a2=0;
		a3++;
		if(a3==30) a3=0;
		a4++;
		if(a4==40) a4=0;
		a5++;
		if(a5==50) a5=0;
		a6++;
		if(a6==60) a6=0;
				
		if(level==-1) spielfeld.drawImage(title,0,0);
		if(level==0) spielfeld.drawImage(intro,0,0);
				
		if(level==1)
		{
			spielfeld.drawImage(back1,0,0);
			
			if(a5<10) spielfeld.drawImage(char1,516,84,32,64,600,500,32,64);
			if(a5>9 && a5<20) spielfeld.drawImage(char1,550,84,32,64,600,500,32,64);
			if(a5>19 && a5<30) spielfeld.drawImage(char1,584,84,32,64,600,500,32,64);
			if(a5>29 && a5<40) spielfeld.drawImage(char1,618,84,32,64,600,500,32,64);
			if(a5>39) spielfeld.drawImage(char1,652,84,32,64,600,500,32,64);
//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
		
		}

		if(level==87) spielfeld.drawImage(win,0,0);
		
		if(level==2) 
		{
			spielfeld.drawImage(back2,0,0);
			if(a2<10) spielfeld.drawImage(char2,418,31,64,99,600,500,64,99);
			if(a2>9) spielfeld.drawImage(char2,487,31,64,99,600,500,64,99);
		}
		
		if(level==3)
		{
			spielfeld.drawImage(back3,0,0);
			if(a2<10) spielfeld.drawImage(char3,3,27,68,99,600,500,68,99);
			if(a2>9) spielfeld.drawImage(char3,72,27,68,97,600,500,68,97);
		}
		
		if(level==4)
		{
			spielfeld.drawImage(back4,0,0);
			if(a2<10) spielfeld.drawImage(char4,12,144,64,65,600,500,64,65);
			if(a2>9) spielfeld.drawImage(char4,80,144,64,65,600,500,64,65);
		}
		
		if(level==5)
		{
			spielfeld.drawImage(back5,0,0);
			if(a3<10) spielfeld.drawImage(char5,4,179,88,87,600,500,88,87);
			if(a3>9 && a3<20) spielfeld.drawImage(char5,90,179,88,87,600,500,88,87);
			if(a3>19) spielfeld.drawImage(char5,177,179,88,87,600,500,88,87);
		}
		
		if(level==6) 
		{
			spielfeld.drawImage(back6,0,0);
			if(a2<10) spielfeld.drawImage(char6,699,5,65,118,600,450,65,118);
			if(a2>9) spielfeld.drawImage(char6,764,5,65,118,600,450,65,118);
		}
		
		if(level==7)
		{
			spielfeld.drawImage(back7,0,0);
			if(a2<10) spielfeld.drawImage(char7,131,45,62,89,600,500,62,89);
			if(a2>9) spielfeld.drawImage(char7,219,45,62,89,600,500,62,89);
		}
		
		if(level==8)
		{
			spielfeld.drawImage(back8,0,0);
			if(a4<10) spielfeld.drawImage(char8,2,4,43,87,600,500,43,87);
			if(a4>9 && a4<20) spielfeld.drawImage(char8,49,4,43,87,600,500,43,87);
			if(a4>19 && a4<30) spielfeld.drawImage(char8,94,4,43,87,600,500,43,87);
			if(a4>29) spielfeld.drawImage(char8,137,3,49,89,600,500,49,89);
		}
		
		
		
		//context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
		//spielfeld.drawImage(spielfigur,x,y);
		//zielfelderreicht();
		//kollisionspruefungGegner();
		//setzeGegner();
		
		if(energytaken) spielfeld.drawImage(energy,550,0);
		if(rosetaken) spielfeld.drawImage(rose,550,70);
		if(needletaken) spielfeld.drawImage(needle,550,140);
		if(teataken) spielfeld.drawImage(tea,450,0);
		if(booktaken) spielfeld.drawImage(book,450,70);
		if(clocktaken) spielfeld.drawImage(clock,450,140);
		if(gametaken) spielfeld.drawImage(game,350,0);
		
		if(level>0 && level<17)
		{
		if(idle)
		{
			if(mover==0)
			{
				if(a3<10) spielfeld.drawImage(playerl,504,243,130,195,x,y,70,100);
				if(a3>9 && a3<20) spielfeld.drawImage(playerl,647,243,130,195,x,y,70,100);
				if(a3>19) spielfeld.drawImage(playerl,792,247,130,195,x,y,70,100);
			}
			if(mover==1)
			{
				if(a3<10) spielfeld.drawImage(playerr,1262-137-504,243,130,195,x,y,70,100);
				if(a3>9 && a3<20) spielfeld.drawImage(playerr,1262-137-647,243,130,195,x,y,70,100);
				if(a3>19) spielfeld.drawImage(playerr,1262-137-792,247,130,195,x,y,70,100);
			}
		}
		if(walk)
		{
			if(mover==0)
			{
				if(a6<10) spielfeld.drawImage(playerl,1128,565,113,197,x,y,55,100);
				if(a6>9 && a6<20) spielfeld.drawImage(playerl,960,566,166,196,x,y,80,100);
				if(a6>19 && a6<30) spielfeld.drawImage(playerl,806,544,150,217,x,y,80,100);
				if(a6>29 && a6<40) spielfeld.drawImage(playerl,650,582,147,163,x,y,80,100);
				if(a6>39 && a6<50) spielfeld.drawImage(playerl,513,583,135,163,x,y,80,100);
				if(a6>49) spielfeld.drawImage(playerl,367,562,135,202,x,y,80,100);
			}
			if(mover==1)
			{
				if(a6<10) spielfeld.drawImage(playerr,1262-113-1128,565,113,197,x,y,55,100);
				if(a6>9 && a6<20) spielfeld.drawImage(playerr,1262-166-960,566,130,196,x,y,80,100);
				if(a6>19 && a6<30) spielfeld.drawImage(playerr,1262-150-806,544,130,217,x,y,80,100);
				if(a6>29 && a6<40) spielfeld.drawImage(playerr,1262-147-650,582,130,163,x,y,80,100);
				if(a6>39 && a6<50) spielfeld.drawImage(playerr,1262-135-513,583,130,163,x,y,80,100);
				if(a6>49) spielfeld.drawImage(playerr,1262-135-367,562,130,202,x,y,80,100);
			}
		}
		}
		
		if(mover==1 && movec<10) { x+=2; movec++;}
		if(mover==0 && movec<10) { x-=2; movec++;}
		if(x>620 && level<8) {x=20; level++;}
		
		if(x<20 && level>1) {x=620; level--;}
		//if(movec==20) mover=0;
		/*var aktuellezeit = new Date();
		restzeit = spielzeit - Math.floor((aktuellezeit.getTime()-startzeit.getTime()) / 1000);
		$('#spielzeit').html('Spielzeit: ' + restzeit);*/
		/*if (restzeit <= 0) {
	spielende();
}*/
    }
	
	
	$("body").mousedown(function(e)
	{
		if(level<1) level++;
		oldmausx2=oldmausx;
		oldmausy2=oldmausy;
		oldmausx=mausx;
		oldmausy=mausy;
	});
	
	
	
	$("#give").mousedown(function(e) 
	{
		if(x>550 && x<700 && level==5 && energytaken && oldmausx2>550 && oldmausy2<70) 
		{
			$('#message').html('Thank you very much! I can give you my black tea, it makes me only tired!');
			energytaken=false;
			teataken=true;
			energygiven=true;
			siegpunkte+=10;
		}

		if(x>550 && x<700 && level==4 && teataken && oldmausx2>450 && oldmausx2<550 && oldmausy2<70) 
		{
			$('#message').html('Thank you very much! This tea will calm me down. You only are coming through in waves? Here, read this book instead!');
			teataken=false;
			teagiven=true;
			booktaken=true;
			siegpunkte+=10;
		}

		if(x>550 && x<700 && level==7 && booktaken && oldmausx2>450 && oldmausx2<550 && oldmausy2>70 && oldmausy2<140) 
		{
			$('#message').html('Thank you very much! I give you for this my video-game. I will now read a wise book instead of playing all the time!');
			booktaken=false;
			bookgiven=true;
			gametaken=true;
			siegpunkte+=10;
		}		

		if(x>550 && x<700 && level==8 && gametaken && oldmausx2>350 && oldmausx2<450 && oldmausy2<70) 
		{
			$('#message').html('Thank you very much! Such nice graphics. Here, take this silly rose. Luisa dont want it from me!');
			gametaken=false;
			gamegiven=true;
			rosetaken=true;
			siegpunkte+=10;
		}		

		if(x>550 && x<700 && level==3 && rosetaken && oldmausx2>550 && oldmausx2<650 && oldmausy2>70 && oldmausy2<140) 
		{
			$('#message').html('Thank you very much! I will give that rose to beauty Luisa when I see her next time. I give you for that this needle.');
			rosetaken=false;
			rosegiven=true;
			needletaken=true;
			siegpunkte+=10;
		}		

		if(x>550 && x<700 && level==6 && needletaken && oldmausx2>550 && oldmausx2<650 && oldmausy2>140 && oldmausy2<210) 
		{
			$('#message').html('Thank you for the needle. Now I can test if I am really alive. I am coming only through in waves. Here, take this clock for it!');
			needletaken=false;
			needlegiven=true;
			clocktaken=true;
			siegpunkte+=10;
		}

		if(x>550 && x<700 && level==2 && clocktaken && oldmausx2>450 && oldmausx2<550 && oldmausy2>140 && oldmausy2<210) 
		{
			level=87;
			siegpunkte+=100;
			clocktaken=false;
		}
		
		
	});
	
	$("#talk").mousedown(function(e) 
	{
		if(x>550 && x<700 && level==1 && !energytaken && !energygiven) 
		{
			
			$('#message').html('Hello, you are only coming through in waves? I think you are only lazy. All you need is an adventure. Here, take these two energy-drinks and drink one!');
			energytaken=true;
			siegpunkte+=10;
		}

		if(x>550 && x<700 && level==5 && !energygiven) 
		{
			
			$('#message').html('I come only through in waves, I am empty, I have no energy!');
			
		}

		if(x>550 && x<700 && level==5 && energygiven) 
		{
			
			$('#message').html('Thank you for that drink, now I can climb up highest mountains!');
			
		}

		if(x>550 && x<700 && level==4 && !teagiven) 
		{
			
			$('#message').html('I have too much energy in me, I need something to get down.');
			
		}

		if(x>550 && x<700 && level==4 && teagiven) 
		{
			
			$('#message').html('Thank you very much, I calm down now!');
			
		}

		if(x>550 && x<700 && level==7 && !bookgiven) 
		{
			
			$('#message').html('I am so stupid, because I read 10 years only books with pictures and no text!');
			
		}

		if(x>550 && x<700 && level==7 && bookgiven) 
		{
			
			$('#message').html('Very good, now I can train my brain-muscles!');
			
		}

		if(x>550 && x<700 && level==8 && !gamegiven) 
		{
			
			$('#message').html('I was in prison and there were computers forbidden! Now I have bought a computer. But I have no game to play!');
			
		}

		if(x>550 && x<700 && level==8 && gamegiven) 
		{
			
			$('#message').html('Thank you for that game! "Space Invaders", nice game!');
			
		}

		if(x>550 && x<700 && level==3 && !rosegiven) 
		{
			
			$('#message').html('I have seen Luisa again! And I thought I will never see her again. But I have no gift for her.');
			
		}

		if(x>550 && x<700 && level==3 && rosegiven) 
		{
			
			$('#message').html('Very nice, this rose I give next time Luisa!');
			
		}

		if(x>550 && x<700 && level==6 && !needlegiven) 
		{
			
			$('#message').html('I am only coming through in waves. I have no pain, I am only becoming comfortably numb. All I need is a little pinprick!');
			
		}

		if(x>550 && x<700 && level==6 && needlegiven) 
		{
			
			$('#message').html('That tastes good. With this needle I know now that I am alive.');
			
		}

		if(x>550 && x<700 && level==2 && !clockgiven) 
		{
			
			$('#message').html('I always come to late to my job. I cant manage my time.');
			
		}


		
	});

	function spielende() {
		clearInterval(takt);
		$('#spielendeanzeige').show();
	}
	
	$(document).bind('keyup', function (evt) { idle=true; walk=false; });
	
	$(document).bind('keydown', function (evt) {
		console.log(evt.keyCode);
		idle=true;
		walk=false;
		switch (evt.keyCode) {
			// Pfeiltaste nach unten
			case 40:
				idle=false;
				walk=true;
				console.log("Pfeiltaste nach unten");
				//y += 20;
				if (y >= 480) {
					y = 460;
				}
				console.log("Wert y: "+y);
				return false;
				break;
			case 38:
				idle=false;
				walk=true
				//y -= 20;
				if (y <= 0) {
					y = 0;
				}
				// console.log("Wert -y: "+y);
				return false;
				break;
			// Pfeiltaste nach links
			case 37:
				idle=false;
				walk=true;
				movec=0;
				mover=0;
				//x -= 20;
				if (x <= 0) {
					x = 0;
				}
				// console.log("Wert -x: "+x);
				return false;
				break;
			case 39:
				idle=false;
				walk=true;
				//x += 20;
				movec=0; 
				mover=1;
				
				//if (x >= 600) {
				//	x = 580;
				//}
				// console.log("Wert x: "+x);
				return false;
				break;
		}		
	});
	
	function zeichneZielfeld() {
		var zielfeld = new Image();
		zielfeld.src='bilder/zielbereich.png';
		zielfeld.onload=function() {
			spielfeld.drawImage(zielfeld, zielx, ziely);
		}
	}
	zeichneZielfeld();
	
	function zielfelderreicht() {
		console.log("x: "+x+ "|Ziel x:"+ zielx);
		console.log("y: "+y+ "|Ziel y:"+ ziely);

		if(x==zielx && y==ziely) {
			// Ziel erreicht!
			console.log("Ziel erreicht!");
		if (ziely==460) {
				ziely = 0;
			}
			else {
				ziely=460;
			}
			zielx = Math.floor(Math.random()*28)*20+20;
			siegpunkte++;
			$('#punktestand').html('Siegpunkte: '+siegpunkte);
		}
	}	
	
	function setzeGegner() {
    for (nr = 0; nr < gegnerpositionen.length; nr++) {
        gegnerpositionen[nr] += gegnerbewegung[nr] * 5;
        if (gegnerpositionen[nr] > 580 || gegnerpositionen[nr] < 0) {
            gegnerbewegung[nr] *= -1;
        }
        erzeugeGegner(gegnerpositionen[nr], 360-(nr*40));
    }
}
	function erzeugeGegner(gx, gy) {
	var img = new Image();
	img.src = 'bilder/gegnerfigur.png';
	img.onload = function() {
		spielfeld.drawImage(img, gx, gy);
	}
} 
	function kollisionspruefungGegner() {
    for (nr = 0; nr < gegnerpositionen.length; nr++) {
        var ygeg = 360-(nr*40);
        if ( Math.abs(x - gegnerpositionen[nr]) < 20 && y == ygeg ) {
            // Zusammenstoß
			kollisionGegner();
            console.log("Zusammenstoß");
            console.log( Math.abs(x - gegnerpositionen[nr]) );
            console.log( " | y: "+ y );
            console.log( " | y: "+ ygeg  + " berechnet ");
        }
    }
}
function kollisionGegner() {
	clearInterval(takt);
	$('#gameover').show();
}
});

//ansimuz,cuzco,pauR,etqws3,Tiny Speck,hansolo,WarmGuy,Crysjreid, Craftpix,andy1998,raghuram8892, AntumDeluge,rrcaseyr,IgnasD,Magnesus,tiilerdye,Reemax,scofanogd