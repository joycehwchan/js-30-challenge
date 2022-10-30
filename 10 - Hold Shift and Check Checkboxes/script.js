const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');

let lastChecked;

function handleCheck(e) {
  let inBetween = false;

  // check if shift key is down
  // and check if they are checking it
  if (e.shiftKey && this.checked) {
    // 💡 Loop through every checkbox
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween; // toggle!
        console.log("checking inbetween...");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  // 💡 Save the last checked
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
