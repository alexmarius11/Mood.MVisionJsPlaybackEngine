::11/28/2017 3:21:56 PM ID
::04_07_2017 ID
::04_07_2017 ID
::04_07_2017 ID


@ECHO OFF

SC QUERY TeamViewer8 > NUL
IF ERRORLEVEL 1060 GOTO MISSING8
net start TeamViewer8
:MISSING8
SC QUERY TeamViewer9 > NUL
IF ERRORLEVEL 1060 GOTO MISSING9
net start TeamViewer9
GOTO FREESSH
:MISSING9
SC QUERY TeamViewer > NUL
IF ERRORLEVEL 1060 GOTO FREESSH
net start TeamViewer
:FREESSH
net start FreeSSHDService

net start tvnserver

reg add "HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Terminal Server" /v fDenyTSConnections /t REG_DWORD /d 0 /f

:: allow vnc connection in
netsh advfirewall firewall set rule name="RealVNC" protocol=TCP new enable=yes action=allow
netsh advfirewall firewall set rule name="RealVNC" protocol=UDP new enable=yes action=allow
netsh advfirewall firewall set rule name="TightVNC" new enable=yes action=allow
netsh advfirewall firewall set rule name="vnc5900" new enable=yes action=allow
netsh advfirewall firewall set rule name="vnc5600" new enable=yes action=allow

:: allow ssh connection in
netsh advfirewall firewall set rule name="SSH" new enable=yes action=allow
netsh advfirewall firewall set rule name="FreeSSHDService Module" protocol=TCP new enable=yes action=allow
netsh advfirewall firewall set rule name="FreeSSHDService Module" protocol=UDP new enable=yes action=allow

:: allow rdp connection in
netsh advfirewall firewall set rule name="Remote Desktop (TCP-In)" new enable=yes action=allow
netsh advfirewall firewall set rule name="Remote Desktop - User Mode (TCP-In)" new enable=yes action=allow

:: allow virtual MPX connection in
netsh advfirewall firewall set rule name="VirtualBox 2222 & 8022" new enable=yes action=allow
netsh advfirewall firewall set rule name="VirtualBox App" new enable=yes action=allow

:: allow TeamViewer connection in

netsh advfirewall firewall set rule name="Teamviewer Remote Control Application" protocol=TCP new enable=yes action=allow
netsh advfirewall firewall set rule name="Teamviewer Remote Control Application" protocol=UDP new enable=yes action=allow
netsh advfirewall firewall set rule name="Teamviewer Remote Control Service" protocol=TCP new enable=yes action=allow
netsh advfirewall firewall set rule name="Teamviewer Remote Control Service" protocol=UDP new enable=yes action=allow

sc config FreeSSHDService start= auto
net start FreeSSHDService
