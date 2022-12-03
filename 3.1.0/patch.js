 var elem = document.createElement("div");
        elem.innerHTML = `<nav class="titlebar">
          <div class="window-title" id="window-title"></div>
          <div id="window-controls-container">
              <div id="spacer"></div>
              <div id="minimize"><div id="minimize-icon"></div></div>
              <div id="maximize"><div id="maximize-icon"></div></div>
              <div id="quit"><div id="quit-icon"></div></div>
          </div>
        </nav>`;
        elem.classList.add("withFrame-haYltI");
        if (document.getElementById("app-mount") == null) {
            document.body.appendChild(elem);
        } else {
            document.getElementById("app-mount").prepend(elem);
        }
