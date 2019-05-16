$("document").ready(function() {       //Main

    let basicSize = 80;
    const sizeToIncrease = 20;
    let basicMarginFromTop = 0;
    const basicMarginFromLeft = 64;

    const charactersArray = ['A','B','C','D', 'E', 'F','G','H','I','J','M','N','L','O','P','Q','R','S','T','U','V','W','Y','Z'];

    $("#createSquareBtn").click(function() {
        console.log("Button clicked");

        $('<div/>', {
            class: `squareCard`,
            style: `width: ${basicSize}px; height: ${basicSize}px;bottom: ${-basicMarginFromTop}px; `,
            html: `<span class='squareText'>${charactersArray[Math.floor(Math.random() * charactersArray.length)]}</span>`
        }).appendTo('#squareSurface');

        basicSize += sizeToIncrease;
        // basicMarginFromTop += sizeToIncrease;

    });
});