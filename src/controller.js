function handleSignedOutUser() {
    location.hash = "#login";
    // contentDiv.innerHTML =  
    // `
    // `;    
}

//pienso que se puede crear una función pura que maneje estas dos
// también sugiero cambairles el nombre

function handleSignedInUser(firebaseUser) {
    location.hash = "#timeline";
    
    const bringTimelineContent = () => {
        contentDiv.innerHTML = 
        `<section class = "timeline-screen">
            <nav id = "timeline-nav" class= "timeline-nav flex-row">
                <h1>madame{code}</h1>
                <a href="">Salir<img src=""></a>
            </nav>

            <div id="user-info"></div>

            <article id="create-post" class="create-post">
                <h2>Crear Publicación:</h2>
                <input id="input-post" type="text" placeholder="¿Qué quieres compartir con la comunidad?">
                <p>Visible para:</p>
                <input type="radio" name="post-visibility" value="public"> Público
                <input type="radio" name="post-visibility" value="friends"> Sólo Amigos
                <br>
                <button id="publish-post">Publicar</button>
            </article>
        </section>

        <section id="all-posts">
            <h2>Publicaciones recientes:</h2>
            <article id="display-posts">
                <div id ="own-post">
                    <p id="user-email"><span class="strong">micorreo@es.com</span> compartió:</p><button id="edit-post">Edit</button>
                    <br>
                    <p id="publication" contenteditable="false">Texto EDITABLE de la publicación:</p>
                    <br>
                    <button id="like-post">like</button>
                </div>
                <div id ="other-post">
                        <p id="user-email"><span class="strong">correodeotros@es.com</span> compartió:</p>
                        <br>
                        <p id="publication">Texto de la publicación:</p>
                        <br>
                        <button id="like-post">like</button>
                </div>
            </article>
        </section>
    `;
}
    const userInfo = document.getElementById('user-info');
    userInfo.innerHTML =    `ID de usuario: ${firebaseUser.uid}<br>
                            Email: ${firebaseUser.email}<br>
                            Nombre: ${firebaseUser.displayName}`;
    
    const publishBtn = document.getElementById('publish-post');
    const visibility = document.querySelectorAll('post-visibility');
    console.log(visibility); //WHAT is visibility?
    const visibilityArr = Array.prototype.slice.call(visibility);
    console.log(visibilityArr); //WHAT is visibilityArr?

    function getVisibilityVal() {
        let val;
        // get list of radio buttons with specified name
        var radios = visibilityArr;
        
        // loop through list of radio buttons
        for (var i=0, len=visibilityArr.length; i<len; i++) {
            if ( visibilityArr[i].checked ) { // radio checked?
                val = visibilityArr[i].value; // if so, hold its value in val
                break; // and break out of for loop
            }
        }
        console.log(val);
        return val; // return value of checked radio or undefined if none checked
    }

    const addPost = () => {

    }
}

