<script>
function toggle(btn) {
  const content = btn.nextElementSibling;
  const all = document.querySelectorAll(".therapy-content");

  all.forEach(c => {
    if (c !== content) c.style.display = "none";
  });

  content.style.display =
    content.style.display === "block" ? "none" : "block";
}
</script>
