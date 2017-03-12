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
            } else {
                db.ref('/isActive').set(true);
            }
        })
        console.log('done!')
    }
}

new ScriptRemote();