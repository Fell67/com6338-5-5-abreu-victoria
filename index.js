const hamburgerBtnElement = document.querySelector('nav .hamburger-btn')
const hamburgerMenuElement = document.querySelector('nav .hamburger-menu')

// Toggles the Hamburger Menu to open and close it and sets the aria expanded tag to the Hamburger Button element
function showAndHideHamburgerMenu () {
    // Toggle the `show-menu` class on the `.hamburger-menu` element to show/hide the menu
    hamburgerMenuElement.classList.toggle('show-menu')

    // Toggle the `aria-expanded` to match if the menu is opened
    const ariaExpanded = (hamburgerBtnElement.getAttribute('aria-expanded') === 'true')
    hamburgerBtnElement.setAttribute('aria-expanded', !ariaExpanded)
}

// Determines if the Hamburger Menu is showing. Returns true if it is visible and false if not
function isShowingMenu () {
    return hamburgerMenuElement.classList.contains('show-menu')
}

// When the hamburgerBtnElement is clicked show the hamburgerMenuElement
hamburgerBtnElement.addEventListener('click', function (e) {
    e.stopPropagation()
    showAndHideHamburgerMenu()
})

// Pressing the Escape key when the menu is open should close the menu and focus `button.hamburger-btn`
document.addEventListener('keyup', function (e) {
    // If the escape key was pressed and the menu is open
    if (e.key === 'Escape' && isShowingMenu()) {
        // Close the menu
        showAndHideHamburgerMenu()

        // Focus on the `button.hamburger-btn`
        hamburgerBtnElement.focus()
    }
})

// Clicking outside of `.hamburger-menu` closes the menu if it is open
document.addEventListener('click', function (e) {
    // If this click was outside of the menu and the menu is open
    if (!hamburgerMenuElement.contains(e.target) && isShowingMenu()) {
        // Close the menu
        showAndHideHamburgerMenu()
    }
})