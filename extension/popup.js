const href = window.location.href;

function change_url() {
  let new_url = href.replace("watch", "watch_popup");
  window.location.href = new_url; // Use this to navigate to the new URL
}

document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.key.toLowerCase() === 'q') {
    change_url();
  }
});
