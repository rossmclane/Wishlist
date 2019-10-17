// Add Event Listener to Submit Button
function storeItem(e) {

    e.preventDefault();

    // Get everything from the DOM
    let itemName = document.getElementById('item-name').value;
    let itemLink = document.getElementById('item-link').value;
    let itemMessage = document.getElementById('item-message').value;
    let itemSeverity = document.getElementById('issueSeverityInput').value;

    // Create a JS object
    wishlist_item = {
        itemName: itemName,
        itemLink: itemLink,
        itemMessage: itemMessage,
        itemSeverity: itemSeverity,
        id: chance.guid()
    };

    if (localStorage.getItem('items_array') == null) {

        // Create an empty array
        let items_array = [];

        // Push wishlist item
        items_array.push(wishlist_item);

        // Save the list back
        localStorage.setItem('items_array', JSON.stringify(items_array))

    } else {
        let items_array = JSON.parse(localStorage.getItem('items_array'));

        items_array.push(wishlist_item);

        // Save the list back
        localStorage.setItem('items_array', JSON.stringify(items_array))
    }

    // Re-Display The Items
    displayItems();
}

// Display Items
function displayItems() {
    let items_array = JSON.parse(localStorage.getItem('items_array'));

    // Get a reference to where the list should go in the DOM
    let wish_list = document.getElementById('wishlist');

    wish_list.innerHTML = "";

    if (items_array != null) {
        for (let i = 0; i < items_array.length; i++) {

            // Change Lets to Consts if you can
            let itemName = items_array[i].itemName;
            let itemLink = items_array[i].itemLink;
            let itemMessage = items_array[i].itemMessage;
            let itemSeverity = items_array[i].itemSeverity;
            let itemID = items_array[i].id;

            // Add Item Name
            h2TagName = document.createElement('h2');
            h2TagName.textContent = itemName;

            // Add ID
            smallTagID = document.createElement('small');
            smallTagID.textContent = 'GUID: ' + itemID;

            // Add Link
            pTagLink = document.createElement('p');
            aTagLink = document.createElement('a');
            aTagLink.textContent = 'Item Link';
            aTagLink.href = itemLink;
            pTagLink.appendChild(aTagLink);

            // Add Message
            pTagMessage = document.createElement('p');
            pTagMessage.textContent = 'Message: ' + itemMessage;

            // Add Item Name
            pTagSeverity = document.createElement('p');
            pTagSeverity.textContent = 'Severity: ' + itemSeverity;
            pTagSeverity.style = 'color: red;'

            // Append Children to wish_list
            wish_list.appendChild(h2TagName);
            wish_list.appendChild(smallTagID);
            wish_list.appendChild(pTagLink);
            wish_list.appendChild(pTagMessage);
            wish_list.appendChild(pTagSeverity);

        }
    }

}