#Folder Stucture

Application core files start with capitalized letter. User folders start with lowercase letters

App : where all core application thingies lies
|
|----Data : the database
|
|/_ Below is stuffs for users. That's where you make you own magic. _/
|
appIndex : !Mandatory! this is where all the root views/controllers lie.
|----views : !Mandatory!
|--------index.pug : !Mandatory! view for the root /
|--------anything.pug : view for /anything
|----controllers
|--------index.js : !Mandatory! controller for /
|--------anything.js : controller for /anything
|
appAnything : Folder for any /anything subapp.
|----views
|--------someStuffs.pug : view for /anything/somestuff
|----controller
|--------someStuff.js : controller for /anything/somestuff
