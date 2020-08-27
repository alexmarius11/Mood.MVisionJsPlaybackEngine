:: DEHA shutdown.ini file
:: Modified by product technology on the 27nd of July 2010
:: Launch project shutdown
call D:\moodmedia\project\scripts\shutdown_project.bat
:: Stopping PCM services
net stop pcmsvc
sleep 3
:: Stopping CRON service
net stop cronsvc
sleep 3
:: Stopping GDL service
net stop gdlsvc
sleep 3

