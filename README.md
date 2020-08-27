# Build/Compile/Start WebServer on Node.js - Steps:
----------------------------------
```sh
  01. change directory to the target folder, like 
  (Note: used a very short path like c:\W\08 (W=Webos xx=dev-version) 
  because WebOS CLI (included in github) has very long paths 
  that affect default file-name lengths of .git):
      $ cd C:\W\08

  02. optional:
        $ git init - but better used SourceTree to manage the modifications   

  03. $ git clone https://github.com/VisualSolutions/Mood.MVisionJsPlaybackEngine

  04. change the current directory to the application folder:
      $ cd Mood.MVisionJsPlaybackEngine

  05. $ npm run-script compile

  06. $ npm start

  07. inside browser : http://localhost:2000
 ```

# Packaging app for WebOS
	The following command will package the folder public, path:  ./deploy/node.js/10.15.3LTS/public
	The output will be in the folder 10.15.3LTS, path: ./deploy/node.js/10.15.3LTS/
----------------------------------
```sh
	$ npm run build_ipk
```

# Start application in WebOS Signage Emulator 


----------------------------------
The following commands will start the above deployed application in Web OS Signage Emulator

```sh
   01. from Windows Control panel start WebOS Signage CLI (WebOS Signage Command Line)
   C:\webOS_Signage_SDK\CLI\bin>
   
   02. change the current directory to the application deployed (.ipk) folder:   
      like:
           >cd C:\W\08\Mood.MVisionJsPlaybackEngine\deploy\node.js\10.15.3LTS
      
   03. install the .ipk package in the emulator
      like:
       >ares-install com.moodmedia.app.moodvisualsolution_0.0.1_all.ipk
      Installing package com.moodmedia.app.moodvisualsolution_0.0.1_all.ipk
      Success

   04.  launch the .ipk package 
      >ares-launch com.moodmedia.app.moodvisualsolution
         Launched application com.moodmedia.app.moodvisualsolution
```


# Instalare

windows 
------------
0. instalati git pentru windows daca nu-l aveti instalat (vers 64 biti)
         https://git-scm.com/download/win

1. tastati cmd in Win10 "Type here to search"

2. in cmd-ul deschis completati parola si dati
>git clone https://alexmar1970:S...36@github.com/alexmar1970/W2     

3. in acelasi cmd deschis
>cd W2

4. in acelasi cmd deschis rulati
>installw.bat

aplicatia se si downloadeaza si si porneste si ruleaza pe broserul local in localhost:3000   

a. o puteti opri daca dati Ctrl (e deasupra) si C in cmd

5. porniti Apache (ca sa mapati resursele statice imagini, video-uri, fisiere)

5.1. copiati Apache24 din ...BuildTools in c:\Apache24 

   Nota : Apache 24 e gata configurat sa mapeze discul c:/

5.2  porniti din ../bin-ul lui startapache.bat

6. aplicatia o puteti porni din nou dupa oprire (ea e deja pornita):
  va duceti intr-un cmd in  directoarele
  cd W
     cd 107
       cd Mood.MVisionJsPlaybackEngine

si dati 

npm run windows

---------------------------------------------
pe telefon/tableta/cutie cu android
---------------------------------------------

1. instalati din google play aplicatiile termux si termux-api
2. deschideti aplicatia termux
3. in Termux rulati comenzile
    a. pkg install git
    b. pkg install coreutils
    c. git clone https://alexmar1970:Statictree36@github.com/alexmar1970/W
    d. cd W
    e. sh installa.sh

(faceti copy/paste de aici)
aplicatia se si downloadeaza si si porneste si ruleaza pe broserul local in localhost:3000 
fisierele din telefon le gasiti in /storage
atentie sa nu stergeti ce nu trebe

>pwd va da directorul curent in termux

a. o puteti opri daca dati Ctrl (e deasupra) si C in Termux dupa care inchideti Termux

b. o puteti porni 
  daca va duceti in directorul
  cd   W
cd 107

cd Mood.MVisionJsPlaybackEngine

si dati 

npm run android

a. o puteti sterge daca va duceti deasupra directorului W cu cd .. (cd blank ..) succesiv 
si dati 
>rm -rf W

-------------------
deocamdata appplicatia e doar un file explorer la care se lucreaza

mai trebe pus Apache...

----------------------
instalarea pe linux va urma... 
-----------------------
    