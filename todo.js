function newElement()
        {
            var li = document.createElement("li");
            var inputValue = document.getElementById("input").value;
            var t = document.createTextNode(inputValue);
            li.appendChild(t);
            if(inputValue === " ")
            {
                document.getElementById("items").value = " ";

            }else{

                document.getElementById("items").appendChild(li);
            }
            document.getElementById("input").value = " ";

            
            var btn = document.createElement("button");
            var txt = document.createTextNode("Delete");
            btn.className="delete";
            btn.appendChild(txt);
            li.appendChild(btn);
            btn.onclick = function(){
                btn.parentElement.remove()
                return;
            };
        }