console.log('script is loaded');

class ScriptRemote {

    constructor() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyDZd2iv7nI6clDZKhcZWZIlCtrd5ztVJiY",
            authDomain: "remote-pvra.firebaseapp.com",
            databaseURL: "https://remote-pvra.firebaseio.com",
            storageBucket: "remote-pvra.appspot.com",
            messagingSenderId: "952233990276"
        };

        firebase.initializeApp(config);
        document.querySelector("#letsGo").onclick = this.enterTheVoid;
        }

    enterTheVoid() {
        let db = firebase.database();
        let value = db.ref('/isActive');
        value.once('value',function(isActive) {
            if(isActive.val()) {
                db.ref('/isActive').set(false); 
                document.querySelector('#letsGo').style.height = "220px";
                document.querySelector('#letsGo').style.width = "220px";
                
            } else {
                db.ref('/isActive').set(true);

                document.querySelector('#letsGo').style.height = "200px";
                document.querySelector('#letsGo').style.width = "200px";
            }
        })
        console.log('done!')
    }
}

new ScriptRemote();