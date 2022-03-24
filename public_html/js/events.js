var sliderimg= document.querySelector('.event-slides');
			var i=0;
			var images=[
			    "event1.jpg",
				"event2.jpg",
				"event3.jpg"
			];
			
			
			function prev(){
				if(i<=0) i= images.length;
				i--;
				return setImg();
			}
			function next(){
				if(i>= images.length - 1) i =-1;
				i++;
				return setImg();
			}
			function setImg(){
				return sliderimg.setAttribute('src','img/'+images[i]);
			}