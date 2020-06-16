const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.close-btn')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click',showSidebar)

function showSidebar(){
    sidebar.classList.toggle('show-sidebar')
}

closeBtn.addEventListener('click',closeSidebar)

function closeSidebar(){
    sidebar.classList.remove('show-sidebar')
}