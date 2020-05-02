function logInWithUsername() {
      document.getElementById("toggle-btn-box").style.left="0px";
      document.getElementById("toggle-btn-box").style.transform="translate(0, -50%)";
      document.getElementById("toggle-btn-box").style.width="90px";
      document.getElementById("toggle-btn-1").style.color="#ffffff";
      document.getElementById("toggle-btn-2").style.color="#000000";
      document.getElementById("toggle-btn-3").style.color="#000000";
      document.getElementById("lbl-userid").innerHTML="Username";
      document.getElementById("input-id").name="username";
      document.getElementById("input-id").placeholder="@username";
      document.getElementById("input-id").type="text";
}
function logInWithEmail() {
      document.getElementById("toggle-btn-box").style.left="50%";
      document.getElementById("toggle-btn-box").style.transform="translate(-50%, -50%)";
      document.getElementById("toggle-btn-box").style.width="70px";
      document.getElementById("toggle-btn-1").style.color="#000000";
      document.getElementById("toggle-btn-2").style.color="#ffffff";
      document.getElementById("toggle-btn-3").style.color="#000000";
      document.getElementById("lbl-userid").innerHTML="Email";
      document.getElementById("input-id").name="emailid";
      document.getElementById("input-id").placeholder="username@domain.ext";
      document.getElementById("input-id").type="email";
}
function logInWithPhoneNo() {
      document.getElementById("toggle-btn-box").style.left="140px";
      document.getElementById("toggle-btn-box").style.transform="translate(0, -50%)";
      document.getElementById("toggle-btn-box").style.width="90px";
      document.getElementById("toggle-btn-1").style.color="#000000";
      document.getElementById("toggle-btn-2").style.color="#000000";
      document.getElementById("toggle-btn-3").style.color="#ffffff";
      document.getElementById("lbl-userid").innerHTML="Phone Number";
      document.getElementById("input-id").name="phnum";
      document.getElementById("input-id").placeholder="+91 9998887776";
      document.getElementById("input-id").type="text";
}
