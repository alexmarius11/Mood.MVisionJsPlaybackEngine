
Build/Compile/Start WebServer on Node.js - Steps:
----------------------------------
  01 # cd in the target folder, like:
      > cd C:\____WebOS\dev05

  02. #optional >git init - but better used Treesource to manage the modifications)    

  03. >git clone https://github.com/VisualSolutions/Mood.MVisionJsPlaybackEngine
       
  04. >npm run-script compile

  05. >npm start

  06. >in browser : http://localhost:2000
 

Packaging app for WebOS
	The following command will package the folder public, path:  ./deploy/node.js/10.15.3LTS/public
	The output will be in the folder 10.15.3LTS, path: ./deploy/node.js/10.15.3LTS/
----------------------------------
	> npm run build_ipk