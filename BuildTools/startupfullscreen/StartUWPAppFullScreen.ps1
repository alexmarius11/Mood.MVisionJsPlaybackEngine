<#
.SYNOPSIS
  Start UWP App in fullscreen mode

.DESCRIPTION
  Start an UWP app and sends Windows key, Left Shift, Return keystroke to the active window

.NOTES
  Version:        1.0
  Author:         R. Mens
  Creation Date:  30 May 2017
  Purpose/Change: Init

.EXAMPLE
	Start Edge and Open google.nl
   .\StartUWPAppFullScreen.ps1 -app microsoft-edge -value 'http://google.nl'

.EXAMPLE
	Start Microsoft Video 
   .\StartUWPAppFullScreen.ps1 -app microsoftvideo

.THANKS TO https://github.com/stefanstranger/PowerShell/blob/master/WinKeys.ps1
#>

#----------------------------------------------------------[Initialisations]----------------------------------------------------------

[CmdletBinding()]
PARAM(	
	[parameter(ValueFromPipeline=$true,
				ValueFromPipelineByPropertyName=$true,
				Mandatory=$true)]
	[string]$app,
	[parameter(ValueFromPipeline=$true,
				ValueFromPipelineByPropertyName=$true,
				Mandatory=$false)]
	[string]$value
)

#src https://github.com/stefanstranger/PowerShell/blob/master/WinKeys.ps1
$source = @"
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.InteropServices;
using System.Windows.Forms;
namespace KeyboardSend
{
    public class KeyboardSend
    {
        [DllImport("user32.dll")]
        public static extern void keybd_event(byte bVk, byte bScan, int dwFlags, int dwExtraInfo);
        private const int KEYEVENTF_EXTENDEDKEY = 1;
        private const int KEYEVENTF_KEYUP = 2;
        public static void KeyDown(Keys vKey)
        {
            keybd_event((byte)vKey, 0, KEYEVENTF_EXTENDEDKEY, 0);
        }
        public static void KeyUp(Keys vKey)
        {
            keybd_event((byte)vKey, 0, KEYEVENTF_EXTENDEDKEY | KEYEVENTF_KEYUP, 0);
        }
    }
}
"@

Add-Type -TypeDefinition $source -ReferencedAssemblies "System.Windows.Forms"

#----------------------------------------------------------[Functions]----------------------------------------------------------

Function FullScreen ()
{
    [KeyboardSend.KeyboardSend]::KeyDown("LWin")
    [KeyboardSend.KeyboardSend]::KeyDown("LShiftKey")
    [KeyboardSend.KeyboardSend]::KeyDown("Return")
    [KeyboardSend.KeyboardSend]::KeyUp("LWin")
    [KeyboardSend.KeyboardSend]::KeyUp("LShiftKey")
    [KeyboardSend.KeyboardSend]::KeyUp("Return")
}

#---------------------------------------------------------[Execution]--------------------------------------------------------

# Start the app
$startString = $app + ":" + $value
start $startString

# Wait and send key stroke 
sleep 2
FullScreen