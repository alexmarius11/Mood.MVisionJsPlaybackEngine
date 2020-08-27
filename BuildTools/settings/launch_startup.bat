find /c /i "software_v5" "D:\moodmedia\software_v5\settings\env_update_processor.xml"
set DetectedFullV5=%ERRORLEVEL%

if %DetectedFullV5% EQU 0 goto FULL_V5
if %DetectedFullV5% EQU 1 goto V4ToV5

:FULL_V5
D:\moodmedia\software_v5\run_as_cmd.exe cmd:D:\moodmedia\software_v5\settings\BlockRemoteAccess.bat elevate
call D:\moodmedia\software_v5\settings\startup.bat
exit 0

:V4ToV5
D:\moodmedia\software_v5\setProgress.exe -c
start D:\moodmedia\software\env_update\run_as_server_updater_proc.exe
sleep 3
call D:\moodmedia\software\waitstrt.exe @D:\moodmedia\software\settings\startup.ini

exit 0