# **DASHCRAFT TRACK JSON DOWNLOADER**

### **HOW TO USE THIS TOOL:**

This Chrome extension allows you to download the JSON of any track on DashCraft.io, using a track link or ID.
To get a track link, open the desired track in a race and press the three dots:
<img width="1364" height="581" alt="Screenshot 2026-04-07 9 59 53 AM" src="https://github.com/user-attachments/assets/bd3562e3-305d-43b5-b939-c4c777e35659" />
Then press the "SHARE" button:
<img width="1364" height="581" alt="Screenshot 2026-04-07 10 00 15 AM" src="https://github.com/user-attachments/assets/e430cadf-106e-4b69-a257-531f6ce3c4e4" />
Open the Chrome extension and paste the link copied from the "SHARE" button in the Track Link or ID box (note: you can do this with only the track ID; the track ID is the string of letters and numbers after "/?t=" in the share link).
Press the "DOWNLOAD JSON" button.
If it comes back with an error message, that means the link or ID is invalid.
When the box at the bottom says "Download Started!" then the track JSON is downloading to your computer.
The filename should look like: "dashcraft_track_[TRACK ID].json".
You can now read the data on any DashCraft track!

### **HOW TO ADD AS AN EXTENSION:**

Go to https://github.com/ididitrizz/DashCraft_JSON_Download and click "Code":
<img width="1365" height="596" alt="Screenshot 2026-04-07 10 12 55 AM" src="https://github.com/user-attachments/assets/5525c8fb-f658-4ef5-b15e-0079abd138f1" />
Then press "Download ZIP":
<img width="1365" height="596" alt="Screenshot 2026-04-07 10 15 01 AM" src="https://github.com/user-attachments/assets/22edc61c-d7c8-4914-ba34-b18bc37c70d0" />
Go to your files app and right click on the "DashCraft_JSON_Download_main.zip" file and press "Extract All". <br>
Now go to chrome://extensions/ and enable "Developer Mode" in the top right corner:
<img width="1365" height="596" alt="Screenshot 2026-04-07 10 17 55 AM" src="https://github.com/user-attachments/assets/ecbe2f5c-a227-4e95-9468-ce1db2c38702" />
Then press the "Load Unpacked" button:
<img width="1365" height="596" alt="Screenshot 2026-04-07 10 20 20 AM" src="https://github.com/user-attachments/assets/0d4d072e-3497-44cc-aa4f-28fac79a2814" />
It should open your files app.
Double-click the folder titled "DashCraft_JSON_Download_main".
This should open and have another folder with the same title.
Select this folder and click "Open".
The extension should appear and you should be ready to go!

### **READING THE JSON:**

To better understand what the JSON tells you, here is what each part of the JSON means. (NOTE: To get info on what the piece IDs correspond to, check out this page: https://ididitrizz.github.io/DashCraft_Piece_IDs/)

"_id": The track identifier, what is at the end of track links to tell the game what track is being loaded. <br>
"trackPieces": The list of pieces that are in the track. <br>
&emsp; "id": Identifier for the piece. <br>
&emsp; "uid": In which sequence the piece was placed. <br>
&emsp; "p": The piece's XYZ coordinates. <br>
&emsp; "r": The rotation of the piece. <br>
&emsp; "a": Any additions to the piece, such as boosters, ramps or checkpoints. <br>
"computedLinkedCheckpoints": Any linked checkpoints' coordinates (seen as a blue line in the editor). <br>
"editorVersion": The version of the editor. <br>
"isPublic": Whether or not the track is a public track. <br>
"lapsCount": The number of laps (if none, it says 0) <br>
"userId": The identifier for the builder, what is at the end of a user profile share link. <br>
"environmentId": The environment the track is in (Stadium, Mountains or Sea). <br>
"daytimeId": What seems to be the remains of the developer (Ctrl4ltDel) trying to add daytime or nighttime, always set to 1. <br>
"hash": The JSON fingerprint, used to tell if data has been tampered with. <br>
"drivingVersion": The version in which the track was created.

That should cover the JSON information. I hope that the way in which I wrote the data made sense, and if it didn't, you can reach out to me.

If any of this doesn't work, feel free to reach out to me in https://github.com/ididitrizz/DashCraft_JSON_Download/issues and I will try to respond as soon as possible.
If you like this tool, please share it with friends and follow me on DashCraft (https://dashcraft.io?u=68f74a06b308c1dc2655c54c).
Thank you for using my DashCraft_JSON_Download tool!
