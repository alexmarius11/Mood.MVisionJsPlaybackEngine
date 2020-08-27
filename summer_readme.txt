    This is the delivery of SP4. I made the installations on the demo environments (so there is no need for additional installations)
   
 
     SP4 implements  
     ------------
        1. the xml configuration service 
        2. the image renderer with a small image simulator 
   (+what was already implemented in SP1-SP3): 
 
    Known Issues:
    --------------------
        Note: 
            1. Unfortunately Tizen doesn't work with external images (external urls) that I have used for the image simulator (in order not to create different configurations) so for instance, 
                                                                                                                    (for the demo) I have re-installed the SP3 version (that display standalone (local) image and video)
            2. On Web OS TV the display of the .xml has a loading issue but the image simulator works well. On the Emulator (where I tested more due the missing usb-hub) the Web OS xml-s are well displays. For instance I dont know the reason related to this different behavior.

   For Demo :
         For Morgan-demo there a 4 environments prepared as Demos.
                1.  Linux Ubuntu 18.04               - with the images simulator + the file explorer test app with standalone (local) images and videos
                2.  Android 5.1.1                         - with the images simulator + the file explorer test app with standalone (local) images and videos  
                3.  WebOS LG TV  4.06             - with the images simulator + the file explorer test app with standalone (local) images and videos    
                4.  Tizen Samsung TV  SSSP4  - only with the file explorer test app with standalone (local) images and videos      

        On Nodejs : I have included Apache for the delivery of static resources (image, videos) on all Nodejs versions (Android, Linux, Windows) (for performances reason and not to burden the nodejs server that manages the application logic). 
        On TVs its the SDK and OS that ensure the static delivery (via an url on WebOS and directly with files:/// on Tizen)

   Pending items
    ----------------
        1.  On Tizen I arrives to implement in SP3 some pending items (from SP1)
                        - copyFile , moveFile, copyFolder, moveFolder (note: the copyFile from the SDK erase the existing folder content so a second version need to be implemented too)
                - still remains : downloadfile , unzipfile , and zipFile/zipFolder (for the next sprints) - still pending from SP1 (-> alex iorga departure) +  upload

        2.  On WebOS I arrived to correct in SP4 the 10k buffer limitation (pending from  SP2)  (I have addressed  the WebOS 10K limitation on the file buffers inside this sprint too (SP4)) - reimplementing readFile and writeFile/saveFile
              - still remains to be implemented with our own code copyFolder / zipFile/ zipFolder that are not part of WebOS SDK + upload

       3.  For Nodejs  on Windows, Android, Linux the upload is functional but you need a server where to upload.
    
Startups:

1. Startup on Android
--------------------------------

  1.A Startup the Server :
  -----------------------
    a. open a termux terminal (from the application list) - is similar with the terminal application in Unix
    a.0 
        > cd W 
           (where a start-ubuntu.sh script is placed)
    b. in termux ...starts ubuntu-set on top of termux with the command :
            > ./start-ubuntu.sh 
    c. you will enter in the home folder of "root"(that is not the real root of the android)
    d. start up apache with 
        > apache2ctl start 
    e. > cd W
    f.  > cd 107 
    g. > cd Mood.MVisionJsPlaybackEngine
    h. > npm run linux2
           (Please note that on android is linux2)

   1.B.  Start up the Client
    ------------
         a. open chrome from the application list 
         b. start the client in chrome at
                     http://127.0.0.1:3000


2. On Linux-Ubuntu 
----------------------

  1.A Startup the Server :
  -----------------------
    a. open a linux terminal (from the application list) 
    c. you will enter in home folder of "stream01" (having "mood""pwd)
    d. (usually apache is started automatically at startup but anyway you can startup apache (that will tell you that is started) with:
        > apache2ctl start 

    e. > cd W
    f.  > cd 107 
    g. > cd Mood.MVisionJsPlaybackEngine
    h. > npm run ubuntu2
           (Please note that on Ubuntu is ubuntu2)   

   1.B.  Start up the Client
    ------------
         a. open chrome from another terminal in full screen
                 > google-chrome --kiosk http://127.0.0.1:3000

On Termux-ubuntu exit:
    > Ctrl+C  (to stop application server)
    > apache2tcl stop (to stop apache)
    > exit (to arrive back on termux)

Additionals
--------------------
   Apache can be managed by the following commands: 
               > apache2ctl stop 
               > apache2ctl start   
               > apache2ctl restart    

  The application server can be (for instance) stopped using 
              > Ctrl+C inside the terminal where the nodejs is started 

   Usefull commands : pwd -> show you the current folder 
                                  cd .. (or cd <folder name) 
                                   ls (echiv. with dir)


3.-4. On Web OS and on Tizen you simple restart the TV (if needed)

Note: The application run also on Windows

   A good day for all of you,
                   marius a.


   P.S. My phone  number is 0723 906 431 (you can contact me for any issue, explanations, etc...)



Marius Gabriel Alexandru <m.alexandru@moodmedia.com>
Fri, Oct 4, 2019, 5:13 PM
to me




---------- Forwarded message ---------
From: Marius Gabriel Alexandru <m.alexandru@moodmedia.com>
Date: Fri, Jul 26, 2019 at 6:10 PM
Subject: Delivery SP4
To: Vlad Ivan <v.ivan@moodmedia.com>, Cătălin Biță <c.bita@moodmedia.com>, Emil Craciun <e.craciun@moodmedia.com>
Cc: Marius Condruz <m.condruz@moodmedia.com>


Hello All, 
    This is the delivery of SP4. I made the installations on the demo environments (so there is no need for additional installations)
   
 
     SP4 implements  
     ------------
        1. the xml configuration service 
        2. the image renderer with a small image simulator 
   (+what was already implemented in SP1-SP3): 
 
    Known Issues:
    --------------------
        Note: 
            1. Unfortunately Tizen doesn't work with external images (external urls) that I have used for the image simulator (in order not to create different configurations) so for instance, 
                                                                                                                    (for the demo) I have re-installed the SP3 version (that display standalone (local) image and video)
            2. On Web OS TV the display of the .xml has a loading issue but the image simulator works well. On the Emulator (where I tested more due the missing usb-hub) the Web OS xml-s are well displays. For instance I dont know the reason related to this different behavior.

   For Demo :
         For Morgan-demo there a 4 environments prepared as Demos.
                1.  Linux Ubuntu 18.04               - with the images simulator + the file explorer test app with standalone (local) images and videos
                2.  Android 5.1.1                         - with the images simulator + the file explorer test app with standalone (local) images and videos  
                3.  WebOS LG TV  4.06             - with the images simulator + the file explorer test app with standalone (local) images and videos    
                4.  Tizen Samsung TV  SSSP4  - only with the file explorer test app with standalone (local) images and videos      

        On Nodejs : I have included Apache for the delivery of static resources (image, videos) on all Nodejs versions (Android, Linux, Windows) (for performances reason and not to burden the nodejs server that manages the application logic). 
        On TVs its the SDK and OS that ensure the static delivery (via an url on WebOS and directly with files:/// on Tizen)

   Pending items
    ----------------
        1.  On Tizen I arrives to implement in SP3 some pending items (from SP1)
                        - copyFile , moveFile, copyFolder, moveFolder (note: the copyFile from the SDK erase the existing folder content so a second version need to be implemented too)
                - still remains : downloadfile , unzipfile , and zipFile/zipFolder (for the next sprints) - still pending from SP1 (-> alex iorga departure) +  upload

        2.  On WebOS I arrived to correct in SP4 the 10k buffer limitation (pending from  SP2)  (I have addressed  the WebOS 10K limitation on the file buffers inside this sprint too (SP4)) - reimplementing readFile and writeFile/saveFile
              - still remains to be implemented with our own code copyFolder / zipFile/ zipFolder that are not part of WebOS SDK + upload

       3.  For Nodejs  on Windows, Android, Linux the upload is functional but you need a server where to upload.
    
Startups:

1. Startup on Android
--------------------------------

  1.A Startup the Server :
  -----------------------
    a. open a termux terminal (from the application list) - is similar with the terminal application in Unix
    a.0 
        > cd W 
           (where a start-ubuntu.sh script is placed)
    b. in termux ...starts ubuntu-set on top of termux with the command :
            > ./start-ubuntu.sh 
    c. you will enter in the home folder of "root"(that is not the real root of the android)
    d. start up apache with 
        > apache2ctl start 
    e. > cd W
    f.  > cd 107 
    g. > cd Mood.MVisionJsPlaybackEngine
    h. > npm run linux2
           (Please note that on android is linux2)

   1.B.  Start up the Client
    ------------
         a. open chrome from the application list 
         b. start the client in chrome at
                     http://127.0.0.1:3000


2. On Linux-Ubuntu 
----------------------

  1.A Startup the Server :
  -----------------------
    a. open a linux terminal (from the application list) 
    c. you will enter in home folder of "stream01" (having "mood""pwd)
    d. (usually apache is started automatically at startup but anyway you can startup apache (that will tell you that is started) with:
        > apache2ctl start 

    e. > cd W
    f.  > cd 107 
    g. > cd Mood.MVisionJsPlaybackEngine
    h. > npm run ubuntu2
           (Please note that on Ubuntu is ubuntu2)   

   1.B.  Start up the Client
    ------------
         a. open chrome from another terminal in full screen
                 > google-chrome --kiosk http://127.0.0.1:3000

On Termux-ubuntu exit:
    > Ctrl+C  (to stop application server)
    > apache2tcl stop (to stop apache)
    > exit (to arrive back on termux)

Additionals
--------------------
   Apache can be managed by the following commands: 
               > apache2ctl stop 
               > apache2ctl start   
               > apache2ctl restart    

  The application server can be (for instance) stopped using 
              > Ctrl+C inside the terminal where the nodejs is started 

   Usefull commands : pwd -> show you the current folder 
                                  cd .. (or cd <folder name) 
                                   ls (echiv. with dir)


3.-4. On Web OS and on Tizen you simple restart the TV (if needed)

Note: The application run also on Windows

   A good day for all of you,
                   marius a.
