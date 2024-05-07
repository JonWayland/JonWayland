document.getElementById("searchInput").addEventListener("keyup", function() {
    var query = this.value.toLowerCase();
    var sections = document.querySelectorAll('section');
    
    sections.forEach(function(section) {
        var searchData = section.getAttribute('data-search');
        if(searchData && searchData.toLowerCase().includes(query)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});

function openPopup() {
  document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

