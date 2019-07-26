// Adding background for the multiline text blocks
function multilineBackgrounds() {
    const multilineBlocks = document.querySelectorAll('.js-padded-multiline-src');
    multilineBlocks.forEach(multilineBlock => {
        const originalContent = multilineBlock.innerHTML;
        let formated = originalContent
            .replace(/<br>/gi, '[linebreak]')
            .replace(/<strong>/gi, '[strong-open]')
            .replace(/<\/strong>/gi, '[strong-close]')
            .replace(/<span style="text-decoration: underline;">|<span style="text-decoration: underline;" data-mce-style="text-decoration: underline;">/gi, '[underline-open]')
            .replace(/<\/span>/gi, '[underline-close]');
        let tempDiv = document.createElement('div');
        tempDiv.innerHTML = formated.trim();
        const split = tempDiv.innerText.trim().split("[linebreak]");
        let target;
        let output = "";
        let zIndex = split.length;
        split.forEach((line, i) => {
            const finalLine = line
                .replace(/\[strong-open\]/gi, '<strong>')
                .replace(/\[strong-close\]/gi, '</strong>')
                .replace(/\[underline-open\]/gi, '<span style="text-decoration: underline;">')
                .replace(/\[underline-close\]/gi, '</span>');
            (finalLine == '') ? output += `<span class="emptyLine"></span>` : output += `<span>${finalLine}</span>`;
          if (i < split.length - 1) {
            output += "<br>";
          }
          zIndex--;
        });

        // Since we can't add unique IDs in collection items, we create specific case
        // 'data-target-id' is removed from the 'js-padded-multiline-src' element and 
        // 'js-padded-multiline-target' is added to the target element instead of an ID
        // it is very important in this case that both src and target elements are on the same level
        if ( document.querySelector(`#${multilineBlock.dataset.targetId}`) == undefined ) {
          target = multilineBlock.parentNode.querySelector('.js-padded-multiline-target');
        } else {
          target = document.querySelector(`#${multilineBlock.dataset.targetId}`);
        }          

        target.innerHTML = `
        <div class="padded-multiline-bg">${output}</div>
        <div class="padded-multiline-fg">${output}<div>`;
    });
}

multilineBackgrounds();