function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    // modal fullscreen
    modal.style.width = "100%";
    modal.style.height = "100%";
    // modal center
    modal.style.position = "absolute";
    modal.style.top = "50px";
    modal.style.left = "0";
    modal.style.right = "0";
    modal.style.bottom = "0";
    modal.style.margin = "auto";
    modal.style.padding = "20px";
    modal.style.border = "1px solid #ccc";
    modal.style.borderRadius = "10px";
    modal.style.backgroundColor = "white";
    //  get modal-title querySelector
    const  modalTitle = document.querySelector(".modal-title")
    const headingName = document.querySelector(".heading-name").textContent
    console.log(headingName);
    // add title to modal-title
    modalTitle.innerText += ` ${headingName}`;
    
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    const  modalTitle = document.querySelector(".modal-title")

    modal.style.display = "none";
    modalTitle.innerHTML = "Contactez-moi";
}
