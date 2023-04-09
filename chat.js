function openChatWindow(){
    document.getElementById("chat-form-container").style.display = "block";
}
function closeChatWindow(){
    document.getElementById("chat-form-container").style.display = "none";
}

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click',() => {
        faq.classList.toggle('open');
    } )
})
