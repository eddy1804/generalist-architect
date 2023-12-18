// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
    var sizeClasses = ['large', 'medium', 'small'];
    var flexItems = document.querySelectorAll("#flex-container .flex-item");

    flexItems.forEach(function(item) {
        // Assign a random size class to each item
        var randomSize = sizeClasses[Math.floor(Math.random() * sizeClasses.length)];
        item.classList.add(randomSize);
    });
});

function changeBackground(element, newImageUrl) {
    element.style.backgroundImage = "url('" + newImageUrl + "')";
}

function resetBackground(element, originalImageUrl) {
    element.style.backgroundImage = "url('" + originalImageUrl + "')";
}



// Randomize order of items on main page
document.addEventListener("DOMContentLoaded", function() {
    shuffleItems();
});

function shuffleItems() {
    var container = document.getElementById('flex-container');
    var items = Array.from(container.children);
    for (var i = items.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = items[i];
        items[i] = items[j];
        items[j] = temp;
    }
    // Reappend items in random order
    container.innerHTML = '';
    items.forEach(function(item) {
        container.appendChild(item);
    });
}


// create popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}