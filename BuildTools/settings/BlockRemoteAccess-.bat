::03_02_2017 KD
::03_02_2017 KD
::03_02_2017 KD
::03_02_2017 KD
::03_02_2017 KD


@ECHO OFF

::net stop W3SVC
::sc config W3SVC start= demand

SC QUERY TeamViewer8 > NUL
IF ERRORLEVEL 1060 GOTO MISSING8
net stop TeamViewer8
sc config TeamViewer8 start= demand
:MISSING8
SC QUERY TeamViewer9 > NUL
IF ERRORLEVEL 1060 GOTO MISSING9
net stop TeamViewer9
sc config TeamViewer9 start= demand
GOTO FREESSH
:MISSING9
SC QUERY TeamViewer > NUL
IF ERRORLEVEL 1060 GOTO FREESSH
net stop TeamViewer
sc config TeamViewer start= demand
:FREESSH
net stop FreeSSHDService
sc config FreeSSHDService start= demand

net stop tvnserver
sc config tvnserver start= demand

reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server" /v fDenyTSConnections /t REG_DWORD /d 1 /f

::turn on windows firewall for all profiles
netsh advfirewall set allprofiles state on

:: block vnc connection in
netsh advfirewall firewall set rule name="RealVNC" protocol=TCP new enable=yes action=block
netsh advfirewall firewall set rule name="RealVNC" protocol=UDP new enable=yes action=block
netsh advfirewall firewall set rule name="TightVNC" new enable=yes action=block
netsh advfirewall firewall set rule name="vnc5900" new enable=yes action=block
netsh advfirewall firewall set rule name="vnc5600" new enable=yes action=block

:: DO NOT block http connection in - this will disable PlayerConfig and HTML5 templates functionality
::netsh advfirewall firewall set rule name="World Wide Web Services (HTTP Traffic-In)" new enable=yes action=block

:: block ssh connection in
netsh advfirewall firewall set rule name="SSH" new enable=yes action=block
netsh advfirewall firewall set rule name="FreeSSHDService Module" protocol=TCP new enable=yes action=block
netsh advfirewall firewall set rule name="FreeSSHDService Module" protocol=UDP new enable=yes action=block

:: block rdp connection in
netsh advfirewall firewall set rule name="Remote Desktop (TCP-In)" new enable=yes action=block
netsh advfirewall firewall set rule name="Remote Desktop - User Mode (TCP-In)" new enable=yes action=block

:: block virtual MPX connection in
netsh advfirewall firewall set rule name="VirtualBox 2222 & 8022" new enable=yes action=block
netsh advfirewall firewall set rule name="VirtualBox App" new enable=yes action=block

:: block TeamViewer connection in

::netsh advfirewall firewall set rule name="Teamviewer Remote Control Application" protocol=TCP new enable=yes action=block
::netsh advfirewall firewall set rule name="Teamviewer Remote Control Application" protocol=UDP new enable=yes action=block
::netsh advfirewall firewall set rule name="Teamviewer Remote Control Service" protocol=TCP new enable=yes action=block
::netsh advfirewall firewall set rule name="Teamviewer Remote Control Service" protocol=UDP new enable=yes action=block

