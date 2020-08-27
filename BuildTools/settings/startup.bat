:: TEAMCO startup.ini file
start D:\moodmedia\software_v5\bin\MVShell\MVShell.exe

rem D:\moodmedia\software_v5\TaskBar.exe -hide          
  
:: Set WSUS Information
D:\moodmedia\software_v5\run_as_cmd.exe "cmd:D:\moodmedia\software_v5\SetWsusInformation.exe" elevate
::Download and install updates
D:\moodmedia\software_v5\run_as_cmd.exe "cmd:D:\moodmedia\software_v5\WsusManager.exe" "args:-auto" elevate

:: Start chrome instance to initialize chrome.exe first instance after boot
start D:\moodmedia\software_v5\Google\Chrome\Application\chrome.exe

:: Start winvnc server
D:\moodmedia\software_v5\run_as_cmd.exe "cmd:D:\moodmedia\software_v5\prog_winvnc.bat" elevate
					
:: Start path to v5 services
regedit /s D:\moodmedia\software_v5\services_v5.reg

:: Start LogEngine
D:\moodmedia\software_v5\setProgress.exe -p 15 -m "Starting Log engine..."
D:\moodmedia\software_v5\run_as_cmd.exe "cmd:D:\moodmedia\software_v5\log_engine.exe" elevate

:: Start RunAsServer (exe version)


:: Start Update_Env_Variables
D:\moodmedia\software_v5\setProgress.exe -p 20 -m "Updating Background..."
D:\moodmedia\software_v5\run_as_cmd.exe "cmd:D:\moodmedia\software_v5\Update_Env_Variables.exe" elevate

D:\moodmedia\software_v5\Update_Env_Variables.exe

:: Set command line default path
D:\moodmedia\software_v5\setProgress.exe -p 30 -m "Updating Registry"
D:\moodmedia\software_v5\run_as_cmd.exe "cmd:D:\moodmedia\software_v5\reg_cmd-d-moodmedia-software_v5.bat" elevate

regedit.exe /s D:\moodmedia\software_v5\cmd-d-moodmedia-software_v5.reg

:: Start KeyListener
D:\moodmedia\software_v5\setProgress.exe -p 40 -m "Running Key Listener..."
D:\moodmedia\software_v5\key_listener.exe

:: Restore screen resolution
D:\moodmedia\software_v5\setProgress.exe -p 50 -m "Checking Display Resolution..."
D:\moodmedia\software_v5\desktop_resolution_manager.exe /load
D:\moodmedia\software_v5\setProgress.exe -p 60 -m "Updating system date and time..."
D:\moodmedia\software_v5\run_as_cmd.exe "cmd:D:\moodmedia\software_v5\set_date_time.exe" args:-fs elevate
:: Start TeamCo playlister
D:\moodmedia\software_v5\setProgress.exe -p 70 -m "Starting Playback Program"
start D:\moodmedia\software_v5\popup_guard.exe

:: kill chrome first instance after boot
taskkill /im chrome.exe /f

start %TEAMCO_PLAYBACK_APP_PATH%

:: Start GDLSVC
D:\moodmedia\software_v5\setProgress.exe -p 80 -m "Starting Services"
D:\moodmedia\software_v5\run_as_cmd.exe "cmd:D:\moodmedia\software_v5\run_gdlsvc.bat" elevate


:: Start PCMSVC
D:\moodmedia\software_v5\run_as_cmd.exe "cmd:D:\moodmedia\software_v5\run_pcmsvc.bat" elevate
:: Start CRONSVC
D:\moodmedia\software_v5\run_as_cmd.exe "cmd:D:\moodmedia\software_v5\run_cronsvc.bat" elevate

:: Start TeamCo offline update
D:\moodmedia\software_v5\setProgress.exe -p 85 -m "Starting offline update process"
D:\moodmedia\software_v5\run_as_cmd.exe "cmd:D:\moodmedia\software_v5\tc_offline_update.exe" elevate

:: Start FlashTrigger
D:\moodmedia\software_v5\setProgress.exe -p 87 -m "Starting Flash trigger"
D:\moodmedia\software_v5\FlashTrigger.exe

:: Start TeamCo updater downloader
D:\moodmedia\software_v5\setProgress.exe -p 90 -m "Checking for next Updates"
D:\moodmedia\software_v5\run_as_cmd.exe "cmd:D:\moodmedia\software_v5\env_update_downloader.exe" elevate
:: Start TeamCo updater updater


:: Launch project startup
cd /d D:\moodmedia\project\scripts\
call D:\moodmedia\project\scripts\startup_project.bat
D:\moodmedia\software_v5\run_as_cmd.exe "cmd:D:\moodmedia\software_v5\fix_notepadpp.bat" elevate
D:\moodmedia\software_v5\setProgress.exe -p 100 -m "Startup finish"
rem D:\moodmedia\software_v5\TaskBar.exe -hide
D:\moodmedia\software_v5\setProgress.exe -c
exit
