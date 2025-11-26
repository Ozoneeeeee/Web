const wrapper = document.querySelector(".wrapper");

const innerDiv = document.createElement("div");  // create a new <div>
innerDiv.className = "inner";                   // add class="inner"
innerDiv.textContent = "This is inner text";    // add text inside

wrapper.append(innerDiv);                       // insert into wrapper
