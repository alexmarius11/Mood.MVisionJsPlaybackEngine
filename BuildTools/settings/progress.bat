set ProgressAngle=0
set ProgressDebug=
::set ProgressDebug=-debug
if "%TEAMCO_CLIENT_Env_Name%" EQU "CLEAR_CHANNEL" set ProgressAngle=90
if "%TEAMCO_CLIENT_Env_Name%" EQU "laforet" set ProgressAngle=90
start D:\moodmedia\software_v5\env_updateV5\bin\startupProgress\StartupProgress.exe -angle %ProgressAngle% %ProgressDebug%
exit /B 0