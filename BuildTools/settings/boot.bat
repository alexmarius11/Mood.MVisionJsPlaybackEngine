:: MVision boot.ini file
rem for /f "tokens=4-5 delims=. " %%i in ('ver') do set VERSION=%%i.%%j
rem if "%version%" == "10.0" (start /min %windir%\explorer.exe)
REG add HKCU\Software\Microsoft\Windows\CurrentVersion\Policies\System /v DisableTaskMgr /t REG_DWORD /d 1 /f
rem D:\moodmedia\software_v5\TaskBar.exe -hide
D:\moodmedia\software_v5\bin\runas\run_as_cmd.exe  wait_root:600
start /min D:\moodmedia\software_v5\env_updateV5\bin\runas\run_as_server_proc.exe
D:\moodmedia\software_v5\env_updateV5\bin\runas\run_as_cmd.exe wait:600
call D:\moodmedia\software_v5\settings\progress.bat
rem D:\moodmedia\software_v5\TaskBar.exe -hide
D:\moodmedia\software_v5\env_updateV5\setProgress.exe -p 1 -m Starting...
del "%TEAMCO_SOFTWARE_Logs_Folder%*last_played.csv"
D:\moodmedia\software_v5\env_updateV5\setProgress.exe -p 5 -m "Wainting for then environment has started..."
D:\moodmedia\software_v5\env_updateV5\run_as_cmd.exe wait:600
D:\moodmedia\software_v5\env_updateV5\setProgress.exe -p 7 -m "Checking for updates..."
D:\moodmedia\software_v5\env_updateV5\run_as_cmd.exe cmd:D:\moodmedia\software_v5\env_updateV5\env_update_processor.exe elevate
set RETURNCODE=%ERRORLEVEL%
if %RETURNCODE% EQU 0 (
  D:\moodmedia\software_v5\env_updateV5\setProgress.exe -p 10 -m "No updates found, starting applications..."  
  call D:\moodmedia\software_v5\settings\launch_startup.bat
  goto END
)
if %RETURNCODE% EQU 1 (
  D:\moodmedia\software_v5\env_updateV5\setProgress.exe -p 10 -m "Applying updates...."
  goto END
)	
if %RETURNCODE% EQU 2 (
  D:\moodmedia\software_v5\env_updateV5\setProgress.exe -p 99 -m "Applied updates successfully, rebooting..."
  goto END
)
if %RETURNCODE% EQU -1 ( 
  echo %date% %time% Invalid Environement Settings>>D:\tmp\boot_Error.log
  goto UPDATE_ERROR 
)
if %RETURNCODE% EQU -2 goto UPDATE_ERROR 
if %RETURNCODE% EQU -3 ( 
  echo %date% %time% Wrong Account Type>>D:\tmp\boot_Error.log
  goto UPDATE_ERROR 
)
if %RETURNCODE% EQU -4 ( 
  echo %date% %time% ERROR: with a stream account, we couldn't stop-start environments. Exiting environment updater>>D:\Tmp\boot_Error.log
  goto UPDATE_ERROR 
)

:UPDATE_ERROR
call d:\moodmedia\software_v5\settings\progress.bat
D:\moodmedia\software_v5\env_updateV5\setProgress.exe -p 10 -m "An error occured during update"
call D:\moodmedia\software_v5\settings\launch_startup.bat
:END

exit /B 0
exit /B 0
exit /B 0