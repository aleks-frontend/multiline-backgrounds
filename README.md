# Multiline backgrounds
## Required HTML structure
```
<div class="padded-multiline">
  <div id="js-padded-multiline-target-1"></div>
  <div class="js-padded-multiline-src" data-target-id="js-padded-multiline-target-1">
    Lorem ipsum <strong>dolor</strong> sit amet, consectetur adipisicing elit. <strong>Corporis</strong> animi quia vero dolor veritatis<br> cupiditate alias quos, aperiam libero, labore veniam distinctio pariatur placeat culpa laborum, deserunt<br>repudiandae autem dolorem!
  </div><!-- end js-padded-multiline-src -->
</div><!-- end padded-multiline -->
```
## Additional Instructions
Only important thing with HTML is that `#js-padded-multiline-target-1` is empty (this is where the new html structure will be 
injected). ID of this div is also optional but it's important that it matches the `data-target-id`of the 
`.js-padded-multiline-src` div.

It is also very important to inform the user that line breaks need to be created manually.

## Text formatting
Another important thing is that no formatting options should be allowed for the text input that will be used for the multiline
background element.

But latest addition to the function is allowing users to add bold and italic formatting.
