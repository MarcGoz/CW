  function expandImg(imgId) {
                var img = document.getElementById(imgId);
                var expandImg = document.createElement("img");
                expandImg.src = img.src;
                expandImg.className = "expanded";
                expandImg.setAttribute("onclick", "shrinkImg(this)");
                document.body.appendChild(expandImg);
            }
            function shrinkImg(img) {
                img.parentNode.removeChild(img);
            }
