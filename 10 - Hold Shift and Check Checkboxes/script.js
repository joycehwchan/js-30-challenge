const checkboxes = document.querySelectorAll('.inbox [type="checkbox"]');

let lastChecked;

const handleCheck = (e) => {
  let inBetween = false;

  // check if shift key is down
  // and check if they are checking it
  if (e.shiftKey && e.currentTarget.checked) {
    // 💡 Loop through every checkbox
    checkboxes.forEach((checkbox) => {
      if (checkbox === e.currentTarget || checkbox === lastChecked) {
        inBetween = !inBetween; // toggle!
        console.log("checking inbetween...");
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }

  // 💡 Save the last checked
  lastChecked = e.currentTarget;
};

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
