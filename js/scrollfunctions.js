window.addEventListener('scroll',() => {
        const scrolled = window.scrollY;
        console.log(scrolled);

        if (scrolled >= 680 ) {
          document.getElementById("navigation-panel-btns-sec").style.display="block";
          document.getElementById("navigation-panel-btns-sec").style.background="transparent";
        }else {
          document.getElementById("navigation-panel-btns-sec").style.display="none";
        }
        if (scrolled > 1500 ) {
          document.getElementById("home-btn").style.color="#000000";
          document.getElementById("about-btn").style.color="#000000";
          document.getElementById("tournaments-btn").style.color="#000000";
          document.getElementById("login-btn").style.color="#000000";
          document.getElementById("contact-btn").style.color="#000000";
          document.getElementById("faq-btn").style.color="#000000";
          document.getElementById("navigation-panel").style.background="#FFFFFFF0";

        }else {
          document.getElementById("home-btn").style.color="#ffffff";
          document.getElementById("about-btn").style.color="#ffffff";
          document.getElementById("tournaments-btn").style.color="#ffffff";
          document.getElementById("login-btn").style.color="#ffffff";
          document.getElementById("contact-btn").style.color="#ffffff";
          document.getElementById("faq-btn").style.color="#ffffff";
          document.getElementById("navigation-panel").style.background="transparent";
        }






});
