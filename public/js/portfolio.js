$(document).ready(function () {
    $('#exampleModalCenter').on('show.bs.modal', (event) => {
        const card = $(event.relatedTarget) // Card that triggered the modal
        const link = card.data('link') // Extract info from data-* attributes
        // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
        // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
        const modal = $(this)
        //   modal.find('.modal-title').text('New message to ' + recipient)
        modal.find('iframe').attr('src', "https://www.youtube.com/embed/" + link + "?autoplay=1")
        console.log(card.find('p:first-child').text());
        modal.find('.modal-footer p').text(card.find('div:first p:first').text())
        modal.find('.modal-title').text(card.find('.card-title').text())
    })
    // reset link when closing modal
    $('#exampleModalCenter').on('hidden.bs.modal', (event) => {
        $(this).find('iframe').attr('src', '');
    })
})